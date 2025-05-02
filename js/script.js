document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const usernameInput = document.getElementById("exampleInputusername");
    const recipeInput = document.getElementById("exampleInputRecipe");

    const createMessage = (text, type = "error") => {
        const msg = document.createElement("div");
        msg.className = type === "error" ? "alert alert-danger mt-3" : "alert alert-success mt-3";
        msg.innerText = text;
        return msg;
    };

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const oldAlerts = form.querySelectorAll(".alert");
        oldAlerts.forEach(alert => alert.remove());

        const username = usernameInput.value.trim();
        const recipe = recipeInput.value.trim();
        let isValid = true;

        if (username === "") {
            form.appendChild(createMessage("❗Username cannot be empty"));
            isValid = false;
        }

        if (recipe.length < 20) {
            form.appendChild(createMessage("❗Recipe must be at least 20 characters"));
            isValid = false;
        }

        if (isValid) {
            form.appendChild(createMessage("✔️ Form submitted successfully!", "success"));
            form.reset();
        }
    });
});
