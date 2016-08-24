import fetch from 'isomorphic-fetch';

const SERVER_URL = process.env.SERVER_URL;

export const getJSON = path => {
  return fetch(`${SERVER_URL}${path}`)
    .then(checkStatus);
};

export const postJSON = (path, payload) => {
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(payload)
  };

  return fetch(`${SERVER_URL}${path}`, options)
    .then(checkStatus);
};

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response.json();
  }

  return response.json().then(r => Promise.reject(r));
}
