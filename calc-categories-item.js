const item = document.querySelectorAll(".categories__item");

for (let i = 0; i < item.length; i++) {

    let arr = item[i].children;
    if(arr.length > 5)  {
        let link = document.createElement("a");
        link.classList.add("categories__link-show-more");
        let linkText = document.createTextNode("Показать больше категорий >>>");
        link.appendChild(linkText);
        item[i].appendChild(link);
    }

}
