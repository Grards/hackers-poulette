export function jsIsEnable(){
    const body = document.getElementsByTagName("body");
    body[0].innerHTML += `<span id="JScheck" class="hidden">Security is here !</span>`;
}

export function noBind(){
    document.addEventListener("keydown", event => {
        if (event.ctrlKey){
           event.preventDefault();
        }
        if(event.key == "u"){
           event.preventDefault();
        }
        if(event.key == "F12"){
            event.preventDefault();
         }
    });

    document.addEventListener('contextmenu', 
     event => event.preventDefault()
    );
}


