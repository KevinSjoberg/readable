const HOST = 'http://localhost:3001';
const AUTHORIZATION = 'f1604e2153b557e0a3f70efe9be72a71';

const buildHeaders = () => {
  const headers = new Headers();
  headers.append('Authorization', AUTHORIZATION);

  return headers;
};

const get = path =>
  fetch(`${HOST}/${path}`, { headers: buildHeaders() });

export default {
  fetchCategories: () => get('categories'),
  fetchPosts: (category) => {
    const path = category ? `${category}/posts` : 'posts';
    return get(path);
  },
};
