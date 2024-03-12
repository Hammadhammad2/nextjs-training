"use server";
import instance from "../utils/axios";

export async function fetchCommentsByPostId(postId) {
  try {
    const response = await instance.get(`/comments?postId=${postId}`);

    return response.data;
  } catch (error) {
    return { message: "Failed to fetch comments" };
  }
}
