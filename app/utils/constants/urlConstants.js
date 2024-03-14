export const USERS = "/users";
export const USER_EDIT = (id) => `/users/${id}/edit`;
export const USER_CREATE = "/users/create";
export const USER_POSTS = (id) => `/users/posts/${id}`;
export const USER_POSTS_EDIT = (userId, postId) =>
  `/users/posts/${userId}/${postId}/edit`;
export const USER_POSTS_CREATE = (userId) => `/users/posts/${userId}/create`;
export const HOME = "/";
