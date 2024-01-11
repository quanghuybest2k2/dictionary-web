import { get_api } from "./Methods";

import config from ".././config";

export async function getSpecialize() {
  return get_api(`${config.API_URL}/get-all-specialization`);
}
