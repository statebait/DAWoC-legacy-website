$(document).ready(function() {
  $('.parallax').parallax();
});

$(".button-collapse").sideNav({
  menuWidth: 150,
  draggable: true,
});

var options = [{
    selector: '#why',
    offset: 220,
    callback: function(el) {
      Materialize.toast("Why?", 1500);
    }
  },
  {
    selector: '#about',
    offset: 220,
    callback: function(el) {
      Materialize.toast("About!", 1500);
    }
  },
  {
    selector: '#timeline',
    offset: 210,
    callback: function(el) {
      Materialize.toast("The Timeline!", 1500);
    }
  },

];
Materialize.scrollFire(options);