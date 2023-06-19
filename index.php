<?php
    require "./views/partials/header.php"; 
?>



    <h1 class="text-center text-5xl lg:text-6xl mt-5 mb-5 text-red-600 font-bold">Hackers poulette</h1>

    <form id="chick-form" method="POST" action="./backend/send.php" class="flex flex-col ml-5 mr-5 w-100 lg:w-1/2 lg:mx-auto mt-14 bg-red-500 p-8 rounded-xl relative z-10">
        <label for="firstname" class="mb-2 mt-2 text-slate-50 font-bold uppercase">Firstname :</label>
        <span class="italic text-neutral-950 text-sm"><b class="text-amber-200">*</b> Enter your firstname here. Or is it your lastname ..?</span>
        <input type="text" id="firstname" name="firstname" class="p-2 rounded-md" required aria-required="true" maxlength="100" autocomplete="off">

        <label for="lastname" class="mb-2 mt-2 text-slate-50 font-bold uppercase">Lastname :</label>
        <span class="italic text-neutral-950 text-sm"><b class="text-amber-200">*</b> Enter your lastname here. I think so. Yes. That's it.</span>
        <input type="text" id="lastname" name="lastname" class="p-2 rounded-md focus:outline-teal-40" required aria-required="true" maxlength="100" autocomplete="off">

        <label for="email" class="mb-2 mt-2 text-slate-50 font-bold uppercase">Email adress :</label>
        <span class="italic text-neutral-950 text-sm"><b class="text-amber-200">*</b> Draw a superb @. I want a nice curl.</span>
        <input type="mail" id="email" name="email" class="p-2 rounded-md focus:outline-teal-40" required aria-required="true" maxlength="100" autocomplete="off">

        <label for="file" class="mb-2 mt-2 text-slate-50 font-bold uppercase">File (png or jpeg) :</label>
        <span class="italic text-neutral-950 text-sm">Send me a gentle chick with superb feathers.</span>
        <input type="file" id="file" name="file" accept="image/png, image/jpeg" class="text-slate-50 rounded-md" aria-required="false" autocomplete="off">

        <label for="description" class="mb-2 mt-2 text-slate-50 font-bold uppercase">Description :</label>
        <span class="italic text-neutral-950 text-sm"><b class="text-amber-200">*</b> Tell us about your life as a chick. It fascinates me. Really, I swear!</span>
        <textarea id="description" name="description" rows="4" cols="50" class="p-2 rounded-md !outline-teal-40" required aria-required="true" autocomplete="off"></textarea>

        <input type="submit" value="Côt côt Codaaaac !" class="border border-solid border-b border-slate-50 hover:cursor-pointer hover:bg-slate-50 hover:text-red-400 mb-2 mt-10 p-2 text-slate-50 font-bold lg:w-1/3 mx-auto rounded-md uppercase">
    </form>

    <figure class="hidden lg:block absolute right-8 bottom-8">
        <img class="w-48 h-48 mx-auto" src="./assets/img/poulette.png" alt="Image of a beautifull 'poulette'">
        <figcaption class="text-center italic caption-top">Coât ?</figcaption>
    </figure>
<?php require "./views/partials/footer.php";?>