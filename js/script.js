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

});