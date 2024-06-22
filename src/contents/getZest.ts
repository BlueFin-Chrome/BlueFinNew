import {
  asyncSleep,
  getAllArticles,
  getBlueFinnArticles,
  scrollDiv
} from "~utils/helper"

console.log("getZest")

async function getZestimate() {
  let finalHouses = []
  await asyncSleep(1)

  // getting all the articles
  const allArticles = await getAllArticles()
  console.log(allArticles, "allArticles")

  // for (let i = 0; i < allArticles.length; i++) {
  //   const article = allArticles[i]
  //   await getBlueFinnArticles(article)
  // }
}
export default getZestimate

// Working
// Check if Asking price is equal or lower to Zestimate, then show that article otherwise hide it
