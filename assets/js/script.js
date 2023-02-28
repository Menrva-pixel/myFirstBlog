$('nav li').hover(
    $( document ).ready(function() {
            $('ul', this).stop().slideDown(200);
          },
          function() {
            $('ul', this).stop().slideUp(200);
          }
        ));