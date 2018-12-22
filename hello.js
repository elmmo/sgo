chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
    console.log("Well it worked")
    console.log(response.farewell)
  });