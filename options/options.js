var options = {
	now: "8:00", 
	title: 'Office Hours', //The Wickedpicker's title,
	showSeconds: false, //Whether or not to show seconds
	timeSeparator: ' : ', // The string to put in between hours and minutes (and seconds)
	secondsInterval: 1, //Change interval for seconds, defaults to 1,
	minutesInterval: 10, //Change interval for minutes, defaults to 1
	clearable: false, //Make the picker's input clearable (has clickable "x")
};

var timepickers = $('.timepicker').wickedpicker(options); 
console.log(timepickers.wickedpicker('time', 1));