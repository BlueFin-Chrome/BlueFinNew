// const scrollTillBottom = async (ref: HTMLElement | null) => {
//   await asyncSleep(1) // Wait for 1 second before scrolling
//   ref?.scroll({
//     top: ref?.scrollHeight,
//     left: 0,
//     behavior: "smooth"
//   })
// }
// const scrollTillUp = async (ref: HTMLElement | null) => {
//   await asyncSleep(1) // Wait for 1 second before scrolling
//   ref?.scroll({
//     top: 0,
//     left: 0,
//     behavior: "smooth"
//   })
// }
// // Scrolling again and again
// async function scrollDiv() {
//   const wholeDiv = document.querySelector(
//     "#search-page-list-container"
//   ) as HTMLElement
//   scrollTillBottom(wholeDiv)
//   await asyncSleep(2)
//   scrollTillUp(wholeDiv)
//   await asyncSleep(1)
//   scrollTillBottom(wholeDiv)
//   await asyncSleep(2)
//   scrollTillUp(wholeDiv)
//   await asyncSleep(3)
// }
const scrollTillBottom = (ref: any, duration: any) => {
  return new Promise<void>((resolve) => {
    if (!ref) {
      resolve()
      return
    }

    const start = ref.scrollTop
    const end = ref.scrollHeight
    const change = end - start
    const startTime = performance.now()

    const animateScroll = (currentTime) => {
      const elapsedTime = currentTime - startTime
      const progress = Math.min(elapsedTime / duration, 1)
      const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)
      const easedProgress = easeInOutQuad(progress)

      ref.scrollTo(0, start + change * easedProgress)

      if (progress < 1) {
        requestAnimationFrame(animateScroll)
      } else {
        resolve()
      }
    }

    requestAnimationFrame(animateScroll)
  })
}
async function scrollDiv() {
  const wholeDiv = document.querySelector(
    "#search-page-list-container"
  ) as HTMLElement
  await scrollTillBottom(wholeDiv, 5000) // Adjust the duration (in milliseconds) as needed
}

// new method for scroll div
async function getBlueFinnArticles(
  articles: HTMLElement[]
): Promise<HTMLElement[]> {
  console.log("getBlueFinnArticles")
  const blueFinnArticles: HTMLElement[] = []

  for (const article of articles) {
    try {
      const priceElement = article.querySelector(
        `[data-test="property-card-price"]`
      )
      if (!priceElement) throw new Error("Price element not found")

      const askingPrice = priceElement.textContent
        ?.replace(",", "")
        .replace("$", "")

      if (!askingPrice) throw new Error("Unable to parse asking price")

      const zillowUrl = article.querySelector("a")?.getAttribute("href")
      if (!zillowUrl) throw new Error("Zillow URL not found")

      const response = await fetch(zillowUrl)
      if (!response.ok)
        throw new Error(`Failed to fetch URL: ${response.statusText}`)

      const html = await response.text()
      const parser = new DOMParser()
      const doc = parser.parseFromString(html, "text/html")

      let containerBlock: HTMLElement
      let zestimateRef: string | null

      const containerBlockRef = doc.querySelectorAll(
        `.styles__StyledDataModule-fshdp-8-100-2__sc-14rfp2w-0`
      ) as NodeListOf<HTMLElement>

      if (containerBlockRef) {
        containerBlock = containerBlockRef[3] as HTMLElement
        const allList = containerBlock?.querySelectorAll(
          ".Text-c11n-8-100-2__sc-aiai24-0"
        )
        if (allList.length < 4)
          throw new Error("Not enough elements in allList")
        zestimateRef = allList[3].textContent
      } else {
        zestimateRef = document
          .querySelector(`[data-testid="zestimate-text"]`)
          ?.textContent?.replace(",", "")
          .replace("$", "") as string
      }

      let zestimatePrice: string | undefined
      try {
        zestimatePrice = zestimateRef.match(/\d+/g)?.join("")
        if (!zestimatePrice) throw new Error("Unable to parse Zestimate")
      } catch (error) {
        console.log("Error parsing Zestimate:", error)
        continue // Skip to the next article
      }

      // await asyncSleep(2);

      if (parseInt(askingPrice) < parseInt(zestimatePrice)) {
        const blueFinnArticle = article?.parentNode?.parentNode
          ?.parentNode as HTMLElement
        console.log("Show")

        console.log(blueFinnArticle, "parent")

        blueFinnArticles.push(blueFinnArticle)
      }
    } catch (error) {
      console.log("Error checking article:", error)
    }
  }

  return blueFinnArticles
}

function asyncSleep(sec: number) {
  return new Promise((resolve) => setTimeout(resolve, sec * 1000))
}
// getting all the articles
async function getAllArticles() {
  let finalArticles = []

  let nextActive: any
  // handling other pages using pagination buttons
  const paginationButtonsRef = document.querySelector(
    `[data-testid="search-pagination"]`
  ) as HTMLElement

  while (true) {
    await scrollDiv()

    const allArticles = Array.from(document.querySelectorAll("article"))
    await asyncSleep(1)
    finalArticles.push(...allArticles)

    const firstActiveButton = paginationButtonsRef?.querySelector(
      `li[aria-current="page"]`
    )

    nextActive = firstActiveButton?.nextElementSibling.querySelector(
      "a"
    ) as HTMLElement
    await asyncSleep(1)
    if (!nextActive) {
      break // Break the while loop if there is no next sibling
    }
    nextActive.click()

    await asyncSleep(3)
  }

  // return all articles
  return finalArticles
}
// Function for parse filtered articles
function parsePropertyElements(elements: any) {
  const properties = []

  elements?.forEach((element: any) => {
    const scriptTag = element?.querySelector(
      'script[type="application/ld+json"]'
    )
    if (!scriptTag) return

    const jsonData = JSON?.parse(scriptTag?.textContent)
    const address = jsonData?.address
    const price = element?.querySelector(
      ".PropertyCardWrapper__StyledPriceLine-srp-8-101-0__sc-16e8gqd-1"
    )
    const detailsList = element?.querySelectorAll(
      ".StyledPropertyCardHomeDetailsList-c11n-8-101-0__sc-1j0som5-0 li"
    )

    const property = {
      name: jsonData.name,
      address: {
        streetAddress: address.streetAddress,
        addressLocality: address.addressLocality,
        addressRegion: address.addressRegion,
        postalCode: address.postalCode
      },
      price: price ? price.textContent?.trim() : "Price not listed" || 0,
      beds: parseInt(detailsList[0]?.textContent) || 0,
      baths: parseInt(detailsList[1]?.textContent) || 0,
      sqft: parseInt(detailsList[2]?.textContent?.replace(",", "")) || 0,
      url: jsonData.url || "",
      images: []
    }

    // Extracting images
    const imageContainers = element.querySelectorAll(
      ".StyledPropertyCardPhoto-c11n-8-101-0__sc-radyfj-0 img"
    )
    if (!imageContainers) return
    imageContainers?.forEach((img) => {
      property.images.push(img.getAttribute("src"))
    })

    properties.push(property)
  })

  return properties
}

export {
  scrollTillBottom,
  asyncSleep,
  getBlueFinnArticles,
  scrollDiv,
  getAllArticles,
  parsePropertyElements
}

// for (let i = 0; i < allArticles.length; i++) {
//   if (!finalArticles.includes(allArticles[i])) {
//     finalArticles.push(allArticles[i])
//   }
// }
