/**
 * Updates the saved state with the data entered from the options page.
 */
function handleUrlUpdate(event) {
  let current = event.target.parentElement.querySelector('#target_url');
  const url = current.value;
  chrome.storage.sync.set({ url });
}

/**
 * Populates the optios page with data from the saved state.
 */
function constructOptions() {
  chrome.storage.sync.get("url", (data) => {
    let url = data.url;
    document.getElementById('target_url').value = url || 'http://localhost:3000/'
    document.getElementById('save_button').addEventListener("click", handleUrlUpdate);
  });
}

constructOptions();
