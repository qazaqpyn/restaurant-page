function everyHead() {
    const content = document.querySelector("#content");
    const header = document.createElement('div');
    const nameRestaurant = document.createElement('div');
    const head = document.createElement('ul');
    

    const titleName1 = document.createElement('h1');
    const titleName2 = document.createElement('h3');
    const nav1 = document.createElement('li');
    const nav2 = document.createElement('li');
    const nav3 = document.createElement('li');
    


    header.classList.add("header");
    nameRestaurant.classList.add("name-restaurant");
    head.classList.add("head");
   

    titleName1.textContent = "BOSTON";
    titleName2.textContent = "CRAFT KEBAB"
    nav1.textContent = "Info";
    nav2.textContent = "Menu";
    nav3.textContent = "Contact"
    

    header.append(nameRestaurant,head);
    nameRestaurant.append(titleName1,titleName2);
    head.append(nav1,nav2,nav3);
    content.append(header);
}


export default everyHead;