window.addEventListener("scroll", () => {
   if(window.scrollY >= 110){
    document.querySelector(".action-bar__section").classList.add("action-bar__section--fixed");
    document.querySelector(".action-bar__logo").classList.add("action-bar__logo--fixed");
    }

    if(window.scrollY <= 110){
        document.querySelector(".action-bar__section").classList.remove("action-bar__section--fixed");
        document.querySelector(".action-bar__logo").classList.remove("action-bar__logo--fixed");
        }
});