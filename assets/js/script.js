import { fading } from "./modules/fading.js";
import { checkIfCompleted } from "./modules/filling.js";

const fadeElement = document.getElementsByClassName("fading"); 
function temporization(){
    for(let element of fadeElement){
        fading(element);
    }
}
setTimeout(temporization,2000);

const submitForm = document.getElementById("submitForm");

submitForm.addEventListener("click", event => {
    event.preventDefault();
    checkIfCompleted();
})
