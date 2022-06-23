const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

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
 const  setComment = async( id, name, Addcomment,appID)=>{
   const connect = await fetch(` ${baseURL}${appID}/comments`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username: name,
      comment: Addcomment,
    }),
  
   })
  const  comment = await  connect .text()
  return comment
 }
 
  const getComment = async(itemid)=>{
const response = await fetch(` ${baseURL}${appID}/comments?item_id${itemid}`)
const comments =await response.json()
return comments 
  }

export { updateLikes, setLike,setComment,getComment };
