export function checkIfCompleted(event){
    const firstnameTag = document.getElementById("firstname");
    const firstname = firstnameTag.value.trim();
    const lastnameTag = document.getElementById("lastname");
    const lastname = lastnameTag.value.trim();
    const emailTag = document.getElementById("email");
    const email = emailTag.value.trim();
    const descriptionTag = document.getElementById("description");
    const description = descriptionTag.value.trim();
    const fileTag = document.getElementById("file");
    const file = fileTag.value.trim();

    const firstnameAlert = `The firstname must be filled !`;
    const lastnameAlert = `The lastname must be filled !`;
    const emailAlert = `The email must be filled !`;
    const descriptionAlert = `The description must be filled !`;

    const threeCharacsAlert = `This field require 3 characters minimum`;
    const fifteenCharacsAlert = `This field require 15 characters minimum`;
    const emailInvalid = `This email is not valid !`;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const alerts = [firstnameAlert, lastnameAlert, emailAlert, descriptionAlert];
    const tags = [firstnameTag, lastnameTag, emailTag, descriptionTag];


    let $i = 0;
    tags.forEach(tag => {
        if(!tag.value){
            if(tag.previousElementSibling.innerHTML != alerts[$i]){
                tag.classList.add("outline");
                tag.classList.add("outline-4");
                tag.classList.add("outline-amber-300");
                tag.classList.add("outline-offset-4");
                tag.classList.add("mt-2");
                tag.classList.add("mb-2");
                tag.previousElementSibling.innerHTML != alerts[$i] ? tag.insertAdjacentHTML("beforebegin", "<p>" + alerts[$i] + "</p>") : "";
                tag.previousElementSibling.classList.add("text-amber-200");
                tag.previousElementSibling.classList.add("mt-2");
                event.preventDefault();
            }
        }else{
            tag.previousElementSibling.innerHTML == alerts[$i] ? tag.previousElementSibling.remove() : "";
            if(tag.value.length >= 1 && tag.value.length < 3 && (tag.id == "firstname" || tag.id == "lastname")){
                tag.previousElementSibling.innerHTML != threeCharacsAlert ? tag.insertAdjacentHTML("beforebegin", "<p>" + threeCharacsAlert + "</p>") : "";
                tag.previousElementSibling.classList.add("text-amber-200");
                tag.previousElementSibling.classList.add("mt-2");
                tag.classList.add("outline");
                tag.classList.add("outline-4");
                tag.classList.add("outline-amber-300");
                tag.classList.add("outline-offset-4");
                tag.classList.add("mt-2");
                tag.classList.add("mb-2");
                event.preventDefault();
            }
            else if(tag.value.length >= 1 && tag.value.length < 15 && tag.id == "description"){
                tag.previousElementSibling.innerHTML != fifteenCharacsAlert ? tag.insertAdjacentHTML("beforebegin", "<p>" + fifteenCharacsAlert + "</p>") : "";
                tag.previousElementSibling.classList.add("text-amber-200");
                tag.previousElementSibling.classList.add("mt-2");
                tag.classList.add("outline");
                tag.classList.add("outline-4");
                tag.classList.add("outline-amber-300");
                tag.classList.add("outline-offset-4");
                tag.classList.add("mt-2");
                tag.classList.add("mb-2");
                event.preventDefault();
            }
            else if(tag.id == "email" && !emailRegex.test(tag.value)){
                tag.previousElementSibling.innerHTML != emailInvalid ? tag.insertAdjacentHTML("beforebegin", "<p>" + emailInvalid + "</p>") : "";
                tag.previousElementSibling.classList.add("text-amber-200");
                tag.previousElementSibling.classList.add("mt-2");
                tag.classList.add("outline");
                tag.classList.add("outline-4");
                tag.classList.add("outline-amber-300");
                tag.classList.add("outline-offset-4");
                tag.classList.add("mt-2");
                tag.classList.add("mb-2");
                event.preventDefault();
            }
            else{
                tag.previousElementSibling.innerHTML == threeCharacsAlert ? tag.previousElementSibling.remove() : "";
                tag.previousElementSibling.innerHTML == fifteenCharacsAlert ? tag.previousElementSibling.remove() : "";
                tag.previousElementSibling.innerHTML == emailInvalid ? tag.previousElementSibling.remove() : "";
                tag.classList.remove("outline");
                tag.classList.remove("outline-4");
                tag.classList.remove("outline-amber-300");
                tag.classList.remove("outline-offset-4");
                tag.classList.remove("mt-2");
                tag.classList.remove("mt-2");
            }
        }
        $i++;
    });
}
