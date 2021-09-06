const addButton = document.querySelector(".addButton");
var input = document.querySelector(".input");
const container = document.querySelector(".data_container");


class item {


    constructor(itemName) {
        this.createDiv(itemName);
    }



    // create todo
    createDiv(itemName) {
        // create input tag manually

        let input = document.createElement("input");
        input.value = itemName;
        input.disabled = true;
        input.classList.add("item_input");
        input.type = "text";
        input.style.fontSize = '25px';
        input.style.color = 'black';


        // create a item div

        let itemBox = document.createElement("div");
        itemBox.classList.add("item");

        //  create a edit button

        let editButton = document.createElement("button");
        editButton.innerHTML = "EDIT";
        editButton.classList.add("editButton");



        // create a remove button
        let removeButton = document.createElement("button");
        removeButton.innerHTML = "REMOVE";
        removeButton.classList.add("removeButton");


        container.appendChild(itemBox);
        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);



        editButton.addEventListener("click", () => {
            this.edit(input);
        });

        removeButton.addEventListener("click", () => {
            this.remove(itemBox);
        });



    }



    // edit todo
    edit(item) {

        item.disabled = !item.disabled;

    }

    // remove todo
    remove(item) {

        container.removeChild(item);

    }


}
// new item("Go to Gym")
function check() {

    if (input.value != ' ') {

        new item(input.value);
        input.value = " ";

    }

}
addButton.eventListener('click', check);