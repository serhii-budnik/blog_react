import Auth from '../auth/auth';
import NodaAppApi from '../api/noda_app_api';

export default class User {
  constructor(obj) {
    this.id = obj._id
    this.login = obj.login;
    this.createdAt = obj.created_at;
    this.updatedAt = obj.updatedAt;
  }

  static async getUser(id){
    return fetch(
      `https://reqres.in/api/users/${id}`
    ).then(
      (response) => response.json()).then((json) => json
    ).catch((error) => error.status);
  }

  static async getCurrentUser() {
    const auth = new Auth();
    const token = auth.getToken();
    const api = new NodaAppApi('/auth/profile');

    const response = await api.get({}, {'authorization': token});

    return response.ok ? await response.json() : null
  }
}
