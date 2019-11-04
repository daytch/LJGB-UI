import swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export function success() {
  swal({
    title: 'Horeee!',
    text: 'transaction was succeed',
    type: 'success'
  });
}

export function error() {
  swal({
    title: 'Oops!',
    text: 'There is something wrong, Please contact IT Care',
    type: 'error'
  });
}

export function messages(
  title = null,
  text = null,
  type = null,
  refresh = null
) {
  swal({
    title: title,
    text: text,
    type: type
  }).then(function() {
    if (refresh) window.location.reload();
  });
}

export function deleteData(id, confirmDelete) {
  let result = false;
  swal({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    type: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!'
  }).then(function(confirm) {
    confirmDelete(id);
  });
}

export function confirmation(id, confirmAction, dismissAction) {
  let result = false;
  swal({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    type: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!'
  }).then(
    function(confirm) {
      confirmAction(id);
    },
    function(dismiss) {
      dismissAction();
    }
  );
}
