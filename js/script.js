// Store uploaded image (only for preview)
let uploadedImage = "";

// Preview uploaded image
function previewImage(event) {
    let reader = new FileReader();

    reader.onload = function () {
        uploadedImage = reader.result;

        let img = document.getElementById("preview");
        img.src = uploadedImage;
        img.style.display = "block";
    };

    reader.readAsDataURL(event.target.files[0]);
}

// Generate AI Memory (ONLY ONE IMAGE)
function generateMemory() {

    let title = document.getElementById("title").value;
    let event = document.getElementById("event").value;
    let desc = document.getElementById("desc").value;

    if (title === "" || event === "Select Event Type" || desc === "") {
        alert("Please fill all details 💖");
        return;
    }

    let box = document.getElementById("outputBox");
    box.style.display = "block";

    // Loading effect
    box.innerHTML = "<h3>✨ Creating your AI Birthday Memory... 🎂💫</h3>";

    setTimeout(() => {

        box.innerHTML = `
        <h3>✨ Your AI Generated Birthday Memory 🎂</h3>

        <<img src="./birthday.jpg" > style="width:220px; border-radius:15px;">

        <br><br>

        <button onclick="saveMemory()" class="btn">
            Save Memory 💾
        </button>
        `;

    }, 2000);
}

// Save Memory
function saveMemory() {
    alert("Memory Saved Successfully 💖");
}
