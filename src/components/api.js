const url = `https://jakub-piskorz.herokuapp.com`;

const API = {
  list: function () {
    return fetch(`${url}/todos`).then((res) => res.json());
  },
  row: function (id) {
    return fetch(`${url}/todos/${id}`).then((res) => res.json());
  },
  add: function (text1, text2) {
    return fetch(`${url}/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ line1: text1, line2: text2 }),
    }).then((res) => res.json());
  },
  delete: function (id) {
    return fetch(`${url}/todos/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());
  },
  reset: function () {
    return fetch(`${url}/reset`, {
      method: "POST",
    }).then((res) => res.json());
  },
};

export default API;
