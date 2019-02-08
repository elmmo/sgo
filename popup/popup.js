// showing the profiles already stored in options
$(function() {
    helloWorld(); 
}); 

// change status based on time and available hours 
let helloWorld = function() { 
    chrome.storage.sync.get(null, function(profiles) {
        for (p in profiles) {
            console.log(getOfficeHours(profiles[p][1])); 
            let statusButton = document.createElement("SPAN");
        }
    }); 
}

// parses the time received from the timepicker 
let getOfficeHours = function(str) { 
    let arr = str.split(":| "); 
    for (item in arr) {
        console.log(arr[item]); 
    }
}

// gets the current time 
let getCurrentTime = function() { 
    let today = new Date(); 
    return [today.getHours(), today.getMinutes()]; 
}


