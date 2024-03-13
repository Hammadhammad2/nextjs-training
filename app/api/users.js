"use server";
import instance from "../utils/axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function fetchUsers(query) {
  const response = await instance.get(`/users?q=${query}`);
  return response.data;
}

export async function createUser(data) {
  await instance.post("/users", data);
  revalidatePath("/users");
  redirect("/users");
}

export async function fetchUserById(id) {
  const response = await instance.get(`/users/${id}`);
  return response?.data;
}

export async function editUser(id, data) {
  await instance.put(`/users/${id}`, data);
  revalidatePath("/users");
  redirect("/users");
}

export async function deleteUser(id) {
  await instance.delete(`/users/${id}`);
  revalidatePath("/users");
}
