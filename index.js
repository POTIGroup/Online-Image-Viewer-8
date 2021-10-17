// 1366 x 768 / 16:9 / 11.6inch / 10.1inch x 5.7inch / 25.56cm x 14.47cm
// 297mm x 210mm / sprt(2):1 / 148.5mm x 105mm

// dpi 0.188
// 1579 x 1117 / 790 x 559

// 1920 x 1080 / 16:9 / 
const displayWidth = 1366;
const displayHeight = 768;
const displaySize = 11.6;

var path = "img/IMG.jpg"
const canvas = document.createElement ("canvas");
const context = canvas.getContext ('2d');

if (window.File) {
	document.getElementById("dropper").addEventListener("drop", onDrop, false);
}

if (!window.File) {
	alert("Sorry");
}

function onDrop(event) {
	var files = event.dataTransfer.files;

	for (var i = 0; i < files.length; i++) {
		var f = files[i];
		var fileReader = new FileReader();

		if (!f.type.match('image.*')) {
			alert("Sorry");
			continue;
		}

		if (f.type.match('image.*')) {
			fileReader.onload = function(e) {
				path = e.target.result;
				Draw_(path);
			}
			fileReader.readAsDataURL(f);
			ChangeEditor();
		}
	}
	event.preventDefault();
}

function ChangeEditor() {
	var editor = document.getElementById("editor");
	var uploader = document.getElementById("uploader");

	editor.style.visibility = "visible";
	uploader.style.visibility = "hidden";
}

document.addEventListener('touchmove', function(event) {
	if (event.touches.length >= 2) {
		event.preventDefault();
	}
}, {
	passive: false
});

function Draw_(imagePath) {
	var canvasHolder = document.getElementById ("canvasholder");

	const image = new Image();

	image.onload = function() {
		var canvasWidth = 790;
		var canvasHeight = 559;
		
		var imageWidth = image.width;
		var imageHeight = image.width / Math.sqrt(2);
		
		var imageStartHeight = (image.height - imageHeight) / 2;
		
		canvas.width = canvasWidth;
		canvas.height = canvasHeight;
		
		context.drawImage (image, 0, imageStartHeight, imageWidth / 2, imageHeight / 2, 0, 0, canvasWidth, canvasHeight);
	}
	
	
	image.src = imagePath;
	canvasHolder.appendChild (canvas);
}

document.getElementById ("lu").addEventListener ("click", drawLU, false);

function drawLU() {
	const image = new Image();
	
	image.onload = function() {
		var imageWidth = image.width;
		var imageHeight = image.width / Math.sqrt(2);

		var imageStartHeight = (image.height - imageHeight) / 2;
		var imageStartWidth = image.width / 2
		
		context.drawImage (image, 0, imageStartHeight, imageWidth / 2, imageHeight / 2, 0, 0, canvas.width, canvas.height);
	}

	image.src = path;
}

document.getElementById ("lb").addEventListener ("click", drawLB, false);

function drawLB() {
	const image = new Image();
	
	image.onload = function() {
		var imageWidth = image.width;
		var imageHeight = image.width / Math.sqrt(2);

		var imageStartHeight = (imageHeight / 2) + (image.height - imageHeight) / 2;
		var imageStartWidth = 0
		
		context.drawImage (image, imageStartWidth, imageStartHeight, imageWidth / 2, imageHeight / 2, 0, 0, canvas.width, canvas.height);
	}

	image.src = path;
}

document.getElementById ("ru").addEventListener ("click", drawRU, false);

function drawRU() {
	const image = new Image();
	
	image.onload = function() {
		var imageWidth = image.width;
		var imageHeight = image.width / Math.sqrt(2);

		var imageStartHeight = (image.height - imageHeight) / 2;
		var imageStartWidth = image.width / 2
		
		context.drawImage (image, imageStartWidth, imageStartHeight, imageWidth / 2, imageHeight / 2, 0, 0, canvas.width, canvas.height);
	}

	image.src = path;
}

document.getElementById ("rb").addEventListener ("click", drawRB, false);
function drawRB() {
	const image = new Image();
	
	image.onload = function() {
		var imageWidth = image.width;
		var imageHeight = image.width / Math.sqrt(2);

		var imageStartHeight = (imageHeight / 2) + (image.height - imageHeight) / 2;
		var imageStartWidth = image.width / 2
		
		context.drawImage (image, imageStartWidth, imageStartHeight, imageWidth / 2, imageHeight / 2, 0, 0, canvas.width, canvas.height);
	}

	image.src = path;
}