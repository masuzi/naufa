// import fetch from 'isomorphic-fetch'
import { handleSession } from './auth'
// import { login } from './graphql/login'

const url = import.meta.env.VITE_GRAPHQL_URL,
  query = `mutation login($handphone:String!, $otp: String!) {
  login(
    userInput: { handphone:$handphone, otp: $otp}
  ) {
    token
    user {
      id
      handphone
    }
  }
}`

export const api = (method, data, token) => {
  const noBodyData = method === 'GET' || method === 'DELETE'
  return fetch(`${url}`, {
    method: `${method}`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    ...(!noBodyData ? { body: JSON.stringify(data) } : null)
  })
    .then(async res => {
      await handleSession(res)
      return await res.json()
    })
    .catch(err => {
      return {
        status: 502,
        message: 'Oops! Something is wrong. Please try later.'
      }
    })
}

export const get_login = (handphone,otp,token) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    body: JSON.stringify({
      query,
      variables: { handphone,otp}
    })
  })
    .then(async res => {
      await handleSession(res)
      return await res.json()
    })
    .catch(err => {
      return {
        status: 502,
        message: 'Oops! Something is wrong. Please try later.'
      }
    })
}

// formData body type
export const apiForm = (method, data, token) => {
  return fetch(`${url}`, {
    method: `${method}`,
    headers: {
      Accept: 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    body: data
  })
    .then(res => {
      return res.json()
    })
    .catch(err => {
      return {
        status: 502,
        message: 'Oops! Something is wrong. Please try later.'
      }
    })
}
