require('dotenv').config()

export default class NodaAppApi {
  constructor(url){
    this.domain = process.env.REACT_APP_API_DOMAIN;
    this.url = url;
  }

  get = (params, headers = {}) => fetch(
    `${this.domain}${this.url}`,
    {
      qs: params,
      headers: Object.assign(headers, { 'Content-Type': 'application/json' })
    }
  )

  post = (params, headers = {}) => fetch(
    `${this.domain}${this.url}`,
    {
      method: 'POST',
      body: JSON.stringify(params),
      headers: Object.assign(headers, { 'Content-Type': 'application/json' })
    }
  )
}
