"use server";
import instance from "../utils/axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
const ITEMS_PER_PAGE = 10;

export async function fetchUsers(query) {
  try {
    const response = await instance.get(`/users?q=${query}`);
    return response.data;
  } catch (error) {
    return { message: "Failed to fetch users" };
  }
}

export async function fetchUsersPages() {
  try {
    const response = await instance.get("/users");
    return Math.ceil(response.data.length / ITEMS_PER_PAGE);
  } catch (error) {
    return { message: "Failed to fetch users pages" };
  }
}

export async function createUser(data) {
  try {
    await instance.post("/users", data);
  } catch (error) {
    return { message: "Failed to create user" };
  }
  revalidatePath("/users");
  redirect("/users");
}

export async function fetchUserById(id) {
  try {
    const response = await instance.get(`/users/${id}`);
    return response?.data;
  } catch (error) {
    return { message: "Failed to fetch user" };
  }
}

export async function editUser(id, data) {
  try {
    await instance.put(`/users/${id}`, data);
  } catch (error) {
    return { message: "Failed to edit user" };
  }
  // revalidatePath("/users");
  redirect("/users");
}

export async function deleteUser(id) {
  try {
    await instance.delete(`/users/${id}`);

    revalidatePath("/users");
    return { message: "Deleted User." };
  } catch (error) {
    return { message: "Failed to delete user" };
  }
}
