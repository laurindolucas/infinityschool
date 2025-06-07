fetch('https://jsonplaceholder.typicode.com/users') 
    .then(response => response.json())
    .then(users =>
    {
        for (const user of users) {
            console.log(user.address)
        }
    })
    .catch(error => console.error("Erro: " ))
