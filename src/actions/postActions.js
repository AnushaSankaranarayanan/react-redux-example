import {FETCH_POSTS, NEW_POST} from './types';

export const fetchPosts = () => dispatch => {
    console.log('Fetching Data');
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then( res => res.json())
    .then(data => dispatch(
      {
        type : FETCH_POSTS,
        payload : data
      }
    ));
}

export const createPost = (postData) => dispatch => {
    console.log('Posting Data');
    fetch('https://jsonplaceholder.typicode.com/posts' ,{
        method : "POST",
        headers : {
          'content-type' : 'application/json'
        },
        body : JSON.stringify(postData)
      }
    )
    .then(res => res.json())
    .then(post => dispatch(
      {
        type : NEW_POST,
        payload : post //gives back a post
      }
    ));
}
