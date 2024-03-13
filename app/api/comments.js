"use server";
import instance from "../utils/axios";

export async function fetchCommentsByPostId(postId) {
  const response = await instance.get(`/comments?postId=${postId}`);
  return response.data;
}
