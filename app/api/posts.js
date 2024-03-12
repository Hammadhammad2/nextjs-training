"use server";
import instance from "../utils/axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
const ITEMS_PER_PAGE = 4;

export async function fetchFilteredPosts(userId, currentPage, query) {
  try {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    const response = await instance.get(
      `/posts?userId=${userId}&_start=${offset}&_limit=${ITEMS_PER_PAGE}&q=${query}`
    );

    return response.data;
  } catch (error) {
    return { message: "Failed to fetch posts" };
  }
}

export async function fetchPostById(id) {
  try {
    const response = await instance.get(`/posts/${id}`);
    return response?.data;
  } catch (error) {
    return { message: "Failed to fetch post" };
  }
}

export async function createPost(data, userId) {
  try {
    await instance.post("/posts", { ...data, userId });
  } catch (error) {
    return { message: "Failed to create post" };
  }
  revalidatePath(`/users/posts/${userId}`);
  redirect(`/users/posts/${userId}`);
}

export async function editPost(id, data, userId) {
  try {
    await instance.put(`/posts/${id}`, { ...data, userId });
  } catch (error) {
    return { message: "Failed to edit post" };
  }
  revalidatePath(`/users/posts/${userId}`);
  redirect(`/users/posts/${userId}`);
}

export async function deletePost(id, userId) {
  try {
    await instance.delete(`/posts/${id}`);
    revalidatePath(`/users/posts/${userId}`);
    showToastSuccess("Deleted post.");

    return { message: "Deleted post." };
  } catch (error) {
    return { message: "Failed to delete post" };
  }
}

export async function fetchPostsPages(userId, query) {
  try {
    const response = await instance.get(`/posts?userId=${userId}&q=${query}`);

    return Math.ceil(response.data.length / ITEMS_PER_PAGE);
  } catch (error) {
    return { message: "Failed to fetch post pages" };
  }
}
