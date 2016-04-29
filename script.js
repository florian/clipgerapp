$(document).ready(function () {
  $('.images').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    },
    image: {
      titleSrc: function(item) {
        return item.el.attr('title')
      }
    }
  })
})
