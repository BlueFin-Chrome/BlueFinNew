import { asyncSleep, getAllArticles } from "~utils/helper"

console.log("getZest")

async function getZestimate() {
  let finalHouses = []
  await asyncSleep(1)

  // getting all the articles
  const allArticles = await getAllArticles()

  return allArticles
}
export default getZestimate

// Working
// Check if Asking price is equal or lower to Zestimate, then show that article otherwise hide it
