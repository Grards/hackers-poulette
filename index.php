<?php require "./views/partials/header.php" ?>

    <h1 class="text-center text-5xl lg:text-6xl mt-5 mb-5 text-red-600 font-bold">Hackers poulette</h1>

    <form method="POST" action="" class="flex flex-col ml-5 mr-5 w-100 lg:w-1/2 lg:mx-auto mt-20 bg-red-500 p-8 rounded-xl relative z-10">
        <label for="firstname" class="mb-2 mt-2 text-slate-50 font-bold">Firstname :</label>
        <input type="text" id="firstname" name="firstname" placeholder="Enter your firstname here. Or is it your lastname ..?" class="p-2">

        <label for="lastname" class="mb-2 mt-2 text-slate-50 font-bold">Lastname :</label>
        <input type="text" id="lastname" name="lastname" placeholder="Enter your lastname here. I think so. Yes. That's it." class="p-2">

        <label for="email" class="mb-2 mt-2 text-slate-50 font-bold">Email adress :</label>
        <input type="mail" id="email" name="email" placeholder="Draw a superb @. I want a nice curl." class="p-2">

        <label for="file" class="mb-2 mt-2 text-slate-50 font-bold">File (png or jpeg) :</label>
        <input type="file" id="file" name="file" accept="image/png, image.jpeg" class="text-slate-50">

        <label for="description" class="mb-2 mt-2 text-slate-50 font-bold">Description :</label>
        <textarea id="description" name="description" placeholder="Tell us about your life as a chick. It fascinates me. Really, I swear!" rows="4" cols="50" class="p-2"></textarea>

        <input type="submit" value="Cocoricooooooo !" class="border border-solid border-b border-slate-50 hover:cursor-pointer hover:bg-slate-50 hover:text-red-400 mb-2 mt-2 p-2 text-slate-50 font-bold">
    </form>

    <figure class="hidden lg:block absolute right-8 bottom-8">
        <img class="w-48 h-48 mx-auto" src="./assets/img/poulette.png" alt="Image of a beautifull 'poulette'">
        <figcaption class="text-center italic caption-top">Coât ?</figcaption>
    </figure>
<?php require "./views/partials/footer.php" ?>