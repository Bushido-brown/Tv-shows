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
      name: `${name}`,
      comment: `${comment}`,
    }
    await axios.post(`${baseURL}/${appID}/comments`, newComment)
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

const getTotalComments = async (itemid) => {
  const comment = await fetch(
    ` ${baseURL}${appID} /comments?item_id=${itemid}`
  )
  const comments = await comment.response.json()
  comments.length === undefined ? 0 : comments.length

}


export { updateLikes, setLike, addComment, fetchComment, getTotalComments };
