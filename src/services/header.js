function getToken() {
  const token = localStorage.getItem('Token');
  if (token === undefined || token === '') {
    window.URL = 'views/login/index.html';
  } else {
    return 'Bearer ' + token;
  }
}

export function getHeader() {
  return {
    // 'Authorization': getToken(),
    'Content-Type': 'application/json'
  };
}

export const master = {
  getHeader
};
