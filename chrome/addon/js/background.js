chrome.browserAction.onClicked.addListener(()=>{
    chrome.tabs.create({
        url:"https://www.usernamewilson.me"
    })
});
