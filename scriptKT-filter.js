const select = document.querySelector('.filter__form-select');
const selectList = document.querySelector('.filter__form-select-sizes');
const resetSelect = document.querySelector('.reset-select');
const checks = document.querySelectorAll('.select__item input');
const change = document.querySelector('.select-change');
const titleSelect = document.querySelector('.form-select');

function writeSize () {
   let checkboxs = select.getElementsByTagName('input');
   let out = [];
   for (item of checkboxs) {
      if (item.checked) {
         out.push(item.value);
      }
   }
   titleSelect.innerHTML = out.join(', ');
}

select.addEventListener('focusin', function() {
   selectList.classList.add('filter__form-select-sizes--show');
});
select.addEventListener('click', function() {
   selectList.classList.add('filter__form-select-sizes--show');
});

change.addEventListener('click', function(event) {
   event.stopPropagation();
   selectList.classList.toggle('filter__form-select-sizes--show');
   
});

selectList.addEventListener('focusout', function () {
   selectList.classList.remove('filter__form-select-sizes--show');
   writeSize();
});
   


resetSelect.addEventListener('click', function(e) {
   e.preventDefault();
   selectList.classList.remove('filter__form-select-sizes--show');

   checks.forEach(function (check) {
      check.checked = false;
      
   })
   titleSelect.innerHTML = 'Выбрать размер';
});