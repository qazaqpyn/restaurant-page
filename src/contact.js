function pageContact(){
    const content = document.querySelector("#content");
    const text = document.createElement('div');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p')
    const a = document.createElement('a');

    a.setAttribute("href","https://www.instagram.com/boston.kebab/?igshid=jknmtkg3rail")
    a.setAttribute("target","_blank");
    a.classList.add("fa");
    a.classList.add("fa-instagram");
    text.classList.add("contact");
    p1.textContent = "11:00am - 10:00pm"
    p2.textContent = "Kazakhstan | Almaty city | Ayteke street";
    
    text.append(a,p1,p2);
    content.appendChild(text);
}

export default pageContact;