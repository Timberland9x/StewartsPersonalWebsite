const activePage = window.location.pathname;    
console.log(activePage)

const navlink = document.querySelectorAll(".navBarElement").
forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    } 
}
)


// Get the button:
let topBtn = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
}
