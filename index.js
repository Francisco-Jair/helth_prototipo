const confirmarAlert = function () {
  addAlert = document.getElementById("alertAdd");
  addAlert.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
    Check-up agendado!
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`;
};
