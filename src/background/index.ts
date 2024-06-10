console.log("background script running")

chrome.runtime.onInstalled.addListener(() => {
  console.log("onInstalled....")
  chrome.tabs.create({ url: "tabs/index.html" })
})
