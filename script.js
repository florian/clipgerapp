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

  $('.gallery-link').click(function () {
    var index = Number($(this).attr('data-i')) || 0
    $('.images').magnificPopup('open', index)
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
