
import pageInfo from "./info"
import everyHead from "./header"
import pageContact from "./contact"
import showMenu from "./menu"

everyHead();
pageInfo();

const content = document.querySelector("#content");
const nav1 = document.querySelector('.li1');
const nav2 = document.querySelector('.li2');
const nav3 = document.querySelector('.li3');

nav1.classList.add("selected");

nav1.addEventListener('click', ()=>{
    nav1.classList.add("selected");
    nav2.classList.remove("selected");
    nav3.classList.remove("selected");
    content.removeChild(content.lastChild);
    pageInfo();
});

nav3.addEventListener('click',()=>{
    nav3.classList.add("selected");
    nav1.classList.remove("selected");
    nav2.classList.remove("selected");
    content.removeChild(content.lastChild);
    pageContact();
});


nav2.addEventListener('click', ()=>{
    nav2.classList.add("selected");
    nav1.classList.remove("selected");
    nav3.classList.remove("selected");
    content.removeChild(content.lastChild);
    showMenu();
})