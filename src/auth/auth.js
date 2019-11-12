import NodaAppApi from '../api/noda_app_api';

export default class Auth {
  login = async (params) => {
    const login = new NodaAppApi('/auth/login')
    const response = await login.post(params);

    const json = await response.json();
    if (response.ok) {
      this.setToken(json.token);
      return Promise.resolve('successful signed in');
    }

    return Promise.reject(json);
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
