chrome.runtime.sendMessage({greeting: "Open Whitworth connection"}, function(response) {
    console.log("Connection created")
    console.log(response.farewell)
  });