export default class Auth {
  login = async (params) => {
    let response = await fetch(
      'https://reqres.in/api/login',
      {
        method: 'POST',
        body: JSON.stringify(params),
        headers: new Headers({'content-type': 'application/json',})
      }
    )

    if (response.ok) {
      let json = await response.json();
      this.setToken(json.token);
      return Promise.resolve('successful signed in');
    }

    return Promise.reject(response.status);
  }

  logout = () => {
    localStorage.removeItem('token');
  }

  setToken = (token) => {
    localStorage.setItem('token', token);
  }

  getToken = () => {
    return localStorage.getItem('token');
  }
}
