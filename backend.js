const activePage = window.location.pathname;    
console.log(activePage)

const navlink = document.querySelectorAll(".navBarElement").
forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    } 
}
)
