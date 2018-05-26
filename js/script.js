 //*Refresh page on new viewport*
window.onresize = function() {
	document.location.reload(true);
}

//*****SCROLL EVENT HANDLER*****
window.onscroll = function() {
	if (document.documentElement.clientWidth > 1024) { //Viewport wider than 1024px
		document.getElementById("mainNav").classList.remove('close-nav');
		scrollFunction();		
	} else { //Viewport less than 1024px
		openCloseNav();
		scrollSmallViewFunction();
	}
	scrollEvent();	
};

//*****NAV and BACK TO TOP*****
function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("mainNav").style.top = "0";
		document.getElementById("backToTop").style.display = "block";
	} else {
		document.getElementById("mainNav").style.top = "-65px";
		document.getElementById("backToTop").style.display = "none";
	}
}

// Open and closes nav
function openCloseNav() {
	document.getElementById("mainNav").classList.toggle('close-nav');
	document.getElementById("mainNav").classList.toggle('open-nav');
}	

function scrollSmallViewFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {			
		document.getElementById("backToTop").style.display = "block";
	} else {			
		document.getElementById("backToTop").style.display = "none";
	}
	document.getElementById("mainNav").classList.remove('open-nav');
	document.getElementById("mainNav").classList.add('close-nav');
}

// //*****PAGE SCROLL*****
function scrollToRow(elem) {
   	var jump = elem.getBoundingClientRect().top * 0.15;
   	document.documentElement.scrollTop += jump;
   	//lastjump detects anchor unreachable, also manual scrolling to cancel animation if scroll > jump
   	if (elem.lastjump != jump || elem.lastjump > Math.abs(jump)) {
     	elem.lastjump = Math.abs(jump);
     	setTimeout(function() {
     		scrollToRow(elem);
     	}, "20");
   	} else {
     	elem.lastjump = null;     	  	
   	}
}

function ScrollTo(name){
	scrollToRow(document.getElementById(name));
}


// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//     document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }

//*****SHOW POPUP*****
function popupShow(popup) {
    var popup = document.getElementById(popup).querySelector(".popuptext");
    popup.classList.toggle("show");
}

//*****ELEMENT IN SCREENVIEW*****
var i;	
var ctr;
var elems = document.getElementsByClassName("web-tech-img");
var rowHeadings = document.getElementsByTagName("h2");
var skills = document.getElementsByClassName("skills");
var elems = [elems,rowHeadings,skills];
	
function scrollEvent() {
	for (ctr = 0; ctr < elems.length; ctr++) {
		for (i = 0; i < elems[ctr].length; i++) {	
			if(isScrolledIntoView(elems[ctr][i])){		
				elems[ctr][i].classList.add('fadeIn');
				elems[ctr][i].classList.remove('fadeOut');
			}	

			if(isScrolledOutView(elems[ctr][i])){				
				elems[ctr][i].classList.remove('fadeIn');
				elems[ctr][i].classList.add('fadeOut'); 				
			}	
		} 
	}	
}
		
function isScrolledIntoView(el) {
	var elemTop = el.getBoundingClientRect().top;
	var elemBottom = el.getBoundingClientRect().bottom;
	
	var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
	return isVisible;
}

function isScrolledOutView(el) {
	var elemTop = el.getBoundingClientRect().top;
	var elemBottom = el.getBoundingClientRect().bottom;
	
	var nonVisible = (elemTop <= 0) || (elemBottom >= window.innerHeight);
	return nonVisible;
}

var ul = 1;
var lists = document.getElementsByClassName("work-list");


//Loads new set of items using viewmore button
function viewMore() {
	if(ul < lists.length) {
		lists[ul].classList.remove('d-none');
		ul++;
	}
	
	if(ul >= lists.length) {
		document.getElementById("view-more").style.display = "none";
	}
}