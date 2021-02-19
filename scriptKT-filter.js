const select = document.querySelector('.filter__form-select');
const selectList = document.querySelector('.filter__form-select-sizes');
const resetSelect = document.querySelector('.reset-select');
const checks = document.querySelectorAll('.select__item input');


select.addEventListener('focusin', function() {
   selectList.classList.add('filter__form-select-sizes--show');
});

selectList.addEventListener('focusout', function () {
   selectList.classList.remove('filter__form-select-sizes--show');
});

resetSelect.addEventListener('click', function(e) {
   e.preventDefault();
   selectList.classList.remove('filter__form-select-sizes--show');

   checks.forEach(function (check) {
      check.checked = false;
      
   })
});