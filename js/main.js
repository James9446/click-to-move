// This variable is for storing a smiley face image
var imageSmile = "img/smiley-face.jpeg"

// This is an array of objects for storing information about the boxes
var boxesArray = [
	{
		box: "box1",
		row: 1,
		position: true,
		boxSelect: "imageBox1"
	},
	{
		box: "box2",
		row: 1,
		position: false,
		boxSelect: "imageBox2"
	},
	{
		box: "box3",
		row: 1,
		position: false,
		boxSelect: "imageBox3"
	},
	{
		box: "box4",
		row: 1,
		position: false,
		boxSelect: "imageBox4"
	},
	{
		box: "box5",
		row: 2,
		position: false,
		boxSelect: "imageBox5"
	},
	{
		box: "box6",
		row: 2,
		position: false,
		boxSelect: "imageBox6"
	},
	{
		box: "box7",
		row: 2,
		position: false,
		boxSelect: "imageBox7"
	},
	{
		box: "box8",
		row: 2,
		position: false,
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
		}
	}
}

// This function moves the image to the right
function moveRight() {
	// It loops through boxArray looking for the box with position true i.e. box with an image
	for (i = 0; i < boxesArray.length; i++) {
		// First conditional is for creating illusion of looping the image back through
		// When it finds an image and it is the bottom box all the way right
		if (boxesArray[i].position === true && boxesArray[i].box === "box8") {
			// It sets the current object's position to false so the next loop won't place an image there
			boxesArray[i].position = false;
			// Then it sets the first object's position to true so the image will appear to loop back to the start
			boxesArray[i - 7].position = true;
			// boxSelect object property is used to track which HTML box should be selected
			// Then it changes the value in the first object's boxSelect property to give it an image
			document.getElementById(boxesArray[i - 7].boxSelect).src = imageSmile;
			// Then it changes the value to null in the current object's image property to remove the image
			document.getElementById(boxesArray[i].boxSelect).src = "";
			// Return prevents this process from repeating. Otherwise the image will keep moving right
			return
		} else if (boxesArray[i].position === true) {
			// It sets the current object's position to false so the next loop won't place an image there
			boxesArray[i].position = false;
			// Then it sets the next object's position to true
			boxesArray[i + 1].position = true;
			// boxSelect object property is used to track which HTML box should be selected
			// Then it changes the value in the next object's boxSelect property to give it an image
			document.getElementById(boxesArray[i + 1].boxSelect).src = imageSmile;
			// Then it changes the value to null in the current object's image property to remove the image
			document.getElementById(boxesArray[i].boxSelect).src = "";
			// Return prevents this process from repeating. Otherwise the image will keep moving right
			return
		}
	}
}

// This function moves the image to the left
function moveLeft() {
	// It loops through boxArray looking for the box with position true i.e. box with an image
	for (i = 0; i < boxesArray.length; i++) {
		// First conditional is for creating illusion of looping the image back through
		// When it finds an image and it is the top box all the way left
		if (boxesArray[i].position === true && boxesArray[i].box === "box1") {
			// It sets the current object's position to false so the next loop won't place an image there
			boxesArray[i].position = false;
			// Then it sets the last object's position to true so the image will appear to loop back to the end
			boxesArray[i + 7].position = true;
			// boxSelect object property is used to track which HTML box should be selected
			// Then it changes the value in the last object's boxSelect property to give it an image
			document.getElementById(boxesArray[i + 7].boxSelect).src = imageSmile;
			// Then it changes the value to null in the current object's image property to remove the image
			document.getElementById(boxesArray[i].boxSelect).src = "";
			// Return prevents this process from repeating. Otherwise the image will keep moving left
			return
		} else if (boxesArray[i].position === true) {
			// It sets the current object's position to false so the next loop won't place an image there
			boxesArray[i].position = false;
			// Then it sets the previous object's position to true
			boxesArray[i - 1].position = true;
			// boxSelect object property is used to track which HTML box should be selected
			// Then it changes the value in the previous object's boxSelect property to give it an image
			document.getElementById(boxesArray[i - 1].boxSelect).src = imageSmile;
			// Then it changes the value to null in the current object's image property to remove the image
			document.getElementById(boxesArray[i].boxSelect).src = "";
			// Return prevents this process from repeating. Otherwise the image will keep moving left
			return
		}
	}
}

// This function moves the image up one row
function moveUp() {
	// It loops through boxArray looking for the box with position true i.e. box with an image
	for (i = 0; i < boxesArray.length; i++) {
		// When it finds an image and it's in the bottom row
		if (boxesArray[i].position === true && boxesArray[i].row === 2) {
			// It sets the current object's position to false so the next loop won't place an image there
			boxesArray[i].position = false;
			// Then it sets position to true for object 4 back. 
			// 4 is chosen because there are 4 boxes in the row
			boxesArray[i - 4].position = true;
			// boxSelect object property is used to track which HTML box should be selected
			// Then it changes the value in the (4 back) object's boxSelect property to give it an image
			document.getElementById(boxesArray[i - 4].boxSelect).src = imageSmile;
			// Then it changes the value to null in the current object's image property to remove the image
			document.getElementById(boxesArray[i].boxSelect).src = "";
			// Return prevents this process from repeating. Otherwise the image will keep moving left
			return
		}
	}
}

// This function moves the image up one row
function moveDown() {
	// It loops through boxArray looking for the box with position true i.e. box with an image
	for (i = 0; i < boxesArray.length; i++) {
		// When it finds an image and it's in the top row
		if (boxesArray[i].position === true && boxesArray[i].row === 1) {
			// It sets the current object's position to false so the next loop won't place an image there
			boxesArray[i].position = false;
			// Then it sets position to true for object 4 forward. 
			// 4 is chosen because there are 4 boxes in the row
			boxesArray[i + 4].position = true;
			// boxSelect object property is used to track which HTML box should be selected
			// Then it changes the value in the (4 forward) object's boxSelect property to give it an image
			document.getElementById(boxesArray[i + 4].boxSelect).src = imageSmile;
			// Then it changes the value to "" in order to remove the image
			document.getElementById(boxesArray[i].boxSelect).src = "";
			// Return prevents this process from repeating. Otherwise the image will keep moving left
			return
		}
	}
}









