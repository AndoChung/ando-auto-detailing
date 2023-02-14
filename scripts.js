








// All html -> Header Section Drop Down Menu
const hamburger = document.getElementsByClassName("header-dropdown-label");
hamburger[0].addEventListener("click", HeaderSectionDropdownMenu);

function HeaderSectionDropdownMenu() {
    const dropdownList = document.getElementsByClassName("header-dropdown-list")
    let options = dropdownList[0];
    let firstSpan = hamburger[0].firstElementChild;
    let secondSpan = firstSpan.nextElementSibling;
    let thirdSpan = secondSpan.nextElementSibling
    if (options.style.display === "block") {
        options.style.display = "none"
        firstSpan.style.transformOrigin = 50% 50% 0;
        firstSpan.style.transform = "none";
        secondSpan.style.transformOrigin = 50% 50% 0;
        secondSpan.style.transform = "none";
        thirdSpan.style.transformOrigin = 50% 50% 0;
        thirdSpan.style.transform = "none";
        thirdSpan.style.width = "75%";
    } else {
        options.style.display = "block";
        firstSpan.style.transformOrigin = 50% "bottom";
        firstSpan.style.transform = "rotatez(45deg) translate(7px,3px)";
        secondSpan.style.transformOrigin = 50% "top";
        secondSpan.style.transform = "rotatez(-45deg)";
        thirdSpan.style.transformOrigin = 50% "bottom";
        thirdSpan.style.transform = "translate(16px,-10px) rotatez(45deg)";
        thirdSpan.style.width = "56%";
    }
    
}



// about.html -> FAQ Section
const question = document.getElementsByClassName("aboutpage-faq-section-question");

for (let i = 0; i < question.length; i++) {
    question[i].addEventListener("click", () => {
        let answer = question[i].lastElementChild;
        let triangle = question[i].firstElementChild.firstElementChild;
        if (answer.style.display === "block") {
            answer.style.display = "none";
            question[i].style.height = "80px";
            triangle.style.transform = "rotate(0deg)";
        } else {
            answer.style.display = "block";
            let questionHeight = answer.offsetHeight + 120;
            questionHeightString = questionHeight.toString();
            question[i].style.height = questionHeightString + "px";
            triangle.style.transform = "rotate(90deg)";
        }
    })
}



