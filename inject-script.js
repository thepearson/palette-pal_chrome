// Get the injected data script tag (See: content-script.js)
const target = document.getElementById('injected-data');

// Grabe the JSON from the script data tag
const data = JSON.parse(target.getAttribute('data-context'));

// Dispatch a custom event, since this script runs in the context of the browser, 
// Our application can respond to this event and pick up the details data
// from the event.
window.dispatchEvent(new CustomEvent('RecieveContent', { detail: data }));
