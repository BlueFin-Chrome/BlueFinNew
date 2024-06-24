import { asyncSleep, getAllArticles, getBlueFinnArticles } from "~utils/helper"

console.log("getZest")

async function getZestimate() {
  let finalHouses = []
  await asyncSleep(1)

  // getting all the articles
  const allArticles = await getAllArticles()
  getBlueFinnArticles(allArticles)
    .then((blueFinnArticles) => {
      console.log("Blue Finn Articles:", blueFinnArticles)
      // Process blueFinnArticles as needed
    })
    .catch((error) => console.error("Error processing articles:", error))

  // for (let i = 0; i < allArticles.length; i++) {
  //   const article = allArticles[i]
  //   await getBlueFinnArticles(article)
  // }
}
export default getZestimate

// Working
// Check if Asking price is equal or lower to Zestimate, then show that article otherwise hide it
