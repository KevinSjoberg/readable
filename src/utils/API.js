const HOST = 'http://localhost:3001';
const AUTHORIZATION = 'f1604e2153b557e0a3f70efe9be72a71';

const buildHeaders = () => {
  const headers = new Headers();
  headers.append('Authorization', AUTHORIZATION);

  return headers;
};

const fetchCategories = () =>
  fetch(`${HOST}/categories`, { headers: buildHeaders() });

const fetchPosts = () =>
  fetch(`${HOST}/posts`, { headers: buildHeaders() });

const fetchPostsByCategory = category =>
  fetch(`${HOST}/${category}/posts`, { headers: buildHeaders() });


export default {
  fetchCategories,
  fetchPosts,
  fetchPostsByCategory,
};
