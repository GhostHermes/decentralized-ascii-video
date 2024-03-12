console.log("app.js loaded!");
// Placeholder - Getting Web3 set up
if (typeof window.ethereum !== 'undefined') {
    // Modern dapp browsers with Web3.js
    window.web3 = new Web3(window.ethereum);
    console.log("Web3 detected!");
} else { 
    // Provide fallback instructions for non-dapp browsers
    alert("Please install a Web3-compatible browser like MetaMask."); 
}

const AsciiArt = require('ascii-art');

async function handleUpload() {
    // 1. Get the uploaded video file (Existing Code)
    const fileInput = document.getElementById("videoUpload");
    const file = fileInput.files[0];

    // 2. Read the file as a data URL (We'll refine this later)
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
        const base64Data = reader.result; // Temporary - Not suitable for full videos!

        // 3. Create an image element for ASCII conversion
        const image = new Image();
        image.src = base64Data; 

        image.onload = () => {
            // 4. Convert with ascii-art (Basic Example)
            AsciiArt.Image.createFromImage(image, {
                alphabet: ' .,:;i1tfLCG08@' 
            })
            .then((rendered) => {
                console.log(rendered); // Print the ASCII to the console
            });
        }
    }
}
