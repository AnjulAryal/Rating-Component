const button = document.querySelector(".button");
const boxes = document.querySelectorAll(".box");
const ratingContainer = document.querySelector("#rating");
console.log(ratingContainer)
const sucessContainer = document.querySelector("#sucess");
console.log(sucessContainer)
const rating = document.querySelector(".rating");
console.log(rating.textContent)
boxes.forEach((box)=>{
    box.addEventListener(("click"),()=>{
        ratingNumber = box.getAttribute("rating-number");
        rating.textContent = ratingNumber;

    })
})
button.addEventListener(("click"),()=>{
    if(rating.textContent===""){
        const error = document.querySelector("#error");
        error.classList.add("active-error")
    }else{
        ratingContainer.classList.remove("active-container")
        ratingContainer.classList.add("inactive-container");
        sucessContainer.classList.add("active-container");
        setTimeout(()=>{
            sucessContainer.classList.remove("active-container");
            sucessContainer.classList.add("inactive-container");
            ratingContainer.classList.add("active-container");
             error.classList.remove("active-error")
        },5000)
    }

})