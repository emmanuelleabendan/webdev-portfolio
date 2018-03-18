//*****NAV*****//*****SCROLL TO TOP*****
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
function ScrollTo(name) {
  //init thread
  ScrollToRow(document.getElementById(name));
}

function ScrollToRow(elem) {
  var jump = elem.getBoundingClientRect().top * .2;
  document.documentElement.scrollTop += jump;
  
  //lastjump detects anchor unreachable, also manual scrolling to cancel animation if scroll > jump
  if (!elem.lastjump || elem.lastjump > Math.abs(jump)) {
	elem.lastjump = Math.abs(jump);
    setTimeout(function() {
      ScrollToRow(elem);
    }, "20");
  } else {
    elem.lastjump = null;
  }
  console.log('jump is' + jump)
  console.log('lastjump is' + elem.lastjump)
}




