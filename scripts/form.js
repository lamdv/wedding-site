form = document.querySelector("#form")
submitButton = document.querySelector("#submit")
scriptURL = 'https://script.google.com/macros/s/AKfycbwPYhT5hqT498XaTPNB6zlPvOA5FUfj0t7LFKc7tB_QyKSMPhV7YWBwHFhVk_MDmFF_dA/exec'
// https://script.google.com/macros/s/AKfycbx5ELgHlKRdsv2CO9CqQceYs16Q9vB0C7yni1g6FRnUaN7wg7Ll4e14o3slu9Zp-3xtJA/exec
// scriptURL = 'https://api.web3forms.com/submit'

$(document).ready(function(event){
    form.reset()
})

form.addEventListener('submit', e => {
    submitButton.disabled = true
    e.preventDefault()
    let requestBody = new FormData(form)
    if (requestBody.get('rsvp')===null){
        requestBody.set('rsvp', '0')
        if (requestBody.get('guest') !== null) {
            alert('Nếu bạn có tham dự, xin hãy chọn lại!')
            submitButton.disabled = false
            return;
        }
        requestBody.set('guest', '0')
    }
    else if (requestBody.get('guest') === null) {
        requestBody.set('guest', '0')
    }
    fetch(scriptURL, { method: 'POST', body: requestBody})
    .then(response => {
        if (response.status === 200) {
            form.reset()
        }
        if (requestBody.get('rsvp') === '1') {
            alert('Cảm ơn bạn dành thời gian đến dự đám cưới của chúng mình! Hi vọng được gặp mọi người!', response)
        }
        else {
            alert('Cảm ơn bạn đã thông báo không tham dự! Hẹn gặp vào một dịp khác nhé!', response)
        }
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