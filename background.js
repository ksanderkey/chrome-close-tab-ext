chrome.contextMenus.create({
    "title": "Close page",
    "type" : "normal",
    "contexts" : ["page"],
    "onclick": (info, tab) => {
        chrome.tabs.remove(tab.id, () => {});
    }
});
