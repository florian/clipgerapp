$(document).ready(main)

function main () {
  initClipgerExplination()
  initMagnificPopup()
  initShowMoreImages()
}

function initClipgerExplination () {
  $('h1').on('mouseover mouseout', function () {
    $('header').toggleClass('show-explination')
  })
}

function initMagnificPopup () {
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
}

function initShowMoreImages () {
  $('.images ul').addClass('limited')

  $('.show-all-images').show().click(function () {
    $('.images ul').removeClass('limited')
    $(this).hide()
    $('.images')[0].scrollIntoView()
  })
}
