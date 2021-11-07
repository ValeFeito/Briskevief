

  // sidebar toggle

window.onload = iniciar;
const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', function () {
  console.log('clik')
  document.getElementById('sidebar').classList.toggle('active');
  console.log(document.getElementById('sidebar'))
});

// validación formulario
function iniciar() {
  document.getElementById('enviar').addEventListener('click', validate, false);
}

function validarTel() {
    var elemento = document.getElementById('tel');
      if (isNaN(elemento.value)){
        alert('Formato incorrecto, en el campo Teléfono debe ingresar números');
        return false
      }
      return true;
    }

    function validate(e){
      if(validarTel() && confirm('Gracias por elegirnos, le responderemos a la brevedad.')){
        return true;
      } else {
        e.preventDefault();
        return false;
      }
    }

  
    var myCarousel = document.querySelector('#myCarousel')
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 2000,
      wrap: false
    })