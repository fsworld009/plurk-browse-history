//document.body.style.border = "5px solid blue";
console.log("Plurk Exec")

function handleRequest(details){
    console.info("onBeforeRequest",details);
}

//Firefox does not support requestBody and responseBody
chrome.webRequest.onBeforeRequest.addListener(handleRequest,
                                          {urls: ["*://www.plurk.com/*"]},
                                          ["requestBody"]);
