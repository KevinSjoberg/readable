const HOST = 'http://localhost:3001';
const AUTHORIZATION = 'f1604e2153b557e0a3f70efe9be72a71';

const buildHeaders = (extras = {}) => {
  const headers = new Headers();
  headers.append('Authorization', AUTHORIZATION);
  Object.keys(extras).forEach(header => headers.append(header, extras[header]));
  return headers;
};

const get = path =>
  fetch(`${HOST}/${path}`, {
    headers: buildHeaders(),
  });

const post = (path, params) =>
  fetch(`${HOST}/${path}`, {
    body: JSON.stringify(params),
    headers: buildHeaders({
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    }),
    method: 'POST',
  });

export default {
  fetchCategories: () => {
    const path = 'categories';
    return get(path);
  },
  fetchPost: (id) => {
    const path = `posts/${id}`;
    return get(path);
  },
  fetchPosts: (category) => {
    const path = category ? `${category}/posts` : 'posts';
    return get(path);
  },
  upvote: (entity, id) => {
    const path = `${entity}s/${id}`;
    return post(path, { option: 'upVote' });
  },
  downvote: (entity, id) => {
    const path = `${entity}s/${id}`;
    return post(path, { option: 'downVote' });
  },
};
