/*Name this external file gallery.js*/

function upDate(previewPic) {
  let previewDiv = document.querySelector("#image");
  let imgUrl = previewPic.src;
  let imgAlt = previewPic.alt;
  previewDiv.style.backgroundImage = `url(${imgUrl})`;
  previewDiv.innerHTML = imgAlt;
  /* In this function you should 
  1) change the url for the background image of the div with the id = "image" 
  to the source file of the preview image    
  2) Change the text  of the div with the id = "image" 
  to the alt text of the preview image 
    */
}

function unDo() {
  let previewDiv = document.querySelector("#image");
  previewDiv.style.backgroundImage = "url('')";
  previewDiv.innerHTML = "Hover over an image below to display here.";
  /* In this function you should 
  1) Update the url for the background image of the div with the id = "image" 
  back to the orginal-image.  You can use the css code to see what that original URL was 
  2) Change the text  of the div with the id = "image" 
  back to the original text.  You can use the html code to see what that original text was
    */
}

function focusOn(el) {
  console.log("Images loaded successfully with 'tabindex' attribute!");

  let imgs = document.querySelectorAll("img, #image");
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].setAttribute("tabindex", "0");
  }

  // change the preview image and the text
  let previewImg = document.querySelector("#image");
  previewImg.style.backgroundImage = `url(${el.src})`;
  previewImg.innerHTML = el.alt;
}

function focusOff() {
  unDo();
}
