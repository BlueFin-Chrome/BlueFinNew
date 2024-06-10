import { asyncSleep, getAllArticles, scrollDiv } from "~utils/helper"

console.log("getZest")

async function getZestimate() {
  await asyncSleep(1)
  const wholeDiv = document.querySelector(
    "#search-page-list-container"
  ) as HTMLElement
  await scrollDiv(wholeDiv)

  const allArticles = document.querySelectorAll("article")
  for (let i = 0; i < allArticles.length; i++) {
    const article = allArticles[i]
    await getAllArticles(article)
    console.log(article, "article")
  }
}
export default getZestimate

// Working
// Check if Asking price is equal or lower to Zestimate, then show that article otherwise hide it
