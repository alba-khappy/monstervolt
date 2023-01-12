if(window.innerWidth > 1400) {
    window.addEventListener("scroll", () => {
        console.log(window.scrollY);
        if(window.scrollY >= 51) {
            document.querySelector(".action-bar__section").classList.add("action-bar__section--fixed");
            document.body.style.paddingTop = '101px';
            //document.querySelector(".action-bar__call-number").style.display = "none";
        }
     
        if(window.scrollY <= 50) {
            document.querySelector(".action-bar__section").classList.remove("action-bar__section--fixed");
            document.body.style.paddingTop = '0';
            //document.querySelector(".action-bar__call-number").style.display = "flex";
        }
     });
}

window.addEventListener("scroll", () => {
    if(window.scrollY >= 70) {
        document.querySelector(".action-bar__section").classList.add("action-bar__section--fixed");
        document.body.style.paddingTop = '80px';
    }

    if(window.scrollY <= 69) {
        document.querySelector(".action-bar__section").classList.remove("action-bar__section--fixed");
        document.body.style.paddingTop = '0';
    }
});