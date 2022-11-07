import { url } from "./constants";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res}`);
}

export async function getIngredientsApi() {
  const res = await fetch(`${url}ingredients`);
  return checkResponse(res);
}

export async function setOrderApi(ingredients) {
  const res = await fetch(`${url}orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ingredients: ingredients,
    }),
  });
  return checkResponse(res);
}

export async function setEmailApi() {
  const res = await fetch(`${url}password-reset`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: "",
    }),
  });
  return checkResponse(res);
}

export async function setResetPassApi() {
  const res = await fetch(`${url}password-reset/reset`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      password: "",
      token: "",
    }),
  });
  return checkResponse(res);
}

export async function loginApi({ email, password }) {
  const res = await fetch(`${url}auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  return checkResponse(res);
}

export async function registerApi({ email, password, name }) {
  const res = await fetch(`${url}auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: password,
      name: name,
    }),
  });
  return checkResponse(res);
}

export async function logoutApi() {
  const res = await fetch(`${url}auth/logout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: "",
      password: "",
      name: "",
    }),
  });
  return checkResponse(res);
}

export async function tokenApi() {
  const res = await fetch(`${url}auth/token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: "",
      password: "",
      name: "",
    }),
  });
  return checkResponse(res);
}
