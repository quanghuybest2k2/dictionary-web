import { get_api, post_api, delete_api } from "./Methods";
import config from "../config";

export async function getWordUnApproved() {
  return get_api(`${config.API_URL}/get-unapproved`);
}
export async function getWordById(id = 0) {
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
