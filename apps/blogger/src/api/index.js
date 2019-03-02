const baseApiUrl = 'http://localhost:3001';

export const getCategories = () =>
   fetch(`${baseApiUrl}/categories`).then(response => response.json());

export const getPosts = () =>
   fetch(`${baseApiUrl}/posts`, {
      headers: {
         Authorization: 'bearer 12345abcd'
      }
   }).then(response => response.json());

export const getPost = id =>
   fetch(`${baseApiUrl}/posts/${id}`).then(response => response.json());

export const addPost = post =>
   fetch(`${baseApiUrl}/posts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post)
   }).then(response => response.json());

export const updatePost = post =>
   fetch(`${baseApiUrl}/posts/${post.id}`, {
      method: 'PATCH',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
   }).then(response => response.json());

export const deletePost = id =>
   fetch(`${baseApiUrl}/posts/${id}`, {
      method: 'DELETE'
   }).then(response => response.json());
