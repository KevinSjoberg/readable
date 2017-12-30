import { combineReducers } from 'redux';

import categories, * as fromCategories from './categories';
import comments, * as fromComments from './comments';
import posts, * as fromPosts from './posts';

export default combineReducers({
  categories,
  comments,
  posts,
});

export const getCategories = state => fromCategories.getCategories(state.categories);
export const getComment = (state, id) => fromComments.getComment(state.comments, id);
export const getComments = state => fromComments.getComments(state.comments);
export const getIsFetchingPosts = state => fromPosts.getIsFetching(state.posts);
export const getPost = (state, id) => fromPosts.getPost(state.posts, id);
export const getPosts = state => fromPosts.getPosts(state.posts);
export const getPostSortFilter = state => fromPosts.getPostSortFilter(state.posts);
export const getSortedPosts = state => fromPosts.getSortedPosts(state.posts);
