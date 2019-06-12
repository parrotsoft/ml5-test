console.log('ml5 version: ', ml5.version);
alert('aja')
let classifier;
let img;

function preload() {
	classifier = ml5.imageClassifier('MobileNet');
	img = loadImage('bird.jpg');
}

function setup() {
	createCanvas(400,400);
	classifier.classify(img, gotResult);
}

function gotResult(error, results) {
	if(error) {
		console.error(error);
	} else {
		console.log(results);
		createDiv('Label: ' + results[0].label);
		createDiv('Confidence: ' + nf(results[0].confidence, 0, 2));
	}
}

function draw() {

}