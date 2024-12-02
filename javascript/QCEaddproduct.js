// First container's image and file input
let uploadButton1 = document.getElementById("upload-button1");
let chosenImage1 = document.getElementById("chosen-image1");
let fileName1 = document.getElementById("file-name1");

uploadButton1.onchange = () => {
    if (uploadButton1.files && uploadButton1.files[0]) {
        let reader1 = new FileReader();
        reader1.readAsDataURL(uploadButton1.files[0]);

        reader1.onload = () => {
            chosenImage1.setAttribute("src", reader1.result);
            chosenImage1.style.display = "block"; // Show the image
            fileName1.textContent = uploadButton1.files[0].name; // Show the file name
        };

        reader1.onerror = (error) => {
            console.error("Error reading file:", error);
        };
    } else {
        console.log("No file selected");
    }
};

// Second container's image and file input
let uploadButton2 = document.getElementById("upload-button2");
let chosenImage2 = document.getElementById("chosen-image2");
let fileName2 = document.getElementById("file-name2");

uploadButton2.onchange = () => {
    if (uploadButton2.files && uploadButton2.files[0]) {
        let reader2 = new FileReader();
        reader2.readAsDataURL(uploadButton2.files[0]);

        reader2.onload = () => {
            chosenImage2.setAttribute("src", reader2.result);
            chosenImage2.style.display = "block"; // Show the image
            fileName2.textContent = uploadButton2.files[0].name; // Show the file name
        };

        reader2.onerror = (error) => {
            console.error("Error reading file:", error);
        };
    } else {
        console.log("No file selected");
    }
};

// Third container's image and file input
let uploadButton3 = document.getElementById("upload-button3");
let chosenImage3 = document.getElementById("chosen-image3");
let fileName3 = document.getElementById("file-name3");

uploadButton3.onchange = () => {
    if (uploadButton3.files && uploadButton3.files[0]) {
        let reader3 = new FileReader();
        reader3.readAsDataURL(uploadButton3.files[0]);

        reader3.onload = () => {
            chosenImage3.setAttribute("src", reader3.result);
            chosenImage3.style.display = "block"; // Show the image
            fileName3.textContent = uploadButton3.files[0].name; // Show the file name
        };

        reader3.onerror = (error) => {
            console.error("Error reading file:", error);
        };
    } else {
        console.log("No file selected");
    }
};

// Fourth container's image and file input
let uploadButton4 = document.getElementById("upload-button4");
let chosenImage4 = document.getElementById("chosen-image4");
let fileName4 = document.getElementById("file-name4");

uploadButton4.onchange = () => {
    if (uploadButton4.files && uploadButton4.files[0]) {
        let reader4 = new FileReader();
        reader4.readAsDataURL(uploadButton4.files[0]);

        reader4.onload = () => {
            chosenImage4.setAttribute("src", reader4.result);
            chosenImage4.style.display = "block"; // Show the image
            fileName4.textContent = uploadButton4.files[0].name; // Show the file name
        };

        reader4.onerror = (error) => {
            console.error("Error reading file:", error);
        };
    } else {
        console.log("No file selected");
    }
};

// Third container's image and file input
let uploadButton5 = document.getElementById("upload-button5");
let chosenImage5 = document.getElementById("chosen-image5");
let fileName5 = document.getElementById("file-name5");

uploadButton5.onchange = () => {
    if (uploadButton5.files && uploadButton5.files[0]) {
        let reader5 = new FileReader();
        reader5.readAsDataURL(uploadButton5.files[0]);

        reader5.onload = () => {
            chosenImage5.setAttribute("src", reader5.result);
            chosenImage5.style.display = "block"; // Show the image
            fileName5.textContent = uploadButton5.files[0].name; // Show the file name
        };

        reader5.onerror = (error) => {
            console.error("Error reading file:", error);
        };
    } else {
        console.log("No file selected");
    }
};