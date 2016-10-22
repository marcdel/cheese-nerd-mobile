export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const PHOTO_ADDED = 'PHOTO_ADDED'

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
