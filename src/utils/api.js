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
      ingredients: ingredients
    })
  });
  return checkResponse(res);
}
