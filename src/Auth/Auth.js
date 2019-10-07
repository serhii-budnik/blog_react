import axios from 'axios';

class Auth {
  login = (params) => {
    axios.post(
      'https://reqres.in/api/login', params
    ).then((response) => {
      console.log(response);

      this.setToken(response.data.token);
    }).catch((error) => {
      console.log(error)
    });
  }

  logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  }

  setToken = (token) => {
    localStorage.setItem('token', token);
  }

  getToken = () => {
    return localStorage.getItem('token');
  }
}

export default Auth;