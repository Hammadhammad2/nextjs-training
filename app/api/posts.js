import instance from "../utils/axios";
const ITEMS_PER_PAGE = 4;

export function fetchFilteredPostsAndTotalCount(userId, currentPage, query) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const params = {
    params: {
      userId: userId,
      _start: offset,
      _limit: ITEMS_PER_PAGE,
      q: query,
    },
  };

  const paginatedPostsPromise = instance.get("/posts", params);
  const allPostsPromise = instance.get("/posts", {
    params: { userId: userId, q: query },
  });

  return Promise.all([paginatedPostsPromise, allPostsPromise]);
}

export function fetchPostById(id) {
  return instance.get(`/posts/${id}`);
}

export function createPost(data) {
  return instance.post("/posts", data);
}

export function editPost(id, data) {
  return instance.put(`/posts/${id}`, data);
}

export function deletePost(id) {
  return instance.delete(`/posts/${id}`);
}
