document.addEventListener("DOMContentLoaded", function() {
  var welcomeBox = document.getElementById("welcome-box");
  
  // Exibir a caixa de boas-vindas
  welcomeBox.classList.add("show");
  
  // Esconder a caixa após 3 segundos
  setTimeout(function() {
    welcomeBox.classList.remove("show");
  }, 3000);
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  
  console.log('Nome: ' + name);
  console.log('Email: ' + email);
  console.log('Mensagem: ' + message);
  

  var formData = {
    name: name,
    email: email,
    message: message
  };

  var formDataArray = JSON.parse(localStorage.getItem('formDataArray')) || [];
  formDataArray.push(formData);

  localStorage.setItem('formDataArray', JSON.stringify(formDataArray));

  
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
});

window.addEventListener('scroll', function() {
  var btnBackToTop = document.getElementById('btn-back-to-top');

  if (window.pageYOffset > 300) {
    btnBackToTop.style.display = 'block';
  } else {
    btnBackToTop.style.display = 'none';
  }
});

document.getElementById('btn-back-to-top').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
