// showing the profiles already stored in options
$(function() {
	showProfiles(); 
}); 

// initializing timepicker 
var options = {
	now: "8:00", 
	title: 'Office Hours', //The Wickedpicker's title,
	showSeconds: false, //Whether or not to show seconds
	timeSeparator: ' : ', // The string to put in between hours and minutes (and seconds)
	secondsInterval: 1, //Change interval for seconds, defaults to 1,
	minutesInterval: 10, //Change interval for minutes, defaults to 1
	clearable: false, //Make the picker's input clearable (has clickable "x")
};

// global variables 
var keys = Array(20); 
console.log(keys); 
var timepickers = $('.timepicker').wickedpicker(options); 

// store information upon submit 
$("#addProf").submit(function(e) {
	let entry = $(this).serializeArray()
	let title = entry[0].value; 
	let timeData = [entry[1].value, entry[2].value]; 
	chrome.storage.sync.set({[title]: timeData}, function() {
		console.log("Office hours for " + title + " stored.");
		addProfile(title, timeData[0], timeData[1]); 
	}); 
	e.preventDefault();
});

// shows profiles already in storage
var showProfiles = function() {
	chrome.storage.sync.get(null, function(profiles) {
		let i = 0; 
		for (p in profiles) {
			addProfile(p, profiles[p][0], profiles[p][1]); 
			keys[i] = p; 
			i++; 
		}
	}); 
}

var addProfile = function(nameInput, startTime, endTime) {
	if (false /*keys.includes(nameInput)*/) {
	} else {
		let profile = document.createElement("DIV");
		profile.className = "profile"; 
		profile.setAttribute("id", nameInput.toLowerCase()); 

		let name = document.createElement("P");
		profile.appendChild(name);
		let time = document.createElement("P");
		profile.appendChild(time);

		name.appendChild(document.createTextNode(nameInput)); 
		time.appendChild(document.createTextNode(startTime + " to " + endTime)); 

		$("#profiles").append(profile); 
	}
}