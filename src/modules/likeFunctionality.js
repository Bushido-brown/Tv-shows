import axios from "axios";
import { baseURL, appID, } from "./utils";



const setLike = async (id, appID) => {
  const connect = await fetch(`${baseURL}${appID}/likes/`, {
    method: 'POST',
    body: JSON.stringify({ item_id: id }),
    headers: { 'Content-type': 'application/JSON' },
  });
  const response = await connect.text();
  return response;
};

const getLike = async (appID) => {
  const connect = await fetch(`${baseURL}${appID}/likes/`);
  const response = await connect.json();
  return response;
};

const updateLikes = (appID) => {
  getLike(appID).then((response) => {
    response.forEach((element) => {
      const container = document.querySelector(`#${element.item_id}`);
      container.children[1].children[1].children[1].innerHTML = `${element.likes} likes`;
    });
  });
};
const addComment = async (name, comment, id) => {
  if (name && comment) {
    const newComment = {
      item_id: id,
      username: `${name}`,
      comment: `${comment}`,
    }
    await axios.post(`${baseURL}/${appID}/comments`, newComment)
    console.log(newComment)
    return true
  }
  return false
}


const fetchComment = async (itemid) => {
  const comment = await fetch(
    `${baseURL}/${appID}/comments?item_id=${itemid}`,
  )
  const comments = await comment.json()
  return comments.length ? comments : [];
}

const getTotalComments = async (itemID) => {
  try {
    const response = await fetch(
      `${baseURL}/${appID}/comments?item_id=${itemID}`,
    );
    const data = await response.json();
    return data.length === undefined ? 0 : data.length;
  } catch (error) {
    return 0;
  }
};



export { updateLikes, setLike, addComment, fetchComment, getTotalComments };
