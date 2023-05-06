var action = false,
  clicked = false
var Owl = {
  init: function () {
    Owl.carousel()
  },

  carousel: function () {
    var owl
    var el = document.getElementsByClassName('owl-item')
    var elBtn = document.getElementsByClassName('owlPrev')
    var li = document.querySelector('.progress-reports-bar li') 
    $(document).ready(function () {
      owl = $('.owlCarousel').owlCarousel({
        items: 1,
        center: true,
        nav: false,
        dots: true,
        margin: 10,
        mouseDrag: false,
        touchDrag: false,
        dotsContainer: '.test',
        navText: ['prev', 'next'],
      })

      $('.owlNext').on('click', function () {
        owl.trigger('next.owl.carousel', 500)
      })

      $('.owlPrev').on('click', function () {
        owl.trigger('prev.owl.carousel', 500)
      })

      $('.progress-reports-bar').on('click', 'li', function (e) {
        owl.trigger('to.owl.carousel', [$(this).index(), 300])
        $('.progress-reports-bar li').removeClass('active');
              $(this).addClass('active');
              var index = $('.progress-reports-bar li').index(this);
              $('.progress-reports-bar li').trigger('to.owl.carousel', [index, 300]);
      })

      function hasClass(elem, className) {
        return new RegExp(' ' + className + ' ').test(
          ' ' + elem.className + ' '
        )
      }

      $('.owlNext , .progress-reports-bar , .owlPrev').click(function () {
        app.modalFunction()
        if (hasClass(el[0], 'active')) {
          // $('.backCarousel').hide().removeClass('activeC')
          // $('.frontCarousel').show().addClass('activeC')
          $('.bar1').addClass('active')
          $('.bar2 , .bar3 , .bar4 , .bar5 , .bar6, .bar7, .bar8, .bar9' ).removeClass(
            'active'
          )
          $('#owlSubmit').hide()
         $('.owlNext').show()
        } else if (hasClass(el[1], 'active')) {
          $('.bar1 , .bar2').addClass('active')
          $('.bar3 , .bar4 , .bar5 , .bar6, .bar7, .bar8, .bar9').removeClass(
            'active'
          )
          $('.owlNext').show()
            $('#owlSubmit').hide()
        } else if (hasClass(el[2], 'active')) {
          $('.bar1 , .bar2 , .bar3 ').addClass('active')
          $('.bar4 , .bar5 , .bar6, .bar7, .bar8, .bar9').removeClass('active')
          $('.owlNext').show()
            $('#owlSubmit').hide()
        } else if (hasClass(el[3], 'active')) {
          $('.bar1 , .bar2 , .bar3 , .bar4').addClass('active')
          $('.bar5 , .bar6, .bar7, .bar8, .bar9').removeClass('active')
          $('.owlNext').show()
          $('#owlSubmit').hide()
          $('.frontCarousel').show().addClass('activeC');
          $('.sideCarousel').hide().removeClass('activeC');
          $(".backCarousel").hide().removeClass('activeC');
        
        } else if (hasClass(el[4], 'active')) {
          $('.frontCarousel').hide().removeClass('activeC');
          $('.sideCarousel').hide().removeClass('activeC');
          $(".backCarousel").show().addClass('activeC');
          $('.bar1 , .bar2 , .bar3 , .bar4 , .bar5').addClass('active')
          $('.owlNext').show()
            $('#owlSubmit').hide()

          $('.bar6, .bar7, .bar8, .bar9').removeClass('active')
        } else if (hasClass(el[5], 'active')) {
          $('.frontCarousel').show().addClass('activeC');
          $('.sideCarousel').hide().removeClass('activeC');
          $(".backCarousel").hide().removeClass('activeC');
          $('.bar1 , .bar2 , .bar3 , .bar4, .bar5, .bar6').addClass('active')
          $('.bar7, .bar8, .bar9').removeClass('active')
          $('.owlNext').show()
          $('#owlSubmit').hide()
        }
        else if (hasClass(el[6], 'active')) {
          $('.bar1 , .bar2 , .bar3 , .bar4, .bar5, .bar6, .bar7').addClass(
            'active'
          )
          $('.bar8, .bar9').removeClass('active')
          $('.owlNext').show()
          $('#owlSubmit').hide()
        }
        else if (hasClass(el[7], 'active')) {
          
          $('.bar1 , .bar2 , .bar3 , .bar4, .bar5, .bar6, .bar7, .bar8').addClass(
            'active'
          )
          $('.bar9').removeClass('active')
          $('.owlNext').show()
          $('#owlSubmit').hide()

          $('.backCarousel').hide().removeClass('activeC');
          $('.sideCarousel').hide().removeClass('activeC');
          $(".frontCarousel").show().addClass('activeC');

          if (document.getElementById('sv2').checked) {
            $(
              '.bar1 , .bar2 , .bar3 , .bar4 , .bar5 , .bar6, .bar7,.bar9'
            ).addClass('active')
            $('.owlNext').hide()
            $('#owlSubmit').show()
            $('.progressType8').hide()

            $('.progress-reports-bar').on('click', 'li', function (e) {
              owl.trigger('to.owl.carousel', [$(this).index(), 300])
              
             
            })
            
            $(function () {
              $('.updateF').click(function () {
                if ($(this).is(':checked')) {
                  $('#owlSubmit').hide()
                  $('#owlUpdate').show()
                 
                }
                
                
              })
            })
            $(function () {
              $('.owlPrev').click(function () {
                
                  $('#owlSubmit').hide()
                  $('#owlUpdate').hide()
                  $('.owlNext').show()
                
              })
            })
          }
          else if (document.getElementById('sv1').checked) {
            $(
              '.bar1 , .bar2 , .bar3 , .bar4 ,.bar5, .bar6, .bar7, .bar8'
            ).addClass('active')
            $('.bar9').removeClass('active')
            $('.owlNext').show()
            $('#owlSubmit').hide()
          }

        }
        else if (hasClass(el[8], 'active')) {
          $(
            '.bar1 , .bar2 , .bar3 , .bar4 , .bar5 , .bar6, .bar7, .bar8, .bar9'
          ).addClass('active')
          $('.owlNext').hide()
          $('#owlSubmit').show()
          
          $(function () {
            $('.updateF').click(function () {
              if ($(this).is(':checked')) {
                $('#owlSubmit').hide()
                $('#owlUpdate').show()
              }
            })
          })
          $('.progress-reports-bar').on('click', 'li', function (e) {
          
          $('#owlSubmit').show()
          $('#owlUpdate').hide()
          $('#UpdateC').hide()
          })
        }
      })

      $('#sv2').click(function () {
        $('.owl-item:nth-child(8)').hide()
        $('.progressType8').hide()
        $('.finalSelection:nth-child(9)').hide()
        $('.finalSelection:nth-child(10)').hide()
        $('.cuffstyle').hide()
        $('.progress-reports-bar').on('click', 'li', function (e) {
          owl.trigger('to.owl.carousel', 70)
          $('.progress-reports-bar li').removeClass('active');
          $(this).addClass('active');
          var index = $('.progress-reports-bar li').index(this);
          $('.progress-reports-bar li').trigger('to.owl.carousel', [index, 300]);

        })




      })
      $(document).ready(function () {
        $('#sv1').click(function () {
          $('.owl-item:nth-child(8)').show()
          $('.progressType8').show()
          $('.finalSelection:nth-child(9)').show()
          $('.finalSelection:nth-child(10)').show()
          $('.cuffstyle').show()
          
            $('.progress-reports-bar').on('click', 'li', function (e) {
              owl.trigger('to.owl.carousel', [$(this).index(), 300])
            })
         


        })
      })



      $('.owlSubmit').click(function () {
        app.modalFunction()
        $('#Mymodal').modal('show')
      })

      $(document).ready(function () {
        $('.updateC').click(function () {
          $('.backCarousel').hide().removeClass('activeC')
          $('.sideCarousel').hide().removeClass('activeC')
          $('.frontCarousel').show().addClass('activeC')
          $('.owlPrev').show()
          $('.owlNext').hide()

          $('.owlSubmit').show()
          $('.updateC').hide()
          
          
          $('.updateF').prop('checked', false)
          if (document.getElementById('sv2').checked) {
            $('#myCarousel').trigger('to.owl.carousel', 7)

          } else {
            $('#myCarousel').trigger('to.owl.carousel', 8)
          }
          $('#owlUpdate').hide()
          
        })
      }
      )

     
      $(document).ready(function () {
        $('.owlUpdate').click(function () {
          $('.progress-reports-bar').on('click','li',  function (e) {
            $('.owlNext').hide()
          })
          
        })
      }
      )

      $('.model-preview').click(function () {
        if ($('#backPreview').is(':checked')) {
          $('.frontCarousel').hide().removeClass('activeC')
          $('.backCarousel').show().addClass('activeC')
          $('.sideCarousel').hide().removeClass('activeC')



        } else if ($('#frontPreview').is(':checked')) {
          $('.backCarousel').hide().removeClass('activeC')
          $('.frontCarousel').show().addClass('activeC')
          $('.sideCarousel').hide().removeClass('activeC')




        }
        else if ($('#sidePreview').is(':checked')) {
          $('.backCarousel').hide().removeClass('activeC')
          $('.frontCarousel').hide().removeClass('activeC')
          $('.sideCarousel').show().addClass('activeC')


        }
      })

      $('#owlUpdate').click(function () {
        $('.owlPrev').hide()
        $('#owlUpdate').hide()
        $('.owlNext').hide()
        $('#updateC').show()

        if (document.getElementById('collarF').checked) {
          $('#myCarousel').trigger('to.owl.carousel', 1)
        }
        if (document.getElementById('fitF').checked) {
          $('#myCarousel').trigger('to.owl.carousel', 0)
        }
        if (document.getElementById('customcollarF').checked) {
          $('#myCarousel').trigger('to.owl.carousel', 1)
        }

        if (document.getElementById('sleeveF').checked) {
          $('#myCarousel').trigger('to.owl.carousel', 6)
        }

        if (document.getElementById('cuffF').checked) {
          $('#myCarousel').trigger('to.owl.carousel', 7)
        }
        if (document.getElementById('customcuffF').checked) {
          $('#myCarousel').trigger('to.owl.carousel', 7)
        }

        if (document.getElementById('tuckF').checked) {
          $('#myCarousel').trigger('to.owl.carousel', 5)
        }

        if (document.getElementById('chestpocketF').checked) {
          $('#myCarousel').trigger('to.owl.carousel', 2)
        }
        if (document.getElementById('placketF').checked) {
          $('#myCarousel').trigger('to.owl.carousel', 3)
        }
        if (document.getElementById('backpleatF').checked) {
          $('#myCarousel').trigger('to.owl.carousel', 4)
        }
      })

      $('input[type="radio"]').click(function () {
        $('.owlUpdate').hide()
      })
      $('.progress-reports-bar').on('click', 'li', function (e) {
        $('.updateC').hide()
        $('.owlPrev').show()
      })
      
      
    })
 
  },
}

//owl

$(document).ready(function () {
  Owl.init()
})



//default check

function check() {
  document.getElementById('jfit').firstChild.checked = true;
  document.getElementById('jcollar').firstChild.checked = true;
  document.getElementById('jcustomcollar').firstChild.checked = true;
  document.getElementById('jsleeve').firstChild.checked = true;
  document.getElementById('jelbowpatch').firstChild.checked = true;
  document.getElementById('jcuff').firstChild.checked = true;
  document.getElementById('jcustomcuff').firstChild.checked = true;
  document.getElementById('jplacket').firstChild.checked = true;
  document.getElementById('jbackpleat').firstChild.checked = true;
  document.getElementById('jtuck').firstChild.checked = true;
  document.getElementById('jpocket').firstChild.checked = true;
}
