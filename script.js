function mode(){
    document.body.classList.toggle("dark-theme")
    document.getElementById("sun").classList.toggle("dark-theme");
    document.getElementById("moon").classList.toggle("dark-theme");
    document.getElementsById("mode-dark").classList.toggle("dark-theme");
    document.querySelector("a").classList.toggle("dark-theme");
}