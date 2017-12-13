var slider = $('#slider'); // Almacenar slider en una variable
// Almacenar botones
var next = $('#btn-next');
var prev = $('#btn-prev');

// Mover ultima imagen al primer lugar
$('#slider section:last').insertBefore('#slider section:first');

// Mostrar la primera imagen con un margen del 100%
slider.css('margin-left', '-'+100+'%');

// Funciones
function moveRight() {
    slider.animate({
        "margin-left":'-'+200+'%'} ,700, 
        function(){
            $('#slider section:first').insertAfter('#slider section:last');
            slider.css('margin-left', '-'+100+'%');
        });
}

function moveLeft() {
  slider.animate({
      "margin-left":0} ,700, 
      function(){
          $('#slider section:last').insertBefore('#slider section:first');
          slider.css('margin-left', '-'+100+'%');
      });
}

next.on('click', function() {
    moveRight();
});

prev.on('click', function() {
  moveLeft();
});
function autoplay() {
  interval = setInterval(function(){
    moveRight();
  }, 5000);
}

autoplay();