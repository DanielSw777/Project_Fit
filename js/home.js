const tabs = document.querySelectorAll(".main__container-tab");

function openCloseTabs(event) {
    const tab = event.currentTarget;
    const paragraph = tab.querySelector(".main__tab-paragraph");
    const icon_up = tab.querySelector(".main__tab-icon-up");
    const icon_right = tab.querySelector(".main__tab-icon-right");
    if (paragraph.style.display !== "flex") {
        paragraph.style.display = "flex";
        icon_up.style.display = "flex";
        icon_right.style.display = "none";
    }
    else {
        paragraph.style.display = "none";
        icon_up.style.display = "none";
        icon_right.style.display = "flex";
    }
}

tabs.forEach(tab => {
    tab.addEventListener("click", openCloseTabs);
});
