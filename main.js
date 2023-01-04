function displaySection() {
    document.querySelectorAll('.header__nav_btn').forEach(function(navBtn) {
        
        navBtn.addEventListener('click', function(event) {
            document.querySelector('.header__nav-btm').classList.remove('nav-active');
            const path = event.currentTarget.dataset.path
            console.log(path)
  
            document.querySelectorAll('.content').forEach(function(content) {
                content.classList.remove('content_active')
            })
          document.querySelector(`[data-target="${path}"]`).classList.add('content_active')
        })
    })
};

function displaySubSection() {
    document.querySelectorAll('.header__nav_btn-sub').forEach(function(navSubBtn) {
        
        navSubBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            console.log(path)
  
            document.querySelectorAll('.content').forEach(function(content) {
                content.classList.remove('content_active')
            })
          document.querySelector(`[data-target="${path}"]`).classList.add('content_active')
        })
    })
};

function displayNavBank() {
    let btnBank = document.querySelector('.btn-bank');
    btnBank.addEventListener('click', function() {
        document.querySelector('.header__nav-btm').classList.add('nav-active');

    })
    
}

displaySection();
displaySubSection();
displayNavBank();