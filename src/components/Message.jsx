import swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export function success(message) {
  swal.fire({
    title: 'Success',
    text: message,
    type: 'success'
  });
}

export function info(message) {
  swal.fire({
    title: 'Info',
    text: message,
    type: 'info'
  });
}

export function warning(message) {
  swal.fire({
    title: 'Warning',
    text: message,
    type: 'warning'
  });
}

export function error(message) {
  swal.fire({
    title: 'Oops!',
    text: message,
    type: 'error'
  });
}

export function messages(
  title = null,
  text = null,
  type = null,
  refresh = null
) {
  swal
    .fire({
      title: title,
      text: text,
      type: type
    })
    .then(function() {
      if (refresh) window.location.reload();
    });
}

export function deleteData(id, confirmDelete) {
  let result = false;
  swal
    .fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!'
    })
    .then(function(confirm) {
      confirmDelete(id);
    });
}

export function confirmation(id, confirmAction, dismissAction) {
  let result = false;
  swal
    .fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!'
    })
    .then(
      function(confirm) {
        confirmAction(id);
      },
      function(dismiss) {
        dismissAction();
      }
    );
}
