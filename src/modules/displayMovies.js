import { updateLikes, setLike } from './likeFunctionality.js';
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlayy = document.getElementById('overlayy');
const modalContent = document.querySelector('.modalData');

const displayMovies = async (movieList, appId, section) => {
  const movieSection = document.querySelector(`#${section}-section`);
  movieSection.innerHTML = '';
  movieList.forEach((item) => {
    const mainDiv = document.createElement('div');
    mainDiv.className = 'movie-wrapper ';
    mainDiv.id = `${section}${item.id}`;
    const details = document.createElement('div');
    details.className = 'movie-wrapper__title';
    const img = document.createElement('img');
    img.className = 'movie-wrapper__img';
    img.src = item.image.medium;
    const name = document.createElement('h3');
    name.innerHTML = `${item.name}`;
    const likes = document.createElement('div');
    likes.className = 'movie-wrapper__likes';
    const span = document.createElement('span');
    const like = document.createElement('i');
    like.className = 'fas fa-heart';
    likes.append(like, span);
    details.append(name, likes);
    const commentButton = document.createElement('button');
    commentButton.type = 'button';
    commentButton.innerHTML = 'Comments';
    commentButton.className = 'movie-wrapper__comment-button ';
    commentButton.id='open-modal'
    mainDiv.append(img, details, commentButton);
    const reserveButton = document.createElement('button');
    reserveButton.type = 'button';
    reserveButton.innerHTML = 'Reservations';
    reserveButton.className = 'movie-wrapper__comment-button';
    mainDiv.append(reserveButton);
    movieSection.appendChild(mainDiv);
    like.addEventListener('click', () => {
      setLike(`${section}${item.id}`, appId);
      const number = like.parentNode.lastChild.textContent.split(' ');
      like.parentNode.lastChild.innerHTML = `${Number(number[0]) + 1} likes`;
    });
  });
  updateLikes(appId);
};



let openModal =(modal)=>{
  if(modal== null) return;
  modal.classList.add('active')
  overlayy.classList.add('active');
}
const  closeModal =(modal)=>{
  if(modal== null) return;
  modal.classList.remove('active')
  overlayy.classList.remove('active');
}

openModalButtons.forEach((button) =>{
  button.addEventListener('click', (e)=>{
    const foundIndex=Array.from(openModalButtons).indexOf(e.target);

      //  movieList.forEach((item )=>{


        modalContent.innerHTML=`
       
        <div >  <p> ${ console.log('hello') }</p> </div>
        `
       const modal = document.querySelector('button.dataset.modalTarget')
       openModal(modal)
  })
})

// overlayy.addEventListener('click', ()=>{
//   const  modals = document.querySelectorAll('.modal.active');
//   modals.forEach((modal)=>{
//     closeModal(modal)
//   })
// })

//  closeModalButtons.forEach((button)=>{
//    button.addEventListener('click', ()=>{
//      const modal = button.closest('.modal');
//      closeModal(modal)
//    })
//  })


export { displayMovies as default };
