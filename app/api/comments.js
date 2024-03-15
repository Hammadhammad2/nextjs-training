import instance from "../utils/axios";

export function fetchCommentsByPostId(postId) {
  return instance.get(`/comments?postId=${postId}`);
}
