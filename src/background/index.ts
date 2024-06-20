console.log("background script running")

chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.create({ url: "tabs/index.html" })
})
