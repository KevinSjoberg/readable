import { schema } from 'normalizr';

export const category = new schema.Entity('categories', {}, { idAttribute: 'path' });
export const categories = new schema.Array(category);
export const comment = new schema.Entity('comments');
export const comments = new schema.Array(comment);
export const post = new schema.Entity('posts');
export const posts = new schema.Array(post);
