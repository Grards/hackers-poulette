import { fading } from "./modules/fading.js";
import { checkIfCompleted } from "./modules/filling.js";
import { jsIsEnable, noBind } from "./modules/jssecurities.js";

jsIsEnable();
// noBind();

const fadeElement = document.getElementsByClassName("fading"); 
function temporization(){
    for(let element of fadeElement){
        fading(element);
    }
}
setTimeout(temporization,2000);

const submitForm = document.getElementById("submitForm");

submitForm.addEventListener("click", event => {
    checkIfCompleted(event);
})

