function upDate(previewPic) {
  console.log("Hover or focus triggered");
  console.log("Image alt text is: " + previewPic.alt);

  let imageDiv = document.querySelector("#image");
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
  imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
  let imageDiv = document.querySelector("#image");
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.innerHTML = "Hover over an image below to display here.";
}

function addTabFocus() {
  console.log("Page loaded and tabindex function triggered");

  let previewImages = document.querySelectorAll(".preview");

  for (let i = 0; i < previewImages.length; i++) {
    previewImages[i].setAttribute("tabindex", "0");
    console.log("Tabindex added to image " + (i + 1));
  }
}
