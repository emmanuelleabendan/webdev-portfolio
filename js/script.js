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



