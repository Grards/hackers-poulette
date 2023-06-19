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

    const alerts = [firstnameAlert, lastnameAlert, emailAlert, descriptionAlert];
    const tags = [firstnameTag, lastnameTag, emailTag, descriptionTag];
    const datas = [firstname, lastname, email, description, file];


    let $i = 0;
    tags.forEach(tag => {
        if(!tag.value){
            if(tag.previousElementSibling.innerHTML != alerts[$i]){
                console.log(tag.name + "Alert");
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
            if(tag.previousElementSibling.innerHTML == alerts[$i]){
                tag.classList.remove("outline");
                tag.classList.remove("outline-4");
                tag.classList.remove("outline-amber-300");
                tag.classList.remove("outline-offset-4");
                tag.classList.remove("mt-2");
                tag.classList.remove("mt-2");
                tag.previousElementSibling.classList.remove("text-amber-200");
                tag.previousElementSibling.classList.remove("mt-2");
                tag.previousElementSibling.removeAttribute("class");
                tag.previousElementSibling.innerHTML == alerts[$i] ? tag.previousElementSibling.remove() : "";
            }
        }
        $i++;
    });
}

    // if(!firstname){
    //     if(firstnameTag.previousElementSibling.innerHTML != firstnameAlert){
            
    //         firstnameTag.classList.add("outline");
    //         firstnameTag.classList.add("outline-4");
    //         firstnameTag.classList.add("outline-amber-300");
    //         firstnameTag.classList.add("outline-offset-4");
    //         firstnameTag.classList.add("mt-2");
    //         firstnameTag.classList.add("mb-2");
    //         firstnameTag.previousElementSibling.innerHTML != firstnameAlert ? firstnameTag.insertAdjacentHTML("beforebegin", "<p>" + firstnameAlert + "</p>") : "";
    //         firstnameTag.previousElementSibling.classList.add("text-amber-200");
    //         firstnameTag.previousElementSibling.classList.add("mt-2");
    //         return;
    //     }
    // }else{
    //     if(firstnameTag.previousElementSibling.innerHTML == firstnameAlert){
    //         firstnameTag.classList.remove("outline");
    //         firstnameTag.classList.remove("outline-4");
    //         firstnameTag.classList.remove("outline-amber-300");
    //         firstnameTag.classList.remove("outline-offset-4");
    //         firstnameTag.classList.remove("mt-2");
    //         firstnameTag.classList.remove("mt-2");
    //         firstnameTag.previousElementSibling.classList.remove("text-amber-200");
    //         firstnameTag.previousElementSibling.classList.remove("mt-2");
    //         firstnameTag.previousElementSibling.removeAttribute("class");
    //         firstnameTag.previousElementSibling.innerHTML == firstnameAlert ? firstnameTag.previousElementSibling.remove() : "";
    //     }
    // }




//     if(!name){
//         const nameAlert = `<p>The event name must be filled !</p>`
//         nameTag.classList.add("alert-field")
//         nameTag.previousElementSibling.innerHTML != `The event name must be filled !` ? nameTag.insertAdjacentHTML("beforebegin", nameAlert) : "";
//         return;
//     }
//     nameTag.classList.remove("alert-field")
//     nameTag.previousElementSibling.innerHTML == `The event name must be filled !` ? nameTag.previousElementSibling.remove() : ""
    
//     if(!description){
//         const descriptionAlert = `<p>The event description must be filled !</p>`
//         descriptionTag.classList.add("alert-field")
//         descriptionTag.previousElementSibling.innerHTML != `The event description must be filled !` ? descriptionTag.insertAdjacentHTML("beforebegin", descriptionAlert) : "";
//         return;
//     }
//     descriptionTag.classList.remove("alert-field")
//     descriptionTag.previousElementSibling.innerHTML == `The event description must be filled !` ? descriptionTag.previousElementSibling.remove() : ""

//     let dateNumber = 1;
//     for(let date of dates){
//         if(!date){
//             console.error(`Your dates number ${dateNumber} must be filled`);
//         }
//         dateNumber++;
//     }

//     formatEventObject(author, name, description, dates);
    
// }

// function formatEventObject(author, name, description, dates){
//     const data = {
//         "name" : name,
//         "dates" : dates,
//         "author" : author,
//         "description" : description
//     }

//     sendEventToDB(data)
// }

// function sendEventToDB(data){
//     try{
//         fetch("http://localhost:3000/api/events",{

//         method: "POST",
//         body: JSON.stringify(data),
//         headers: {
//             "Content-type" : "application/json; charset=UTF-8"
//         }
//     })
//         .then(response => response.json())
//     }
//     catch(error){
//         console.log('There was an error', error)
//     }
// }