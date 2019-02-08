// remove self serv cookies

// Prevents old cookies from creating errors within the auth system
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        var tab = sender.tab.id; 
        console.log("Opened from the tab " + tab); 
        if (request.greeting == "Open Whitworth connection")
            chrome.tabs.onRemoved.addListener(
                function removeCookies(tabid, removed) {
                    // deletes all cookies assoc. with Whitworth once tab that opened the connection is closed 
                    if (tabid == tab) {
                        chrome.cookies.getAll({}, (cookies) => {
                            for (var i = 0; i < cookies.length; i++) {
                                var url = "http" + (cookies[i].secure ? "s" : "") + "://" + cookies[i].domain + cookies[i].path;
                                chrome.cookies.remove({"url": url, "name": cookies[i].name}); 
                            }
                        }); 
                        chrome.tabs.onRemoved.removeListener(removeCookies); 
                    }
                }
            ); 
            sendResponse({farewell: "Close Whitworth connection"});
    });