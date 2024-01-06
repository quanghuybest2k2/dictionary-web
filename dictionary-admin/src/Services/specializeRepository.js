import { get_api, post_api, delete_api } from "./Methods";

export async function getSpecialize() {
  return get_api(`url`);
}
export async function getSpecializeById(id = 0) {
  if (id > 0) {
    return get_api(`url/${id}`);
  } else {
    return null;
  }
}

export function addOrUpdate(formData) {
  return post_api("url", formData);
}

export async function deleteSpecializeById(id) {
  if (id > 0) {
    return delete_api(`url/${id}`);
  } else {
    return null;
  }
}
