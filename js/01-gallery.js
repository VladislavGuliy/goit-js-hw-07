import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listGalleryEl = document.querySelector(".gallery");

const elements = createGalleryImages(galleryItems);
listGalleryEl.insertAdjacentHTML("beforeend", elements);

listGalleryEl.addEventListener("click", onGalleryImageClick);

//--- Створення розмітки ---

function createGalleryImages(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`;
    })
    .join("");
}

// --- Реалізація делегування і отримання url великого зображення ---

function onGalleryImageClick(event) {
  const { target } = event;

  event.preventDefault();

  if (!target.classList.contains("gallery__image")) {
    return;
  }
  const imageSource = target.dataset.source;

  openCloseModal(imageSource);
}

// --- Відкриття модального вікна по кліку на елементі галереї та ---
// --- закриття модального вікна після натискання клавіші Escape ---

function openCloseModal(url) {
  const onPressEsc = (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  };

  const instance = basicLightbox.create(
    `
    <img src="${url}">
       `,
    {
      onShow: () => window.addEventListener("keydown", onPressEsc),
      onClose: () => window.removeEventListener("keydown", onPressEsc),
    }
  );

  instance.show();
}

console.log(galleryItems);
