$(document).ready(function() {
	if($(window).width()<560)
	{
		$("#menu-bar").css({display: "none"});
		$("#dropdown-menu-bar").css({display: "block"});
		$("#icon").css({display: "none"});
	}
	else
	{
		$("#menu-bar").css({display: "block"});
		$("#dropdown-menu-bar").css({display: "none"});
		$("#icon").css({display: "block"});
	}
	
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
			
	const height = $(window).height();
	const width = $(window).width();
	const t = Math.max(Math.min((height - width + 250)/250,1),0);
	const s = Math.max(Math.min((height - width)/100,1),0);
	
	$(".hamburger-icon").click(function() {
		const icon = $(this);
		if(icon.attr("transitioning") == null)
		{
			icon.attr("transitioning", "");
			icon.toggleClass("hamburger-change");
			const items = $("#dropdown-menu-bar-items");
			const h = icon.hasClass("hamburger-change") ? items.children().first().height() : 0;
			items.animate({height: h + "px"}, { delay: 400, queue: false,
					complete: function() {
						icon.removeAttr("transitioning");
					}
				}
			);
		}
	});
	
	onResize();
});
$(window).resize(onResize);

function onResize() {
	const height = $(window).height();
	const width = $(window).width();
	const t = Math.max(Math.min((height - width + 400)/800,1),0);
	const s = Math.max(Math.min((height - width)/100,1),0);
	
	
	$("#cover-flex").css({"padding-bottom": (48*(1+t)) + "px"});
	$("#apply-link").css("margin-top", (Math.max(-200,Math.min(0,height-650)/1.4)-36*t) + "px");
			
	$("#img_library").css("left", Math.max(24,600-width) + "px");
	
	if(width<560)
	{
		$("#menu-bar").css({display: "none"});
		$("#dropdown-menu-bar").css({display: "block"});
		$("#icon").css({display: "none"});
	}
	else
	{
		$("#menu-bar").css({display: "block"});
		$("#dropdown-menu-bar").css({display: "none"});
		$("#icon").css({display: "block"});
	}
}
