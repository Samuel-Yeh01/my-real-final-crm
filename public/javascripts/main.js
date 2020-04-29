(function($){
   "use strict";
   $('.top-selling-slider').slick({
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      dots: false,
      arrows: false,
   });
   $('.session-slider').slick({
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      dots: true,
      arrows: false,
   });
   $('.review-slider').slick({
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      dots: false,
      arrows: true,
      prevArrow: '<a class="slick-prev"><i class="fa fa-arrow-left" aria-hidden="true"></i></a>',
      nextArrow: '<a class="slick-next"><i class="fa fa-arrow-right" aria-hidden="true"></i></a>',
   });

   $(document).ready(function() {
      $("button[id^='button']").on('click', function() { 
         $("div[id^='"+this.id+"-section']").toggleClass("active");
      });
   });

   $('body:not(.session-page)').addClass('resp-dashb-bg');
   $('.dashboard-overlay').on('click', function(){
      $(this).removeClass('show-overlay');
      $('.app-sidebar').removeClass('resp-trans');
   });   
   
   //Materialize jQuery
   $('.dropdown-trigger').dropdown();
   $('.tabs').tabs();
   $('.collapsible').collapsible();
   $('.modal').modal();
   $('select').formSelect();
   $('.datepicker').datepicker({
      autoClose: true,
      landscape : true,
   });

   //Chat Sidenav jquery
   $('.sidenav').sidenav({
      edge: 'right',
      preventScrolling  : 'true'
   });

   //Sidebar Collapsible functionality
   $('.menu-toggle').on('click', function(){
      $('.app-sidebar').toggleClass('width');
      $('.app-main-content').toggleClass('margin');
      $('.app-toolbar').toggleClass('full-width');   
      $('.app-sidebar').addClass('resp-trans');
      $('.dashboard-overlay').addClass('show-overlay');
   });

   $(".preloader-wrapper-sec").fadeOut("slow");


   var url = window.location.href;
   var icon = url.split("=")[1];

   // Change code of the language to set the default language
   var langCode = 'en';

   if(icon == 'ar' || icon == 'he' ){
      $('body').addClass('rtl');
   }

   if (!url.split("?")[1] || localStorage.getItem("clang") === null) {
      $('#languages img').attr('src', '/images/flag-icons/' + langCode + '.png');
      localStorage.setItem("clang", '?clang=' + langCode);

   } else {
      $('#languages img').attr('src', '/images/flag-icons/' + icon + '.png');
   }

   //For Dashboard counter

   $('.counter').each(function() {
      var $this = $(this),
         countTo = $this.attr('data-count');     
      $({ countNum: $this.text()}).animate({
         countNum: countTo
      },
      {
         duration: 2000,
         easing:'linear',
         step: function() {
            $this.text(Math.floor(this.countNum));
         }
     });  
   });
   
   // alterClass Jquery Function
   $.fn.alterClass = function ( removals, additions ) { 
      var self = this;
      if ( removals.indexOf( '*' ) === -1 ) {
         // Use native jQuery methods if there is no wildcard matching
         self.removeClass( removals );
         return !additions ? self : self.addClass( additions );
      }
      var patt = new RegExp( '\\s' + 
            removals.
               replace( /\*/g, '[A-Za-z0-9-_]+' ).
               split( ' ' ).
               join( '\\s|\\s' ) + 
            '\\s', 'g' );
      self.each( function ( i, it ) {
         var cn = ' ' + it.className + ' ';
         while ( patt.test( cn ) ) {
            cn = cn.replace( patt, ' ' );
         }
         it.className = $.trim( cn );
      });
      return !additions ? self : self.addClass( additions );
   };
   
})(jQuery);   