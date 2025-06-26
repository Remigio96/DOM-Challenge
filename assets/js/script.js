// Desafío 1: Imagen con borde
document.querySelector('#imagen-toggle').addEventListener('click', function () {
  if (this.style.border) {
    this.style.border = '';
  } else {
    this.style.border = '2px solid red';
  }
});

// Desafío 2: Verificar stickers
document.querySelector('#verificar-stickers').addEventListener('click', function () {
  const s1 = Number(document.querySelector('#sticker1').value);
  const s2 = Number(document.querySelector('#sticker2').value);
  const s3 = Number(document.querySelector('#sticker3').value);
  const total = s1 + s2 + s3;
  const resultado = document.querySelector('#resultado-stickers');

  if (isNaN(s1) || isNaN(s2) || isNaN(s3) || s1 < 0 || s2 < 0 || s3 < 0) {
    resultado.textContent = 'Por favor, ingresa valores válidos.';
    resultado.style.color = 'red';
  } else if (total <= 10) {
    resultado.textContent = 'Llevas ' + total + ' stickers';
    resultado.style.color = 'green';
  } else {
    resultado.textContent = 'Llevas demasiados stickers';
    resultado.style.color = 'red';
  }
});

// Desafío 3: Verificar password
document.querySelector('#verificar-password').addEventListener('click', function () {
  const d1 = document.querySelector('#digito1').value;
  const d2 = document.querySelector('#digito2').value;
  const d3 = document.querySelector('#digito3').value;
  const password = d1 + d2 + d3;
  const resultado = document.querySelector('#resultado-password');

  if (password === '911') {
    resultado.textContent = 'Password 1 correcto';
    resultado.style.color = 'green';
  } else if (password === '714') {
    resultado.textContent = 'Password 2 correcto';
    resultado.style.color = 'green';
  } else {
    resultado.textContent = 'Password incorrecto';
    resultado.style.color = 'red';
  }
});

// <option> del 1 al 9
for (let i = 1; i <= 9; i++) {
  ['#digito1', '#digito2', '#digito3'].forEach(id => {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    document.querySelector(id).appendChild(option);
  });
}
