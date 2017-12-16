import API from '../utils/API';

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
