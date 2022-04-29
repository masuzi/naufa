import * as cookie from 'cookie'

export async function handle({ event, resolve }) {
  const { request, locals } = event
  const cookies = cookie.parse(request.headers.get('cookie') || '')
  event.locals.handphone = cookies.handphone
  event.locals.full_name = cookies.full_name
  event.locals.user = cookies.user
  event.locals.token = cookies.token
  event.locals.authenticated = !!cookies.token

  const response = await resolve(event)

  return response
}

/** @type {import('@sveltejs/kit').GetSession} */
export function getSession(event) {
  return {
    authenticated: event.locals.authenticated,
    token: event.locals.token,
    user: event.locals.user,
    handphone: event.locals.handphone,
    full_name: event.locals.full_name,
  }
}
