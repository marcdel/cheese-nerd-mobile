export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const PHOTO_ADDED = 'PHOTO_ADDED'
export const DETAILS_ADDED = 'DETAILS_ADDED'

export function login(credentials) {
  return {
    type: LOGIN,
    credentials: credentials,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function photoAdded(photo) {
  return {
    type: PHOTO_ADDED,
    photo: photo,
  };
}

export function detailsAdded(name, email) {
  return {
    type: DETAILS_ADDED,
    name: name,
    email: email,
  };
}
