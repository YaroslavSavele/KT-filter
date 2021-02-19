const select = document.querySelector('.filter__form-select');
const selectList = document.querySelector('.filter__form-select-sizes');
const resetSelect = document.querySelector('.reset-select');
const checks = document.querySelectorAll('.select__item input');
const change = document.querySelector('.select-change');

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
});
   let out = '';
   checks.forEach(function (check) {
      check.addEventListener('change', function () {
         //if (check.cheked) {
         ////out += this.value + ', ';
         //console.log(check.value);
      //}
      })
      //document.querySelector('.filter__form-select p').innerHTML = out;
      
      //
   })


resetSelect.addEventListener('click', function(e) {
   e.preventDefault();
   selectList.classList.remove('filter__form-select-sizes--show');

   checks.forEach(function (check) {
      check.checked = false;
      
   })
});