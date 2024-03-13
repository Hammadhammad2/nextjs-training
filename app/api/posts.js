"use server";
import instance from "../utils/axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
const ITEMS_PER_PAGE = 4;

export async function fetchFilteredPostsAndTotalCount(
  userId,
  currentPage,
  query
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const [response, allData] = await Promise.all([
    instance.get(
      `/posts?userId=${userId}&_start=${offset}&_limit=${ITEMS_PER_PAGE}&q=${query}`
    ),
    instance.get(`/posts?userId=${userId}&q=${query}`),
  ]);

  return {
    data: response?.data || [],
    totalPages: Math.ceil(allData?.data?.length / ITEMS_PER_PAGE),
  };
}

export async function fetchPostById(id) {
  const response = await instance.get(`/posts/${id}`);
  return response?.data;
}

export async function createPost(data) {
  await instance.post("/posts", data);
  revalidatePath(`/users/posts/${data?.userId}`);
  redirect(`/users/posts/${data?.userId}`);
}

export async function editPost(id, data) {
  await instance.put(`/posts/${id}`, data);

  revalidatePath(`/users/posts/${data?.userId}`);
  redirect(`/users/posts/${data?.userId}`);
}

export async function deletePost(id, userId) {
  await instance.delete(`/posts/${id}`);
  revalidatePath(`/users/posts/${userId}`);
}
