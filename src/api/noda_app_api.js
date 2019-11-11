require('dotenv').config()

export default class NodaAppApi {
  constructor(){
    this.domain = process.env.REACT_APP_API_DOMAIN;
  }

  get = async (url) => {
    let response = fetch(
      `${this.domain}/api/login`,
      {
        method: 'POST',
        body: JSON.stringify(params),
        headers: new Headers({ 'content-type': 'application/json', })
      }
    )
  }

  post(url){

  }
}
