const furnit = (name, dimensions, prace, information, color, image) => ({ name, dimensions, prace, information, color, image })

const furniture = [
  furnit('Бруно', '1100х1452х2064 ', '13 530 - 15 570', 'темный', 'с ортопедическим основанием 1,2м 1,4м 1,6м 1,8м', '../Vasilisa/img/bed/bruno.jpg'),
  furnit('Венера', '2000-1400 ', '', '', '', '../Vasilisa/img/bed/Venera.png'),
  furnit('Фортуна', '2000-1400 ', '', '', '', '../Vasilisa/img/bed/fortuna.jpg'),
  furnit('Селена', '2000-1400 ', '', '', '', '../Vasilisa/img/bed/selena.jpg'),
  furnit('Сицилия', '1600-2000 ', '32 050 - 113 500', '', '', '../Vasilisa/img/bed/sicilia.jpg'),
  furnit('Капри', ' 1600-2000 ', '16 500 ', '', '', '../Vasilisa/img/bed/kapry.jpg')

]


new Vue({
    el: '#template_product',
    data: {
      furniture: furniture,
      furnit: furniture[0],
    }
    
})