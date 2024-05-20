function menu() {
    var container = document.querySelector(".container");
        var nav = document.querySelector(".nav");
        if (container.style.display === "none") {
            container.style.display = "inline-block";
            nav.style.borderRadius = "1.5em 1.5em 0 0";
        } else {
            container.style.display = "none";
            nav.style.borderRadius = "3em"; 
        }
}
function confirm() {
    alert("Your form has been submitted")
  }yle.display