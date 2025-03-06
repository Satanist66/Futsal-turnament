document.addEventListener("DOMContentLoaded", function() {
    const matches = document.querySelectorAll(".round p");

    matches.forEach((match, index) => {
        let input = document.createElement("input");
        input.type = "number";
        input.placeholder = "Skor";
        input.style.width = "50px";
        input.style.marginLeft = "10px";

        input.addEventListener("change", function() {
            localStorage.setItem("match" + index, input.value);
        });

        let savedScore = localStorage.getItem("match" + index);
        if (savedScore) {
            input.value = savedScore;
        }

        match.appendChild(input);
    });
});