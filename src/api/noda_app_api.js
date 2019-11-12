require('dotenv').config()

export default class NodaAppApi {
  constructor(url){
    this.domain = process.env.REACT_APP_API_DOMAIN;
    this.url = url;
  }

  get = (req = {}) => {
    let req_params = new URLSearchParams(req.params).toString()
    if (!!req_params) req_params = '?'.concat(req_params)

    return fetch(
      `${this.domain}${this.url}${req_params}`,
      {
        headers: Object.assign(req.headers || {}, { 'Content-Type': 'application/json' })
      }
    )
  }

  post = (req = {}) => fetch(
    `${this.domain}${this.url}`,
    {
      method: 'POST',
      body: JSON.stringify(req.body),
      headers: Object.assign(req.headers || {}, { 'Content-Type': 'application/json' })
    }
  )
}
