/**
 * This script runs oint he context of the extention on a page,
 * the manifest.json controls what pages this script will run on.
 */



/**
 * This function injects a script tag and data into the page.
 *  <script 
 *    id="injected-data" 
 *    type="text/javascript" 
 *    src="inject-script.js" 
 *    data-context="{image:\"IMAGE_URL\"}"></script>
 * 
 * The script in the file inject-script.js is then executed.
 *
 * @param   {[type]}  file_path  [file_path description]
 * @param   {[type]}  tag        [tag description]
 * @param   {[type]}  data       [data description]
 *
 * @return  {[type]}             [return description]
 */
function injectScript(file_path, tag, data) {
  var node = document.getElementsByTagName(tag)[0];
  var script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('src', file_path);
  script.setAttribute('id', 'injected-data');
  script.setAttribute('data-context', JSON.stringify(data));
  node.appendChild(script);
}

/**
 * Calls the injectScript function which adds a script 
 * to run in the pages context to the page.
 */
chrome.storage.sync.get("image", ({ image }) => {
  // Only inject the 
  if (image) {
    injectScript(chrome.runtime.getURL('inject-script.js'), 'body', { url: image });
    chrome.storage.sync.set({ image: null })
  }
});
