const HOST = 'http://localhost:3001';

const buildHeaders = () => {
  const headers = new Headers();
  headers.append('Authorization', 'f1604e2153b557e0a3f70efe9be72a71');

  return headers;
};

const fetchCategories = () =>
  fetch(`${HOST}/categories`, { headers: buildHeaders() });

const fetchPosts = () =>
  fetch(`${HOST}/posts`, { headers: buildHeaders() });

export default {
  fetchCategories,
  fetchPosts,
};
