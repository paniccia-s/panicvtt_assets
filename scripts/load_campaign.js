function prepareModal() {
    var modal = document.getElementById("campaign_modal");
    var btns = document.getElementsByClassName("modal-button");
    Array.from(btns).forEach(function(b) {
        b.addEventListener('click', function() {
            modal.setAttribute("uuid", b.getAttribute("campaign-uuid"));

            document.getElementById("campaign-name").textContent = b.getAttribute("campaign-name");
            document.getElementById("campaign-description").textContent = b.getAttribute("campaign-description");
            document.getElementById("campaign-path").textContent = b.getAttribute("campaign-path");
            document.getElementById("campaign-uuid").value = b.getAttribute("campaign-uuid");

            modal.classList.add('is-active');
        })
    });

    var close_buttons = document.getElementsByClassName("modal-close");
    Array.from(close_buttons).forEach(function(b) {
        b.addEventListener('click', function() {
            modal.classList.remove('is-active');
        })
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            modal.classList.remove('is-active');
        }
    })
    
    return modal;
}