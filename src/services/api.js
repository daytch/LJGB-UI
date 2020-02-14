import axios from 'axios';
import swals from 'sweetalert2';
// import { actionLogout } from './../routes/Login/action/Login';

export function POST(url, body, header) {
  return axios
    .post(url, body, header)
    .then(res => {
      if (res.status === 201 || res.status === 200) {
        return res.data;
      } else if (res.status === 401) {
        return res.data;
      }
      // else {
      //     res.data
      // }
    })
    .catch(err => {
      if (err.response.status === 401) {
        swals({
          title: 'Info',
          text: err.response.statusText,
          type: 'info',
          allowOutsideClick: false,
          confirmButtonText: 'Ya'
        }).then(function(confirm) {
          // actionLogout()
        });
      }
      return err;
    });
}

export function GET(url, header) {
  return axios
    .get(url, header)
    .then(res => {
      if (res.status === 200) {
        return res.data;
      } else if (res.status === 401) {
        return res.data;
      }
      // else {
      //     res.data
      // }
    })
    .catch(err => {
      if (err.response.status === 401) {
        swals({
          title: 'Info',
          text: err.response.statusText,
          type: 'info',
          allowOutsideClick: false,
          confirmButtonText: 'Ya'
        }).then(function(confirm) {
          // actionLogout()
        });
      }
      return err;
    });
}

export function PUT(url, body, header) {
  return axios
    .put(url, body, header)
    .then(res => {
      if (res.status === 200) {
        return res.data;
      } else if (res.status === 401) {
        return res.data;
      }
      // else {
      //     res.data
      // }
    })
    .catch(err => {
      if (err.response.status === 401) {
        swals({
          title: 'Info',
          text: err.response.statusText,
          type: 'info',
          allowOutsideClick: false,
          confirmButtonText: 'Ya'
        }).then(function(confirm) {
          // actionLogout()
        });
      }
      return err;
    });
}

export function DELETE(url, header) {
  return axios
    .delete(url, header)
    .then(res => {
      if (res.status === 200) {
        return res.data;
      } else if (res.status === 401) {
        return res.data;
      }
      // else {
      //     res.data
      // }
    })
    .catch(err => {
      if (err.response.status === 401) {
        swals({
          title: 'Info',
          text: err.response.statusText,
          type: 'info',
          allowOutsideClick: false,
          confirmButtonText: 'Ya'
        }).then(function(confirm) {
          // actionLogout()
        });
      }
      return err;
    });
}
