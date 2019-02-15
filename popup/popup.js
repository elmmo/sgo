// showing the profiles already stored in options
$(function() {
    helloWorld(); 
}); 

// change status based on time and available hours 
let helloWorld = function() { 
    chrome.storage.sync.get(null, function(profiles) {
        for (p in profiles) {
            let status = ""; 
            let officeHours = trim(profiles[p]);  
            let currentTime = getCurrentTime();

            if (currentTime[0] > officeHours[0][0] && currentTime[0] < officeHours[1][0]) {
                // the current hour falls between office hours 
                status = "active"; 
            } else if (currentTime[0] == officeHours[0][0] && currentTime[1] >= officeHours[0][1]) {
                // the current hour is when office hours starts and the number of minutes is within office hours
                status = "active"; 
            } else if (currentTime[0] == officeHours[1][0] && currentTime[1] <= officeHours[1][1]) {
                status = "active";
            } else {
                status = "inactive"; 
            }

            let statusButton = document.createElement("SPAN");
            let text = document.createElement("P"); 
            text.textContent = p; 
            text.className = status; 
            statusButton.appendChild(text); 

            $("#popupContainer").append(statusButton); 
        }
    }); 
}

// parses the time received from the timepicker 
let trim = function(profile) { 
    let hours = new Array(); 
    for (let i = 0; i < profile.length; i++) {
        str = profile[i]; 
        str = str.replace(/\s/g,'');
        amPm = str.substring(str.length-2); 
        str = str.substring(0, str.length-2); 

        let arr = str.split(":"); 
        for (let i = 0; i < arr.length; i++) {
            arr[i] = parseInt(arr[i]); 
        }
        if (amPm == "PM") arr[0] += 12; 
        hours[i] = arr; 
    }
    return hours; 
}

// helper function that gets the current time 
let getCurrentTime = function() { 
    let today = new Date(); 
    return [today.getHours(), today.getMinutes()]; 
}


