$(document).ready(function () {
  $('.images').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    },
    mainClass: 'mfp-fade',
    image: {
      titleSrc: function(item) {
        return item.el.attr('title')
      }
    }
  })
})
