let secondOptions = document.querySelectorAll('.second-option');
let firstOptions = document.querySelectorAll('.first-option');

firstOptions.forEach(elem_f => {
    secondOptions.forEach(elem_s => {
        elem_s.addEventListener('click', ()=>{
            elem_s.classList.remove('unselected');
            elem_f.classList.add('unselected');
        });
        elem_f.addEventListener('click', ()=>{
            elem_s.classList.add('unselected');
            elem_f.classList.remove('unselected');
        })
    })
})

// Через фор попробовать как на курсаче