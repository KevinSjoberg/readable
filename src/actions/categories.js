import API from '../api';

export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';
export const fetchCategories = () => (dispatch) => {
  dispatch({ type: FETCH_CATEGORIES_REQUEST });

  return API
    .fetchCategories()
    .then(response => dispatch({ type: FETCH_CATEGORIES_SUCCESS, response }))
    .catch(errorMessage => dispatch({ type: FETCH_CATEGORIES_FAILURE, errorMessage }));
};
