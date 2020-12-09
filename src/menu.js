function showMenu() {
    const content = document.querySelector('#content');
    const menu = document.createElement("div");
    const doner1 = document.createElement('div');
    const doner2 = document.createElement('div');
    const doner3 = document.createElement('div');

    const p1 = document.createElement('div');
    const p2 = document.createElement('div');
    const p3 = document.createElement('div');

    menu.classList.add("menu");
    doner1.classList.add("doner1");
    doner2.classList.add("doner2");
    doner3.classList.add("doner3");
    p1.classList.add("menu-text");
    p2.classList.add("menu-text");
    p3.classList.add("menu-text");

    p1.textContent = "Classic";
    p2.textContent = "Country-style";
    p3.textContent = "Mexican";


    // doner1.appendChild(p1);
    // doner2.appendChild(p2);
    // doner3.appendChild(p3);
    menu.append(doner1, p1, doner2, p2, doner3, p3);

    content.appendChild(menu);
}

export default showMenu;