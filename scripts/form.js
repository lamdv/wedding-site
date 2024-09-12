form = document.querySelector("#form")
submitButton = document.querySelector("#submit")
// scriptURL = 'https://script.google.com/macros/s/AKfycbwG9vCMBREFM4suhSiTdVPFu7-F-6JclKyZGGuKjFS-dqaZT6kKXS6r_15kub3YH2R5yw/exec'
scriptURL = 'https://api.web3forms.com/submit'

form.addEventListener('submit', e => {
    submitButton.disabled = true
    e.preventDefault()
    let requestBody = new FormData(form)
    fetch(scriptURL, { method: 'POST', body: requestBody})
    .then(response => {
        alert('Cảm ơn bạn đã đến dự đám cưới của chúng mình! Hi vọng được gặp mọi người!', response)
        submitButton.disabled = false
        })
    .catch(error => {
    alert('Có lỗi xảy ra, xin hãy thử lại!', error.message)
        submitButton.disabled = false

    }
    )
})


// function thanks() {
//     form = document.querySelector("#form")
//     submitButton = document.querySelector("#submit")
//     // scriptURL = 'https://script.google.com/macros/s/AKfycbwG9vCMBREFM4suhSiTdVPFu7-F-6JclKyZGGuKjFS-dqaZT6kKXS6r_15kub3YH2R5yw/exec'
//     scriptURL = 'https://api.web3forms.com/submit'

//     submitButton.disabled = true
//         e.preventDefault()
//         let requestBody = new FormData(form)
//         fetch(scriptURL, { method: 'POST', body: requestBody})
//         .then(response => {
//             alert('Cảm ơn bạn đã đến dự đám cưới của chúng mình! Hi vọng được gặp mọi người!', response)
//             submitButton.disabled = false
//             })
//         .catch(error => {
//         alert('Có lỗi xảy ra, xin hãy thử lại!', error.message)
//             submitButton.disabled = false

//         }
//         )
//     // alert("");
//     return false;
// }