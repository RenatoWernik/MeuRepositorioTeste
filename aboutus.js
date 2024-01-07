function toggleText() {
   
    var aboutText = document.getElementById("aboutText");
    var moreText = document.getElementById("moreText");
    var lastText = document.getElementById("lastText");

    
    aboutText.classList.toggle("hidden");
    moreText.classList.toggle("hidden");
    lastText.classList.toggle("hidden");

  
    var readMoreBtn = document.getElementById("readMoreBtn");
    if (aboutText.classList.contains("hidden")) {
        readMoreBtn.innerHTML = "Read More";
    } else {
        readMoreBtn.innerHTML = "Read Less";
    }
}
