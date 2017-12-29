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
  fetchCategories: () => {
    const path = 'categories';
    return doGet(path);
  },
  fetchPost: (id) => {
    const path = `posts/${id}`;
    return doGet(path);
  },
  fetchPosts: (category) => {
    const path = category ? `${category}/posts` : 'posts';
    return doGet(path);
  },
  upvote: (entity, id) => {
    const path = `${entity}s/${id}`;
    return doPost(path, { option: 'upVote' });
  },
  downvote: (entity, id) => {
    const path = `${entity}s/${id}`;
    return doPost(path, { option: 'downVote' });
  },
  removePost: (id) => {
    const path = `posts/${id}`;
    return doDelete(path);
  },
  fetchComments: (postId) => {
    const path = `posts/${postId}/comments`;
    return doGet(path);
  },
  removeComment: (id) => {
    const path = `comments/${id}`;
    return doDelete(path);
  },
  updatePost: (id, params) => {
    const path = `posts/${id}`;
    return doPut(path, params);
  },
};
