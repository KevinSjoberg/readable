import { normalize } from 'normalizr';

import * as schema from '../api/schema';

const HOST = 'http://localhost:3001';
const AUTHORIZATION = 'f1604e2153b557e0a3f70efe9be72a71';

const buildHeaders = (extras = {}) => {
  const headers = new Headers();
  headers.append('Authorization', AUTHORIZATION);
  Object.keys(extras).forEach(header => headers.append(header, extras[header]));
  return headers;
};

const doGet = path =>
  fetch(`${HOST}/${path}`, {
    headers: buildHeaders(),
  });

const doPost = (path, params) =>
  fetch(`${HOST}/${path}`, {
    body: JSON.stringify(params),
    headers: buildHeaders({
      'Content-Type': 'application/json',
    }),
    method: 'POST',
  });

const doDelete = path =>
  fetch(`${HOST}/${path}`, {
    headers: buildHeaders(),
    method: 'DELETE',
  });

const doPut = (path, params) =>
  fetch(`${HOST}/${path}`, {
    body: JSON.stringify(params),
    headers: buildHeaders({
      'Content-Type': 'application/json',
    }),
    method: 'PUT',
  });

export default {
  addComment: params => (
    doPost('comments', params)
      .then(response => response.json())
      .then(json => normalize(json, schema.comment))
  ),
  addPost: params => (
    doPost('posts', params)
      .then(response => response.json())
      .then(json => normalize(json, schema.post))
  ),
  downvoteComment: id => (
    doPost(`comments/${id}`, { option: 'downVote' })
      .then(response => response.json())
      .then(json => normalize(json, schema.comment))
  ),
  downvotePost: id => (
    doPost(`posts/${id}`, { option: 'downVote' })
      .then(response => response.json())
      .then(json => normalize(json, schema.post))
  ),
  fetchCategories: () => (
    doGet('categories')
      .then(response => response.json())
      .then(json => normalize(json.categories, schema.categories))
  ),
  fetchComment: id => (
    doGet(`comments/${id}`)
      .then(response => response.json())
      .then(json => normalize(json, schema.comment))
  ),
  fetchPost: id => (
    doGet(`posts/${id}`)
      .then(response => response.json())
      .then(json => normalize(json, schema.post))
  ),
  fetchComments: postId => (
    doGet(`posts/${postId}/comments`)
      .then(response => response.json())
      .then(json => normalize(json, schema.comments))
  ),
  fetchPosts: (category) => {
    const path = category ? `${category}/posts` : 'posts';
    return doGet(path)
      .then(response => response.json())
      .then(json => normalize(json, schema.posts));
  },
  removeComment: id => (
    doDelete(`comments/${id}`)
      .then(response => response.json())
      .then(json => normalize(json, schema.comment))
  ),
  removePost: id => (
    doDelete(`posts/${id}`)
      .then(response => response.json())
      .then(json => normalize(json, schema.post))
  ),
  updateComment: (id, params) => (
    doPut(`comments/${id}`, params)
      .then(response => response.json())
      .then(json => normalize(json, schema.comment))
  ),
  updatePost: (id, params) => (
    doPut(`posts/${id}`, params)
      .then(response => response.json())
      .then(json => normalize(json, schema.post))
  ),
  upvoteComment: id => (
    doPost(`comments/${id}`, { option: 'upVote' })
      .then(response => response.json())
      .then(json => normalize(json, schema.comment))
  ),
  upvotePost: id => (
    doPost(`posts/${id}`, { option: 'upVote' })
      .then(response => response.json())
      .then(json => normalize(json, schema.post))
  ),
};
