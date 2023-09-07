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

     //navbar links script
     let navbar_a = document.querySelectorAll('.navbar ul>li>a');
     let navbar_dropdown = document.querySelectorAll('.drop-down');
     for (let i = 0; i < navbar_a.length; i++) {
          let click = new Array(true, true, true);

          navbar_a[i].addEventListener('click', () => {
               if (window.matchMedia('(max-width: 991px)').matches) {
                    if (click[i]) {
                         for (let k = 0; k < navbar_a.length; k++) {
                              navbar_dropdown[k].style = ''
                              click[k] = true;
                         }
                         navbar_dropdown[i].style.position = 'static'
                         navbar_dropdown[i].style.display = 'grid'
                         click[i] = false;
                    } else {
                         navbar_dropdown[i].style = ''
                         click[i] = true;
                    }
               } else {
                    for (let k = 0; k < navbar_a.length; k++) {
                         navbar_dropdown[k].style = ''
                         click[k] = true;
                    }
               }
          });
     }

     // Map view code on button click listner
     let list_view = document.getElementById('list-view');
     let map_view = document.getElementById('map-view');
     let right_search = document.querySelector('.search-right');
     let search_region_grid = document.querySelector('.search-region-grid');
     let expand_map = document.querySelector('.search-right .btn');
     let check = true;
     list_view.addEventListener('click', () => {
          search_region_grid.classList.remove('map-active');
          list_view.classList.add('active');
          map_view.classList.remove('active');
          if (window.matchMedia('(max-width: 1024px)').matches) {
               right_search.classList.remove('active');
          }
          check = true;
     });
     map_view.addEventListener('click', () => {
          search_region_grid.classList.add('map-active');
          map_view.classList.add('active');
          list_view.classList.remove('active');
          if (window.matchMedia('(max-width: 1024px)').matches) {
               right_search.classList.add('active');
          }
          check = false;
     });
     expand_map.addEventListener('click', () => {
          search_region_grid.classList.toggle('map-active');
          if (window.matchMedia('(max-width: 1024px)').matches) {
               right_search.classList.toggle('active');
          }

          if (check) {
               map_view.classList.add('active');
               list_view.classList.remove('active');
               check = false;
          } else {
               list_view.classList.add('active');
               map_view.classList.remove('active');
               check = true;
          }
     });

     window.addEventListener('resize', () => {
          if (window.matchMedia('(min-width: 1024px)').matches) {
               right_search.classList.remove('active');
          }
     })

     // Toogle search region page buttons
     let toggle_cards = document.querySelectorAll('.toogle-btn');
     toggle_cards.forEach(card => {
          let search_line = card.querySelectorAll('.search-line');
          let btn = card.querySelector('h2 i');
          btn.addEventListener('click', () => {
               search_line.forEach(line => {
                    line.classList.toggle('hidden');
               });
               btn.classList.toggle('bxs-up-arrow');
          });
     });

     function HideCardData() {
          let btns = document.querySelectorAll('.toogle-btn h2 i');
          let allSearchLine = document.querySelectorAll('.search-line')
          if (window.matchMedia('(max-width: 600px)').matches) {
               allSearchLine.forEach(line => {
                    line.classList.add('hidden');
               });
               btns.forEach(btn => {
                    btn.classList.add('bxs-up-arrow');
               });
          } else {
               allSearchLine.forEach(line => {
                    line.classList.remove('hidden');
               });
               btns.forEach(btn => {
                    btn.classList.remove('bxs-up-arrow');
               });
          }
     }
     // Automatically hide the card data on mobile view
     window.addEventListener('load', HideCardData);
     window.addEventListener('resize', HideCardData);

});

window.addEventListener('scroll', function () {
     var header = document.querySelector('.header');
     var headerLogo = document.querySelector('.header .logo img');

     if (window.scrollY > 0) {
          header.style.height = '6rem';
          headerLogo.style.height = '6rem';
     } else {
          header.style.height = '8rem';
          headerLogo.style.height = '8rem';
     }

});