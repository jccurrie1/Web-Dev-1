const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("#cats");
form.addEventListener("submit", function (e) {
    //keeps the user on the same page. Does not refresh or send to another page. Just grabs the data then you can use it.
    e.preventDefault();
    const catName = input.value;
    const newLI = document.createElement('LI');
    newLI.innerText = catName;
    list.append(newLI);
});