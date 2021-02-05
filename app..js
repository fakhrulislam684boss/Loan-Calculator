let form = document.querySelector('.loan-form')



form.addEventListener('submit',(e) =>{

    let loadingImage = document.querySelector('#loading');
    let result = document.querySelector('#result')


    // show loading Image

    loadingImage.style.display = 'block'

    // hide result

    result.style.display = 'none'

    setTimeout(() =>{

          // hide loading Image

    loadingImage.style.display = 'none'

    // show result

    result.style.display = 'block'

    },2000)
    
    
    e.preventDefault()
})