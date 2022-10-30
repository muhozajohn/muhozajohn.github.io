var hour_hand = document.getElementById('hour_hand');
var minute_hand = document.getElementById('minute_hand');
var second_hand = document.getElementById('second_hand');

function initclock() {
	var date = new Date();
	var hour = date.getHours() % 12; //0-23
	var minute = date.getMinutes();
	var second = date.getSeconds();
	
	var hourDeg = (hour * 30) + (0.5 * minute);
	var minutesDeg = minute * 6;
	var secondDeg = second * 6; //360/60

	hour_hand.style.transform ='rotate(' + hourDeg +'deg)';
	minute_hand.style.transform ='rotate(' + minutesDeg +'deg)';
	second_hand.style.transform ='rotate(' + secondDeg +'deg)';

	setTimeout(initclock,1000);
};
initclock()