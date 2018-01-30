//*****NAV*****//*****SCROLL TO TOP*****
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("mainNav").style.top = "0";
	document.getElementById("backToTop").style.display = "block";
  } else {
    document.getElementById("mainNav").style.top = "-55px";
	document.getElementById("backToTop").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//*****PAGE SCROLL*****
function ScrollTo(name) {
  //init thread
  ScrollToResolver(document.getElementById(name));
}

function ScrollToResolver(elem) {
  var jump = elem.getBoundingClientRect().top * .1;
  document.documentElement.scrollTop += jump;
  //lastjump detects anchor unreachable, also manual scrolling to cancel animation if scroll > jump
  if (!elem.lastjump || elem.lastjump > Math.abs(jump)) {
    elem.lastjump = Math.abs(jump);
    setTimeout(function() {
      ScrollToResolver(elem);
    }, "20");
  } else {
    elem.lastjump = null;
  }
}







