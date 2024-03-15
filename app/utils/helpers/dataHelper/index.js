import {
  CREATE_POST,
  CREATE_USER,
  EDIT_POST,
  EDIT_USER,
  POSTS,
  USERS,
} from "../../../users/constants";
import {
  USER_CREATE,
  USER_EDIT,
  USER_POSTS,
  USER_POSTS_EDIT,
  USERS as USERS_URL,
} from "../../../utils/constants/urlConstants";

export const createUserFormData = [
  {
    label: "Name",
    name: "name",
    placeholder: "Enter your name",
  },
  {
    label: "Phone",
    name: "phone",
    placeholder: "Enter your phone",
    type: "number",
  },
  {
    label: "Street",
    name: "address.street",
    placeholder: "Enter your street",
  },
  {
    label: "Email",
    name: "email",
    placeholder: "Enter your email",
  },
  {
    label: "City",
    name: "address.city",
    placeholder: "Enter your city",
  },
  {
    label: "Website",
    name: "website",
    placeholder: "Enter your website",
  },
];

export const createPostFormData = [
  {
    label: "Title",
    name: "title",
    placeholder: "Enter your title",
  },
  {
    label: "Body",
    name: "body",
    placeholder: "Enter your body",
  },
];

export const editUserBreadcrumb = (id) => [
  { label: USERS, href: USERS_URL },
  {
    label: EDIT_USER,
    href: USER_EDIT(id),
    active: true,
  },
];

export const createUserBreadcrumb = [
  { label: USERS, href: USERS_URL },
  {
    label: CREATE_USER,
    href: USER_CREATE,
    active: true,
  },
];

export const postsBreadcrumb = (userId) => [
  { label: USERS, href: USERS_URL },
  {
    label: POSTS,
    href: USER_POSTS(userId),
    active: true,
  },
];

export const editPostBreadcrumb = (userId, postId) => [
  { label: USERS, href: USERS_URL },
  {
    label: POSTS,
    href: USER_POSTS(userId),
  },
  {
    label: EDIT_POST,
    href: USER_POSTS_EDIT(userId, postId),
    active: true,
  },
];

export const createPostBreadcrumb = (userId, postId) => [
  { label: USERS, href: USERS_URL },
  {
    label: POSTS,
    href: USER_POSTS(userId),
  },
  {
    label: CREATE_POST,
    href: USER_POSTS_EDIT(userId, postId),
    active: true,
  },
];
