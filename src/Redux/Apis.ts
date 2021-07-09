import axios from "axios";

//if (!!sessionStorage.getItem("LaxmiWebToken")) {
//  axios.defaults.headers.common["Authorization"] = `Bearer ${sessionStorage.getItem("LaxmiWebToken")}`;
//}


//export function getWithExpiry(key: string) {
//  const itemStr = sessionStorage.getItem(key) ? sessionStorage.getItem(key) : null;
//  // if the item doesn't exist, return null
//  if (!itemStr) {
//    return null
//  }
//  const item: any = JSON.parse(itemStr)
//  const now = new Date()
//  // compare the expiry time of the item with the current time
//  if (now.getTime() > item.expiry) {
//    // If the item is expired, delete the item from storage
//    // and return null
//    sessionStorage.removeItem(key)
//    return null
//  }
//  return item.value
//}


export const API = axios.create({
  baseURL: "https://api.chec.io",
  headers: {
    "X-Authorization": " sk_test_298228113af71e88a97ba5f83cf9b5a2edf0bb2bdcf47"
  }
});

