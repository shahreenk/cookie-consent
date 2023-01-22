const modal = document.getElementById("modal");
const modalClose = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");
const modalText = document.getElementById("modal-text");
const declineBtn = document.getElementById("decline-btn");
const modalChoiceBtns = document.getElementById("modal-choice-btns")

setTimeout(function(){
    modal.style.display = "inline";
}, 1500)

modalClose.addEventListener("click", function(){
    modal.style.display = 'none';
})

declineBtn.addEventListener("mouseenter", function(){
    console.log("hovered");
})

declineBtn.addEventListener("mouseenter", function(){
    modalChoiceBtns.classList.toggle("reverse");
})

consentForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const consentFormData = new FormData(consentForm);
    const name = consentFormData.get("name");
    modalText.innerHTML = 
    `<div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">
            Uploading your data to the dark web...
        </p>
    </div>`
    setTimeout(function(){
        document.getElementById("upload-text").textContent = "Making the sale...";
    }, 1500);
    setTimeout(function(){
        document.getElementById("modal-inner").innerHTML = 
        `<h2>Thanks, <span class="modal-display-name">${name}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>`
        modalClose.disabled = false;
    }, 3000);
})