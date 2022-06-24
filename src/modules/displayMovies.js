import { updateLikes, setLike, setComment,getComment } from './likeFunctionality.js';
import List from './newmodel.js';

const createmodal = document.querySelector('.modal__content');
const modalContainer = document.getElementById('modal-container');
const nameValue = document.querySelector('.name')
const commentValue = document.querySelector('.comment')
const submitBtn = document.querySelector('.submit');

const  createPopUp = (item) => {
    const  getcomment = getComment(item.id)
    getcomment.forEach((comment)={




    })


    createmodal.innerHTML = `
                <img class='modal__img ' src=${item.image.original}>   
  
          <button class="modal-section__back-btn close-modal" id="backBtn close-modal">
              <svg xmlns="http://www.w3.org/2000/svg" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"><path d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z" fill-rule="nonzero"/></svg>
          </button>
  
          <div class="modal-section__container-movie">
                  <div class="modal-section__movie-basic-info">
                      <h3 class="modal-section__movie-title">${item.name}</h3>
                      <div class="modal-section__container-actions">
  
                          <button class="modal-section__movie-action" data-property="seeLaters">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24" width="48px" height="48px">    <path d="M12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10C22,6.477,17.523,2,12,2z M15.293,16.707L11,12.414V6h2 v5.586l3.707,3.707L15.293,16.707z"/></svg>
                          </button>
  
                          <button class="modal-section__movie-action" data-property="seens">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24"><path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"/></svg>
                          </button>
      
                           <button class="modal-section__movie-action" data-property="favourites">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg>
                           </button>
  
                           <button title="See Trailer" class="modal-section__trailer-btn" id="trailerBtn" data-source="">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
                           </button>
                      </div>
                  
                      <p class="modal-section__movie-overview"> ${item.summary}</p>
                  </div>
  
                  <div class="modal-section__movie-facts">
                      <div class="modal-section__container-uls">
                      <ul class="modal-section__ul">
                          <li class="modal-section__li">
                              <span class="modal-section__span">Released:${item.ended}</span>
                              <span class="modal-section__li-content" id="released"></span>
                          </li>
                          <li class="modal-section__li">
                              <span class="modal-section__span">Original Language:</span>
                              <span class="modal-section__li-content" id="originalLang"></span>
                          </li>
                          <li class="modal-section__li">
                              <span class="modal-section__span">Budget:</span>
                              <span class="modal-section__li-content" id="budget"></span>
                          </li>
                          <li class="modal-section__li">
                              <span class="modal-section__span">Vote Average:</span>
                              <span class="modal-section__li-content">
                                      <span class="modal-section__vote-average-span" id="voteAverage"></span>
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/></svg>
                              </span>
                          </li>
                      </ul>
                      <ul class="modal-section__ul">
                          <li class="modal-section__li">
                              <span class="modal-section__span">Runtime:</span>
                              <span class="modal-section__li-content" id="runtime"></span>
                          </li>    
                          <li class="modal-section__li">
                              <span class="modal-section__span">Popularity:</span>
                              <span class="modal-section__li-content" id="popularity"></span>
                          </li>
                          <li class="modal-section__li">
                              <span class="modal-section__span">Revenue:</span>
                              <span class="modal-section__li-content" id="revenue"></span>
                          </li>
                          <li class="modal-section__li">
                              <span class="modal-section__span">Vote Count:</span>
                              <span class="modal-section__li-content" id="voteCount"></span>
                          </li>
                      </ul>
                  </div>
                  <div class="modal-section__container-genres">   
                      <h4 class="modal-section__h4">Genres</h4>
                      <ul class="modal-section__ul-movie-genres" id="modalMovieGenres"></ul>
                  </div>
                  </div>
  
                  <div class="meal-comments">
                  <h2>Comments</h2>
                  <div class="comment">
                      <div class="user-identifier">
                          <i class="fa-solid fa-user"></i>
                          <div class="comment-user-name">
                              <p>userName</p>
                              <p class="comment-date">2021-01-10</p>
                          </div>
                      </div>
                      <p>"comment"</p>
                  </div>
              </div>
  
              <div class="add-comments" id="mealId">
              <form action="#" id="comment-form">
              <div> <input type="text" name="name" id="name" placeholder="Your Name" required></div>
               <div>    <textarea name="comment" id="comment" cols="30" rows="10" placeholder="Your insights"    required></textarea></div>
               
               <button type="submit" class="submit"> Submit <i class="fa-solid fa-check"></i></button>
               </form>
              </div>
             
              </div>
      </section>
  
  `;
}




export const getInputData = () => {
    if (nameValue && commentValue) {
        const newuser = new List(nameValue.value, commentValue.value)
        setComment(newuser)
        nameValue.value = '';
        commentValue.value = '';
    }
}





function closeModal() {
    const modalContainer = document.getElementById('modal-container');
    modalContainer.classList.remove('show-modal');
}

const displayMovies = async (movieList, appId, section) => {
    const movieSection = document.querySelector(`#${section}-section`);
    movieSection.innerHTML = '';
    movieList.forEach((item) => {
        const mainDiv = document.createElement('div');
        mainDiv.className = 'movie-wrapper modal-container';
        mainDiv.id = `${section}${item.id}`;
        const details = document.createElement('div');
        details.className = 'movie-wrapper__title  modal-container';
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
        commentButton.className = 'movie-wrapper__comment-button open-moda';
        commentButton.id = 'open-modal';
        commentButton.addEventListener('click',  async() => {
            createPopUp(item);
            modalContainer.classList.add('show-modal');
            const closeBtn = document.querySelectorAll('.close-modal');
            closeBtn.forEach((c) => c.addEventListener('click', closeModal));
            getcomment(item.id)
            console.log(item);
        });
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

export const showModal = (openButton, modalContent) => {
    const openBtn = document.getElementById(openButton);
    const modalContainer = document.getElementById(modalContent);

    if (openBtn && modalContainer) {
        openBtn.addEventListener('click', () => {
            modalContainer.classList.add('show-modal');
        });
    }
};

export { displayMovies as default };
