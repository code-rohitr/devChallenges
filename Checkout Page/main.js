

// fist item

const quantity_container1 = document.querySelector("#one")
const decre1 = document.querySelector("#one > .decrement")
const quantity1 = document.querySelector("#one > .quantity")
const incre1 = document.querySelector("#one > .increment")

const btn = document.querySelectorAll(".btn")

console.log(btn);

function value_change(e){
    console.log(e.target);
}

var temp1 = 1;
var itemtotal1;
var itemtotal2;

quantity_container1.addEventListener("click", (e)=>{

    if(e.target.classList.contains("decrement")){

        --temp1;
        quantity1.innerHTML = temp1;

        if(temp1 < 1){

            e.target.disabled = true;
        }

        // computing the total amount for the first item


        itemtotal1 = temp1*54.99;
    }

    if(e.target.classList.contains("increment")){

        ++temp1;
        quantity1.innerHTML = temp1;

        if(temp1 > 0){

            e.target.previousElementSibling.previousElementSibling.disabled = false;
        }

        // computing the total amount for the first item

        itemtotal1 = temp1*54.99;
    }

    

    total(itemtotal1, itemtotal2)
})

// Second item


const quantity_container2 = document.querySelector("#two")
const decre2 = document.querySelector("#two > .decrement")
const quantity2 = document.querySelector("#two > .quantity")
const incre2 = document.querySelector("#two > .increment")


var temp2 = 1;

quantity_container2.addEventListener("click", (e)=>{

    

    if(e.target.classList.contains("decrement")){

        --temp2;
        quantity2.innerHTML = temp2;

        if(temp2 < 1){

            e.target.disabled = true;
        }

        // computing the total amount for the second item

        itemtotal2 = temp2*54.99;


    }

    if(e.target.classList.contains("increment")){

        ++temp2;
        quantity2.innerHTML = temp2;

        if(temp2 > 0){

            e.target.previousElementSibling.previousElementSibling.disabled = false;
        }
        // computing the total amount for the second item
        itemtotal2 = temp2*54.99;
    }

    total(itemtotal1, itemtotal2)
})




// calculating the total amount

const totalamt = document.querySelector(".total-cost > h5")


function total(itemtotal1, itemtotal2){

    totalamt.innerHTML = itemtotal1 + itemtotal2;
}

