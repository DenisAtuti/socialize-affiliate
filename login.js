// LOGIN AND SIGN UP PAGE SECTION
const openSignupModel = document.querySelector(".open-signup-model")
const signupModel = document.querySelector(".container-model")
const closeSignupModel = document.querySelector(".close-signup-model")

openSignupModel.addEventListener("click",()=>{
    signupModel.classList.add("active")
})
closeSignupModel.addEventListener("click",()=>{
    signupModel.classList.remove("active")
})
