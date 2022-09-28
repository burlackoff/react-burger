import {url} from './constants';

function checkResponse(res) {
  if (res.ok) {
    return res.json()
  }
  return Promise.reject(`Ошибка ${res}`)
}

export function getIngredientsApi() {
  return fetch(`${url}ingredients`)
    .then(res=> checkResponse(res))
}

export function setOrderApi(ingredients) {
  return fetch(`${url}orders`, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      'ingredients': ingredients,
    }),
  })
  .then(res=> checkResponse(res))
}