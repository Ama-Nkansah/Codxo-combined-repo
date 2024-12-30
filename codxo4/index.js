function openlightbox(image) {
const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightbox-image");

lightboxImage.src = image.src;

lightbox.style.display="flex";
}
 
function closelightbox (){
  const closebutton = document.querySelector("#lightbox");
  closebutton.style.display ="none";
}