
// getting all the elements from html

const change_btn = document.querySelectorAll(".btn");
const quantity = document.querySelectorAll(".quantity")
const total = document.querySelector(".total-cost > h5")



change_btn.forEach((element, index) => {

    // var button_index = change_btn[index];
    var current_btn = change_btn[index];

    var itemtotal_1;
    var itemtotal_2;
    

    // console.log(button_index);
    // console.log(element);

    element.addEventListener("click", (e)=>{

        if(e.target.classList.contains("decrement")){
            change_btn[index].nextElementSibling.value--

            // cant go below 1

            if(change_btn[index].nextElementSibling.value < 2)
            {
                // change_btn[index].disabled = true;
                change_btn[index].parentElement.children[0].disabled = true
            }
        }

        else if(e.target.classList.contains("increment")){
            change_btn[index].previousElementSibling.value++

            if(change_btn[index].previousElementSibling.value > 1)
            {
                change_btn[index].parentElement.children[0].disabled = false
            }

            
        }


        // updating the total amount
        


    })
    
});



