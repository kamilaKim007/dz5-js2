let btnCreate = document.querySelector('.btn-create')
let form = document.querySelector('.form')
let btnDelete = document.querySelector('.btn-delete')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch('https://jsonplaceholder.typicode.com/users', {
        method:'POST',
        headers: {
            'Content-Type': "applicationjson"
        },
        body: JSON.stringify({
            name: e.target[0].value, 
            username: e.target[1].value,
            email: e.target[2].value
        })
    }).then((res) => console.log(res))
    .catch((err) => console.log(err))
})


//delete

btnDelete.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users/1',
    {
    method: 'DELETE'
    })
    .then(() => alert('вы успешно удалили'))
    .catch((err) => alert('ошибка при удалении карточки'))
})