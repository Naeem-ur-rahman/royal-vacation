window.addEventListener('DOMContentLoaded', () => {

     let menuIcon = document.querySelector('#hamburg');
     let navbar = document.querySelector('.navbar');

     menuIcon.onclick = () => {
          menuIcon.classList.toggle('bx-x');
          navbar.classList.toggle('active');
     };

     window.onscroll = () => {
          navbar.classList.remove('active');
          menuIcon.classList.remove('bx-x');
          //inscroll add sticky class to header
          let header = document.getElementById('header');
          header.classList.toggle('sticky', window.scrollY > 50);
     };

     //// this is to prevent menu list to not clickable


     let anchorTags = document.querySelectorAll('.navbar ul > li > a.notclick');

     if (window.matchMedia('(max-width: 991px)').matches) {
          anchorTags.forEach((anchorTag) => {
               anchorTag.addEventListener('click', (event) => {
                    event.preventDefault();
               });
          });
     }

     // header scroll script

     window.addEventListener('scroll', function () {
          var topHeader = document.querySelector('.header-top');
          var bottomHeaderlogo = document.querySelector('.header-down-logo');
          var bottomHeaderLinks = document.querySelector('header > .header-down > .links');
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

          if (scrollTop > 0) {
               topHeader.classList.add('hide');
               bottomHeaderlogo.classList.add('active');
               if (window.matchMedia('(max-width: 991px)').matches) {
                    bottomHeaderLinks.classList.add('none');
               }
          } else {
               topHeader.classList.remove('hide');
               bottomHeaderlogo.classList.remove('active');
               bottomHeaderLinks.classList.remove('none');

          }
     });



});