// Name of uploaded Profile Photo
let input = document.getElementById("profilePhoto");

input.addEventListener("change", ()=>{
    input.dataset.name = input.files[0].name;
})