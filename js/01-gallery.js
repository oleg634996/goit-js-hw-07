import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryItemList = document.querySelector('.gallery')
galleryItemList.addEventListener('click', onModal)


const imagesList = galleryItems.map(({ description, original, preview }) => {
    
  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
}).join('');

galleryItemList.insertAdjacentHTML('afterbegin', imagesList)

function onModal(event) {
  event.preventDefault()
  const gallery = event.target
  const galleryList = gallery.dataset.source

  if (!galleryList) {
    return
  }
		basicLightbox.create(`
		<img width="1400" height="900" src="${event.target.dataset.source}">
	`).show()
  }

console.log(galleryItems);