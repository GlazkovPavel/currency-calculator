
class Api {
  constructor() {
    const apiKey = '9f022382f1b1d0ef5868921932c3a786';
    this._url = `http://api.exchangeratesapi.io/v1/latest?access_key=${apiKey}`;

  }

  _getResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  currency() {
    return fetch(`${this._url}`)
      .then(this._getResponse)
  }
}

const api = new Api();
export default api;
