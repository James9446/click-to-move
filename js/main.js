// This variable is for storing a smiley face image
var imageSmile = "img/smiley-face.jpeg"

// This is an array of objects for storing information about the boxes
var boxesArray = [
	{
		box: "box1",
		position: true,
		image: null,
		boxSelect: "imageBox1"
	},
	{
		box: "box2",
		position: false,
		image: null,
		boxSelect: "imageBox2"
	},
	{
		box: "box3",
		position: false,
		image: null,
		boxSelect: "imageBox3"
	},
	{
		box: "box4",
		position: false,
		image: null,
		boxSelect: "imageBox4"
	},
	{
		box: "box5",
		position: false,
		image: null,
		boxSelect: "imageBox5"
	},
	{
		box: "box6",
		position: false,
		image: null,
		boxSelect: "imageBox6"
	},
	{
		box: "box7",
		position: false,
		image: null,
		boxSelect: "imageBox7"
	},
	{
		box: "box8",
		position: false,
		image: null,
		boxSelect: "imageBox8"
	}
];

// This function reveals an image for user to start moving around
function start() {
	for (i = 0; i < boxesArray.length; i++) {
		// This condition is checking the boxArray for any objects with position set to true
		if (boxesArray[i].position === true) {
			// When it finds an object with position set to true it puts an image in the corresponding box
			document.getElementById(boxesArray[i].boxSelect).src = imageSmile;
			return
		}
	}
}

// This function moves the image to the right
function moveRight() {
	// It loops through boxArray looking for the box with position true i.e. box with an image
	for (i = 0; i < boxesArray.length; i++) {
		// When it finds an image and it's not the bottom box all the way right
		if (boxesArray[i].position === true && boxesArray[i].box !== "box8") {
			// It sets the current object's position to false so the next loop won't place an image there
			boxesArray[i].position = false;
			// Then it sets the next object's position to true
			boxesArray[i + 1].position = true;
			// Then it changes the value in the next object's image: property to give it an image
			document.getElementById(boxesArray[i + 1].boxSelect).src = imageSmile;
			// Then it changes the value to null in the current object's image property to remove the image
			document.getElementById(boxesArray[i].boxSelect).src = null;
			// Return prevents this process from repeating. Otherwise the image will keep moving right
			return
		}
	}
}

// This function moves the image to the left
function moveLeft() {
	// It loops through boxArray looking for the box with position true i.e. box with an image
	for (i = 0; i < boxesArray.length; i++) {
		// When it finds an image and it's not the top box all the way left
		if (boxesArray[i].position === true && boxesArray[i].box !== "box1") {
			// It sets the current object's position to false so the next loop won't place an image there
			boxesArray[i].position = false;
			// Then it sets the previous object's position to true
			boxesArray[i - 1].position = true;
			// Then it changes the value in the previous object's image: property to give it an image
			document.getElementById(boxesArray[i - 1].boxSelect).src = imageSmile;
			// Then it changes the value to null in the current object's image property to remove the image
			document.getElementById(boxesArray[i].boxSelect).src = null;
			// Return prevents this process from repeating. Otherwise the image will keep moving left
			return
		}
	}
}









