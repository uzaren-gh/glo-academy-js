sendForm = () => {
    const form = document.querySelector('.modal');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let formData = new FormData();

        const text = form.querySelector('input[type=text]');
        const tel = form.querySelector('input[type=tel]');
        const email = form.querySelector('input[type=email]');

        formData.append('username', text.value);
        formData.append('phone', tel.value);
        formData.append('email', email.value);

        let formJsonData = {};
        formData.forEach((value, key) => {
            formJsonData[key] = value;
        })

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(formJsonData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then((response) => {
                if (response.status != 201) {
                    throw new Error('Something wrong! Object is not saved. Try to check URL.')
                }
                return response.json()
            })
            .then((data) => console.log(data))
            .catch(error => {
                alert(error.message)
            })
            .finally(() => {
                form.querySelector('input[type=text]').value = '';
                form.querySelector('input[type=tel]').value = '';
                form.querySelector('input[type=email]').value = '';
            });

        //     body: new FormData(form),
        //     headers: {
        //         'Content-type': 'application/json; charset=UTF-8',
        //     },
        // })
        // let result = response.json();

        // alert(result.message);



    })

}

sendForm()