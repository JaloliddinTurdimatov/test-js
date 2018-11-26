function natija() {
	var ism = document.querySelector('[name="ism"]').value;
	var familiya = document.querySelector('[name="familiya"]').value;
	var email = document.querySelector('[name="email"]').value;
	var tel = document.querySelector('[name="tel"]').value;
	var tugilgankn = document.querySelector('[name="tugilgankn"]').value;
	var a = document.getElementById('ism').innerHTML = ism;
	var b = document.getElementById('familiya').innerHTML = familiya;
	var c = document.getElementById('email').innerHTML = email;
	var d = document.getElementById('tel').innerHTML = tel;
}
console.log('loaded')

function img() {
	// var img = document.getElementById('img').style.background = "url('img/man-2.png') center center no-repeat";
	// if (img == img) {
	// 	var img2 = document.getElementById('img').style.background = "url('img/man-3.png') center center no-repeat";
	// }
	// else {
	// 	var img3 = document.getElementById('img').style.background = "url('img/man-4.png') center center no-repeat";
	// }
}
var btn = document.getElementById('btn');
var count = 1;
console.log(count)
btn.onclick = function() {
	if(count !== 8) {
		document.getElementById('img').style.background = "url('img/man-"+ count +".png') center center no-repeat";
	    count++
	} else {
		console.log('hey');
		count = 1;
	}

}