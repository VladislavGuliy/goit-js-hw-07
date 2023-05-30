import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listGalleryEl = document.querySelector(".gallery");

const elements = createGalleryImages(galleryItems);

listGalleryEl.insertAdjacentHTML("beforeend", elements);

const lightbox = new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
});

function createGalleryImages(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}" >
           <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
     </li>`;
    })
    .join("");
}

console.log(galleryItems);
