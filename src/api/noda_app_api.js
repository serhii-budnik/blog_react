require('dotenv').config()

export default class NodaAppApi {
  constructor(url){
    this.domain = process.env.REACT_APP_API_DOMAIN;
    this.url = url;
  }

  get = ({ params, headers = {} }) => {
    let req_params = new URLSearchParams(params).toString()
    if (!!req_params) req_params = '?'.concat(req_params)

    return fetch(
      `${this.domain}${this.url}${req_params}`,
      {
        headers: Object.assign(headers, { 'Content-Type': 'application/json' })
      }
    )
  }

  post = ({body, headers = {}}) => fetch(
    `${this.domain}${this.url}`,
    {
      method: 'POST',
      body: JSON.stringify(body),
      headers: Object.assign(headers, { 'Content-Type': 'application/json' })
    }
  )
}
