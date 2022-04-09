// DOM INTERACTION
let modals = document.querySelectorAll(".modal");

let modalBtns = document.querySelectorAll(".project-details");

// When you click on "Project Details" button, the modal opens
for (var i=0; i < modalBtns.length; i++){
    modalBtns[i].addEventListener('click', function(e) {
        e.preventDefault();
        console.log('it works');
        modal = document.querySelector(e.target.getAttribute('href'))
        modal.style.display = "block"
    })
}

let closeBtns = document.querySelectorAll('.close-project');

// When you click on the "X" close button, the modal closes
closeBtns[0].addEventListener('click', function(e){
    modals[0].style.display = "none";
})

closeBtns[1].addEventListener('click', function(e){
    modals[1].style.display = "none";
})

closeBtns[2].addEventListener('click', function(e){
    modals[2].style.display = "none";
})

// When you click on anything on the screen except for modal, the modal closes 
window.addEventListener('click', function(e){
    if (e.target.classList.contains('modal')) {
        console.log('If statement works too!')
        for (var index in modals) {
            if(typeof modals[index].style !== 'undefined') 
            modals[index].style.display = "none";
        }
    }
    
  })


















