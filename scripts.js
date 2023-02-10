var question = document.getElementsByClassName("aboutpage-faq-section-question");

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



