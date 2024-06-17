document.getElementById('color-button').addEventListener('click', function () {
  let headers = document.querySelectorAll('h2');
  const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink'];

  headers.forEach(function (header) {
    let currentColor = header.style.color;
    let newColor = colors[Math.floor(Math.random() * colors.length)];
    while (newColor === currentColor) {
      newColor = colors[Math.floor(Math.random() * colors.length)];
    }
    header.style.color = newColor;
  });
});

const paragraph = document.getElementById('random-p');
document.getElementById('p-button').addEventListener('click', function () {
  const p = document.querySelectorAll('p');
  p.forEach(function (paragraph) {
    paragraph.style.fontSize = Math.floor(Math.random() * 15) + 10 + 'px';
  });
});
