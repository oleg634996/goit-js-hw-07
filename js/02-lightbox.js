import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryItemList = document.querySelector('.gallery')
galleryItemList.addEventListener('click', onModal)
  console.log(galleryItemList)

const imagesList = galleryItems.map(({ description, original, preview }) => {
    
    return ` 
  <a class="gallery__item" href="${original}">
     <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`;
}).join('');
   

galleryItemList.insertAdjacentHTML('afterbegin', imagesList)


const lightbox = new SimpleLightbox('.gallery a', { captionsData:'alt',captionDelay:250,captionPosition:'bottom'});

 

function onModal(event) {
  event.preventDefault()
  const gallery = event.target
  const galleryList = gallery.src
  if (!galleryList) {
    return
  }

    console.log(event);
}
