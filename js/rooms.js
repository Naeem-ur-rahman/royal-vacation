const adult_value = document.querySelector('#adult-value')

function adult(check) {
     let value = Number(adult_value.innerHTML)
     if (check && value < 6) {
          adult_value.innerHTML = value + 1;
     } else if (!check && value > 1) {
          adult_value.innerHTML = value - 1;
     }
     room();
}

const room_box = document.querySelector('#room-label');
const room_container = document.querySelector('.room-container');

room_box.addEventListener('click', () => {
     room_container.classList.add('active');
})

document.querySelector('#room-done').addEventListener('click', () => {
     room_container.classList.remove('active');
})

const child_btn = document.querySelector('.line-input.child span .btn');
const child_btn_select = document.querySelector('.line-input.child select');
const child_keywords = document.querySelector('.line-input.child .keywords');
let keyword_items = document.querySelectorAll('.keyword-items');

child_btn.addEventListener('click', () => {
     child_btn_select.classList.add('active');
});



child_btn_select.addEventListener('change', () => {
     if (keyword_items.length < 4) {
          text = child_btn_select.value;
          const childs = `<p class="keyword-items"> <span style="font-size: 1.6rem;"> ${text} year </span> 
          <i class='bx bx-x' onclick="this.parentElement.remove(); updateKeywordsItems();"></i>  
          </p>`
          child_keywords.innerHTML = child_keywords.innerHTML + childs;
          keyword_items = document.querySelectorAll('.keyword-items');
          child_btn_select.selectedIndex = 0;
          room();
     } else {
          console.log('full child range');
     }
     child_btn_select.classList.remove('active');
});

function updateKeywordsItems() {
     keyword_items = document.querySelectorAll('.keyword-items');
     room();
}


function room() {
     const room_value = document.querySelector('#room')
     room_value.value = Number(adult_value.innerHTML) + keyword_items.length;
}