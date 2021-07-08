import axios from "axios";

//if (!!sessionStorage.getItem("LaxmiWebToken")) {
//  axios.defaults.headers.common["Authorization"] = `Bearer ${sessionStorage.getItem("LaxmiWebToken")}`;
//}

const Token = () => sessionStorage.getItem("LaxmiWebToken")

export function getWithExpiry(key: string) {
  const itemStr = sessionStorage.getItem(key) ? sessionStorage.getItem(key) : null;
  // if the item doesn't exist, return null
  if (!itemStr) {
    return null
  }
  const item: any = JSON.parse(itemStr)
  const now = new Date()
  // compare the expiry time of the item with the current time
  if (now.getTime() > item.expiry) {
    // If the item is expired, delete the item from storage
    // and return null
    sessionStorage.removeItem(key)
    return null
  }
  return item.value
}


export const API = axios.create({
  baseURL: "http://api.remittance.ausnep.com:8080/remittance/v1/api",
  headers: {
    Authorization: `Bearer ${getWithExpiry("ABC")}`
  }
});

export const polipayApi = axios.create({
  headers: {
    "Content-Type": "application/json",
    Authorization: "Basic U1M2MTAwMDQ4NDp0WDlebDVFUzh5ZGYz",
  },
});
