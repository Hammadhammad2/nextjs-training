import instance from "../utils/axios";

export function fetchUsers(query) {
  return instance.get(`/users?q=${query}`);
}

export function createUser(data) {
  return instance.post("/users", data);
}

export function fetchUserById(id) {
  return instance.get(`/users/${id}`);
}

export function editUser(id, data) {
  return instance.put(`/users/${id}`, data);
}

export function deleteUser(id) {
  return instance.delete(`/users/${id}`);
}
