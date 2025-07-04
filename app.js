let mybutton = document.getElementById("myButton"); 

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if ( document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

mybutton.onclick = function() {
    topFunction()
};

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

