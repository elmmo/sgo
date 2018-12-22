


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
      if (request.greeting == "hello")
            chrome.tabs.onRemoved.addListener(
                function doThis(tabid, removed) {
                    chrome.cookies.getAll({}, (cookies) => {
                        for (var i = 0; i < cookies.length; i++) {
                            var url = "http" + (cookies[i].secure ? "s" : "") + "://" + cookies[i].domain + cookies[i].path;
                            chrome.cookies.remove({"url": url, "name": cookies[i].name}); 
                        }
                    }); 
                    chrome.tabs.onRemoved.removeListener(doThis); 
                    alert("Sign out launched"); 
                }
            ); 
            sendResponse({farewell: "goodbye"});
    });