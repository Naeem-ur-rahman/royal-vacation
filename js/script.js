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

          navbar_a[i]?.addEventListener('click', () => {
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
     list_view?.addEventListener('click', () => {
          search_region_grid.classList.remove('map-active');
          list_view.classList.add('active');
          map_view.classList.remove('active');
          if (window.matchMedia('(max-width: 1024px)').matches) {
               right_search.classList.remove('active');
          }
          check = true;
     });
     map_view?.addEventListener('click', () => {
          search_region_grid.classList.add('map-active');
          map_view.classList.add('active');
          list_view.classList.remove('active');
          if (window.matchMedia('(max-width: 1024px)').matches) {
               right_search.classList.add('active');
          }
          check = false;
     });
     expand_map?.addEventListener('click', () => {
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
          btn?.addEventListener('click', () => {
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


//  Header price value changed on click to the functions
const price_type_list = document.querySelector('.navbar ul li:first-child');
const price_value_display = price_type_list.querySelector('a span');
const price_values = price_type_list.querySelectorAll('.drop-down a');

price_values.forEach(value => {
     value?.addEventListener('click', () => {
          price_value_display.innerHTML = value.textContent;
     });
});

function dateSet() {
     // date input field setter code.
     let check_in = document.querySelector('#check-in');
     let check_out = document.querySelector('#check-out');
     let currentDate = new Date();
     currentDate.setDate(currentDate.getDate() + 1);
     let formattedDate = currentDate.toISOString().split('T')[0];
     check_in.value = formattedDate;
     currentDate.setDate(currentDate.getDate() + 1);
     formattedDate = currentDate.toISOString().split('T')[0];
     check_out.value = formattedDate;
}

// Btn container btns active script
let container_btns = document.querySelectorAll('.btn-container .btn_');
container_btns.forEach(btn_ => {
     btn_?.addEventListener('click', () => {
          container_btns.forEach(btn => {
               btn.classList.remove('active')
          });
          btn_.classList.add('active');
     })
});


//Tour detail btn script
let tour_detail_btns = document.querySelectorAll('.tour-detail-main .btn-container .btn_');
let tour_detail_btn_items = document.querySelectorAll('.tour-detail-main .tour-btn-detail-item');

for (let i = 0; i < tour_detail_btns.length; i++) {
     tour_detail_btns[i]?.addEventListener('click', () => {
          tour_detail_btn_items.forEach(items => {
               items.classList.remove('active')
          });
          tour_detail_btn_items[i].classList.add('active')
     })
}

// Contact form active Script
const contact_form_btn = document.querySelector('.contact-banner .contact-btn');
const contact_form = document.querySelector('.contact-banner .contact-form');

contact_form_btn?.addEventListener('click', () => {
     if (contact_form_btn.classList.contains('active')) {
          contact_form.classList.remove('active')
          contact_form_btn.classList.remove('active')
          if (contact_form_btn.classList.contains('contact-page-btn')) {
               contact_form_btn.innerHTML = 'Contact via form'
          } else {
               contact_form_btn.innerHTML = 'Book Now'
          }
     } else {
          contact_form.classList.add('active')
          contact_form_btn.classList.add('active')
          contact_form_btn.innerHTML = 'Close Form'
     }
})

// Guests Script 
const guest_box = document.querySelector('.guest-box ');

let guest_input = guest_box.querySelector('input')
let guest_card = guest_box.querySelector('.card')
let guest_card_cancel = guest_box.querySelector('.cancel-card')
let guest_card_boxes = guest_box.querySelectorAll('.box')

guest_input?.addEventListener('click', () => {
     guest_card.classList.toggle('active')
})

guest_card_cancel?.addEventListener('click', () => {
     guest_card.classList.remove('active');
})

guest_card_boxes?.forEach(box => {
     let total = box.querySelector('.total');
     let inc = box.querySelector('.inc');
     let dec = box.querySelector('.dec');
     let total_all = guest_card.querySelectorAll('.total');

     inc?.addEventListener('click', () => {
          if (total.innerText < 12) {
               total.innerHTML = ++total.innerText
               console.log(total.innerText, "Inc")
          }
          let val = 0;
          for (let i = 0; i < total_all.length; i++) {
               val += Number(total_all[i].innerText);
          }
          guest_input.value = val;
     })
     dec?.addEventListener('click', () => {
          if (total.innerText > 0) {
               total.innerHTML = --total.innerText
               console.log(total.innerText, "Dec")
          }
          let val = 0;
          for (let i = 0; i < total_all.length; i++) {
               val += Number(total_all[i].innerText);
          }
          guest_input.value = val;
     })
});
// Function calls
dateSet();