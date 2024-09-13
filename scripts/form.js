form = document.querySelector("#form")
submitButton = document.querySelector("#submit")
scriptURL = 'https://script.google.com/macros/s/AKfycbwPYhT5hqT498XaTPNB6zlPvOA5FUfj0t7LFKc7tB_QyKSMPhV7YWBwHFhVk_MDmFF_dA/exec'

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
            // alert('Cảm ơn bạn dành thời gian đến dự đám cưới của chúng mình! Hi vọng được gặp mọi người!', response)
            window.location.href = "rsvp-yes.html";
        }
        else {
            // alert('Cảm ơn bạn đã thông báo không tham dự! Hẹn gặp vào một dịp khác nhé!', response)
            window.location.href = "rsvp-no.html";
        }
        submitButton.disabled = false
        })
    .catch(error => {
    alert('Có lỗi xảy ra, xin hãy thử lại!', error.message)
        submitButton.disabled = false

    }
    )
})