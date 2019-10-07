import Auth from '../Auth/Auth';

class User {
  constructor(obj) {
    this.id = obj.id
    this.first_name = obj.first_name;
    this.last_name = obj.last_name;
    this.avatar = obj.avatar;
  }

  static async getUser(id){
    return fetch(
      `https://reqres.in/api/users/${id}`
    ).then(
      (response) => response.json()).then((json) => json
    ).catch((error) => error.status);
  }

  static async getCurrentUser() {
    let auth = new Auth();
    let token = auth.getToken();
    console.log('tojen', token);
    if (!token) return Promise.reject('User not found');

    return this.getUser(2);
  }
}

export default User;