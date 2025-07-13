// back to top
const goTopBtn = document.getElementById("back_to_top");
        
/// When the user scrolls down 600px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    goTopBtn.style.display = "block";
  } else {
    goTopBtn.style.display = "none";
  }
}

/// When the user clicks on the button, scroll to the top of the document
function goTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// hamburger menu
function hamburger() {
  const hamLinks = document.getElementById('hamLinks');
  if (hamLinks.style.display === 'block') {
      hamLinks.style.display = 'none';
  } else {
      hamLinks.style.display = 'block';
  }
}