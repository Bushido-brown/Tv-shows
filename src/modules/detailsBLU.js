import sendCommentBLU from './sendCommentBLU.js';
import commentsBLU from './commentsBLU.js';

const detailsBLU = (movieList) => {
  const movies = document.getElementsByClassName('movie-wrapper__img');
  for (let i = 50; i < movies.length; i += 1) {
    movies[i].addEventListener('click', () => {
      const details = document.getElementById('details');
      const innerdetails = document.getElementById('inner-details');
      details.classList.remove('hidden');
      const innerWrapper = document.createElement('div');
      innerWrapper.classList.add('innerWrap');
      const innerWrapDetails = document.createElement('div');
      innerWrapDetails.classList.add('innerWrapDetails');
      const img = document.createElement('img');
      img.src = document.getElementById(`img_${i + 4}`).src;
      const duration = document.createElement('p');
      duration.innerHTML = `Duration: ${movieList[i - 50].runtime} minutes`;
      duration.classList.add('summary');
      const rating = document.createElement('p');
      rating.classList.add('summary');
      rating.innerHTML = `Rating: ${movieList[i - 50].rating.average}`;
      const summary = document.createElement('p');
      summary.classList.add('summary');
      summary.innerHTML = movieList[i - 50].summary;
      const website = document.createElement('a');
      website.classList.add('summary');
      website.innerHTML = 'Visit the official website';
      website.href = movieList[i - 50].officialSite;
      const closeBtn = document.getElementById('closeBtn');
      const commentSection = document.createElement('div');
      commentSection.classList.add('commentSection');
      const commentsTitle = document.createElement('h3');
      commentsTitle.style.fontSize = '1.25em';
      commentsTitle.innerHTML = 'Leave a comment!';
      const inputName = document.createElement('input');
      inputName.placeholder = 'Your name here';
      const inputComment = document.createElement('input');
      inputComment.placeholder = 'Your insights';
      const commentBtn = document.createElement('button');
      commentBtn.id = `commentBtn${i}`;
      commentBtn.innerHTML = 'Comment';
      const commentsWrapper = document.createElement('div');
      commentsWrapper.classList.add('commentsWrapper');
      const commentTitle = document.createElement('h2');
      commentTitle.innerHTML = 'Comments';
      commentsBLU(`${i}`, commentTitle, commentsWrapper);
      innerWrapper.appendChild(img);
      innerWrapDetails.appendChild(summary);
      innerWrapDetails.appendChild(duration);
      innerWrapDetails.appendChild(rating);
      innerWrapDetails.appendChild(website);
      innerWrapper.appendChild(innerWrapDetails);
      innerdetails.appendChild(innerWrapper);
      innerWrapDetails.appendChild(commentsWrapper);
      commentsWrapper.appendChild(commentSection);
      commentSection.appendChild(commentsTitle);
      commentsWrapper.appendChild(commentTitle);
      commentSection.appendChild(inputName);
      commentSection.appendChild(inputComment);
      commentSection.appendChild(commentBtn);
      closeBtn.addEventListener('click', () => {
        details.classList.add('hidden');
        innerWrapper.remove();
        commentSection.remove();
      });
      commentBtn.addEventListener('click', () => {
        sendCommentBLU(commentBtn.id, inputName.value, inputComment.value);
      });
    });
  }
};

export default detailsBLU;
