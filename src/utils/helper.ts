const scrollTillBottom = async (ref: HTMLElement | null) => {
  await asyncSleep(1) // Wait for 1 second before scrolling
  ref?.scroll({
    top: ref?.scrollHeight,
    left: 0,
    behavior: "smooth"
  })
}
const scrollTillUp = async (ref: HTMLElement | null) => {
  await asyncSleep(1) // Wait for 1 second before scrolling
  ref?.scroll({
    top: 0,
    left: 0,
    behavior: "smooth"
  })
}
// Scrolling again and again
async function scrollDiv(wholeDiv: HTMLElement | null) {
  scrollTillBottom(wholeDiv)
  await asyncSleep(2)
  scrollTillUp(wholeDiv)
  await asyncSleep(1)
  scrollTillBottom(wholeDiv)
  await asyncSleep(2)
  scrollTillUp(wholeDiv)
  await asyncSleep(3)
}

async function getAllArticles(article: HTMLElement) {
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

    const containerBlock = doc.querySelector(
      `.styles__StyledContainer-fshdp-8-100-2__sc-1dg6897-0`
    )
    if (!containerBlock) throw new Error("Container block not found")

    const allList = containerBlock.querySelectorAll(
      ".Text-c11n-8-100-2__sc-aiai24-0"
    )
    if (allList.length < 4) throw new Error("Not enough elements in allList")

    const zestimateRef = allList[3].textContent
    if (!zestimateRef) throw new Error("Zestimate not found")

    const zestimatePrice = zestimateRef.match(/\d+/g)?.join("")
    if (!zestimatePrice) throw new Error("Unable to parse Zestimate")

    console.log(zestimatePrice)
    console.log(askingPrice)

    // await asyncSleep(2)

    if (parseInt(askingPrice) > parseInt(zestimatePrice)) {
      const parent = article?.parentNode?.parentNode?.parentNode as HTMLElement
      parent?.remove()
      console.log("Hide")
    }
  } catch (error) {
    console.log("Error checking Zestimate:", error)
  }
}

function asyncSleep(sec: number) {
  return new Promise((resolve) => setTimeout(resolve, sec * 1000))
}

export { scrollTillBottom, asyncSleep, scrollTillUp, getAllArticles, scrollDiv }
