export const PAGE = "page";
export const QUERY = "query";
export const SEARCH = "search";
export const SOMETHING_WENT_WRONG = "Something went wrong!";
export const TRY_AGAIN = "Try again";
export const CANCEL = "Cancel";
//urls
export const urls = {
  USERS: "/users",
  USER_EDIT: (id) => `/users/${id}/edit`,
  USER_CREATE: "/users/create",
  USER_POSTS: (id) => `/users/posts/${id}`,
  USER_POSTS_EDIT: (userId, postId) => `/users/posts/${userId}/${postId}/edit`,
  USER_POSTS_CREATE: (userId) => `/users/posts/${userId}/create`,
};
