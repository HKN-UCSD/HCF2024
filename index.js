$(document).ready(function() {
	// Get the button:
	let scrollButton = document.getElementById("scrollTop");

	// When the user scrolls down 20px from the top of the document, show the button
	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			scrollButton.style.display = "block";
		} else {
			scrollButton.style.display = "none";
		}
	}

	scrollButton.addEventListener("click", toTop);

	// When the user clicks on the button, scroll to the top of the document
	function toTop() {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}
});