function pageInfo() {
    const content = document.querySelector('#content');
    const text = document.createElement('div');
    const p = document.createElement('p');

    text.classList.add("text");
    p.textContent = "A new view of the old-loved dish"

    text.appendChild(p); 
    content.append(text);
}


export default pageInfo;
