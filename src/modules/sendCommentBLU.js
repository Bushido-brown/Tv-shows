const sendCommentBLU = async (id, name, comment) => {
  const commentBtn = document.createElement('button');
  commentBtn.id = id;
  const inputName = document.createElement('input');
  inputName.value = name;
  const inputComment = document.createElement('input');
  inputComment.value = comment;
  if (!inputName.value || !inputComment.value) {
    alert('Not empty values allowed, please add your name and comment!');
  } else {
    const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DiufW768skxheMu2XO3y';
    const connect = await fetch(`${baseURL}/comments/`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: commentBtn.id,
        username: inputName.value,
        comment: inputComment.value,
      }),
      headers: { 'Content-type': 'application/JSON' },
    });
    await connect.text();
    window.location.reload();
  }
};

export default sendCommentBLU;
