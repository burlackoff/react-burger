import { url } from "./constants";
import { getCookie } from "./cookie";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res}`);
}

function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

export async function getIngredientsApi() {
  return await request(`${url}ingredients`);
}

export async function setOrderApi(ingredients) {
  return await request(`${url}orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookie("token"),
    },
    body: JSON.stringify({
      ingredients: ingredients,
    }),
  });
}

export async function setEmailApi(email) {
  return await request(`${url}password-reset`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
    }),
  });
}

export async function setResetPassApi({ password, token }) {
  return await request(`${url}password-reset/reset`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      password: password,
      token: token,
    }),
  });
}

export async function loginApi({ email, password }) {
  return await request(`${url}auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
}

export async function registerApi({ email, password, name }) {
  return await request(`${url}auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: password,
      name: name,
    }),
  });
}

export async function logoutApi() {
  return await request(`${url}auth/logout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  });
}

export async function refreshTokenApi() {
  return await request(`${url}auth/token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  });
}

export async function getUserApi() {
  return await request(`${url}auth/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookie("token"),
    },
  });
}

export async function updateUserApi({ email, password, name }) {
  return await request(`${url}auth/user`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookie("token"),
    },
    body: JSON.stringify({
      email: email,
      password: password,
      name: name,
    }),
  });
}
