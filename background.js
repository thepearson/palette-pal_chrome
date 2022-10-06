/**
 * Opens the configured Palette pal url in a new tab.
 * 
 * @param info: OnClickData https://developer.chrome.com/docs/extensions/reference/contextMenus/#type-OnClickData
 * @return  {void}
 */
function openPalettePal(info) {
  // Get the configured PalettePal url
  chrome.storage.sync.get("url", ({ url }) => {
    // Open a new Tab with the Palette Pal URL
    chrome.tabs.create({url: url}, (tab) => {
      // Set the image URL from the context into storage, which is used by the
      // content script.
      chrome.storage.sync.set({image: info.srcUrl});
    });
  });
}

/* Create a listener to bind to the onClick event in the context menu */
const listener = chrome.contextMenus.onClicked.addListener(openPalettePal)

/* Add a menu item to the context menu, but only trigger on images. */
chrome.contextMenus.create({
  id: "palettel-pal-ext", 
  title: "Extract colors with Palette Pal", 
  contexts:["image"], 
  onclick: listener
});

