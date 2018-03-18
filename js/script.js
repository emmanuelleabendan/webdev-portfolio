//*****NAV*****//*****BACK TO TOP*****
window.onscroll = function() {scrollFunction()};

if (document.documentElement.clientWidth > 1024) { //Viewport wider than 1024px
	
	document.getElementById("mainNav").classList.remove('close-nav');
	
	function scrollFunction() {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			document.getElementById("mainNav").style.top = "0";
			document.getElementById("backToTop").style.display = "block";
		} else {
			document.getElementById("mainNav").style.top = "-65px";
			document.getElementById("backToTop").style.display = "none";
		}
	}
	
} else { //Viewport less than 1024px

	// Open and closes nav
	function openCloseNav() {
		document.getElementById("mainNav").classList.toggle('close-nav');
		document.getElementById("mainNav").classList.toggle('open-nav');
	}	
	
	function scrollFunction() {
		document.getElementById("mainNav").classList.remove('open-nav');
		document.getElementById("mainNav").classList.add('close-nav');
	}
}

//*****PAGE SCROLL*****
scrollToRow = (element) => {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop
  });
  console
}

function ScrollTo(name){
	scrollToRow(document.getElementById(name));
}

//*****SHOW POPUP*****
function popupShow(popup) {
    var popup = document.getElementById(popup).querySelector(".popuptext");
    popup.classList.toggle("show");
}










