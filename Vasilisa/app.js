
const furnit = (name, dimensions, prace, information, color, image) => ({
  name,
  dimensions,
  prace,
  information,
  color,
  image
})

const furniture = [
  furnit('Бруно', '1100х1452х2064 ', '13 530 - 15 570', 'с ортопедическим основанием 1,2м 1,4м 1,6м 1,8м', ' Дуб, атланта, венге', '../img/bed/bruno.jpg'),
  furnit('Венера', '2000-1400 ', '', '', '', '../img/bed/Venera.png'),
  furnit('Фортуна', '2000-1400 ', '', '', '', '../img/bed/fortuna.jpg'),
  furnit('Селена', '2000-1400 ', '', '', '', '../img/bed/selena.jpg'),
  furnit('Сицилия', '1600-2000 ', '32 050 - 113 500', '', '', '../img/bed/sicilia.jpg'),
  furnit('Капри', ' 1600-2000 ', '16 500 ', '', '', '../img/bed/kapry.jpg'),
]

new Vue({
  el: '#template_product',
  data: {
    furniture: furniture,
    furnit: furniture[0],
  }
  
for(var number = 0; number < h.length; number++){
  h[number].onclick = (function(index) {
      return function(count){
      };
  })(i);
}

Vue.filter('currency', function (value) {
  return '$' + value.toFixed(2);
});

var demo = new Vue({
  el: '#main',
  data: {};
  methods: {
    toggleActive: function(s){
          s.active = !s.active;
    },
    total: function(){

        var total = 0;

        this.services.forEach(function(s){
          if (s.active){
            total+= s.price;
          }
        });

       return total;
      }
  }
});