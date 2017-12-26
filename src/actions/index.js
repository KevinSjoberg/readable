import API from '../utils/api';

export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';

const fetchCategoriesSuccess = categories => ({
  type: FETCH_CATEGORIES_SUCCESS,
  categories,
});

const fetchCategoriesFailure = error => ({
  type: FETCH_CATEGORIES_FAILURE,
  error,
});

export const fetchCategories = () => (dispatch) => {
  dispatch({ type: FETCH_CATEGORIES_REQUEST });

  API
    .fetchCategories()
    .then(response => response.json())
    .then(json => dispatch(fetchCategoriesSuccess(json.categories)))
    .catch(error => dispatch(fetchCategoriesFailure(error)));
};

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

const fetchPostsSuccess = posts => ({
  type: FETCH_POSTS_SUCCESS,
  posts,
});

const fetchPostsFailure = error => ({
  type: FETCH_POSTS_FAILURE,
  error,
});

export const fetchPosts = category => (dispatch) => {
  dispatch({ type: FETCH_POSTS_REQUEST });

  API
    .fetchPosts(category)
    .then(response => response.json())
    .then(json => dispatch(fetchPostsSuccess(json)))
    .catch(error => dispatch(fetchPostsFailure(error)));
};

export const FETCH_POST_REQUEST = 'FETCH_POST_REQUEST';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE';

const fetchPostSuccess = post => ({
  type: FETCH_POST_SUCCESS,
  post,
});

const fetchPostFailure = error => ({
  type: FETCH_POST_FAILURE,
  error,
});

export const fetchPost = id => (dispatch) => {
  dispatch({ type: FETCH_POST_REQUEST });

  API
    .fetchPost(id)
    .then(response => response.json())
    .then(json => dispatch(fetchPostSuccess(json)))
    .catch(error => dispatch(fetchPostFailure(error)));
};
