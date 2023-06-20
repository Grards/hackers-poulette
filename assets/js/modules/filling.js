export function checkIfCompleted(){
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

    const threeCharactsAlert = `This field require 3 characters minimum`;

    const alerts = [firstnameAlert, lastnameAlert, emailAlert, descriptionAlert];
    const tags = [firstnameTag, lastnameTag, emailTag, descriptionTag];
    const datas = [firstname, lastname, email, description, file];


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
            }
        }else{
            tag.previousElementSibling.innerHTML == alerts[$i] ? tag.previousElementSibling.remove() : "";
            if(tag.value.length >= 1 && tag.value.length < 3 && (tag.id == "firstname" || tag.id == "lastname")){
                tag.previousElementSibling.innerHTML != threeCharactsAlert ? tag.insertAdjacentHTML("beforebegin", "<p>" + threeCharactsAlert + "</p>") : "";
                tag.previousElementSibling.classList.add("text-amber-200");
                tag.previousElementSibling.classList.add("mt-2");
                tag.classList.add("outline");
                tag.classList.add("outline-4");
                tag.classList.add("outline-amber-300");
                tag.classList.add("outline-offset-4");
                tag.classList.add("mt-2");
                tag.classList.add("mb-2");
            }
            else{
                tag.previousElementSibling.innerHTML == threeCharactsAlert ? tag.previousElementSibling.remove() : "";
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
