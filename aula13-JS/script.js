// const inputs = document.getElementsByTagName('input')
// const btn = document.querySelector('.btn')

// btn.addEventListener('click', (e) => {
//     e.preventDefault()

//     const obj = {
//          "id" : parseInt(Math.radom() * (200 - 1) + 1),
//         "title": inputs[0].value,
//         "price": parseFloat(inputs[1].value),
//         "description": inputs[2].value,
//         "category": inputs[3].value,
//         "image": inputs[4].value
//     }
//     fetch ('https://fakestoreapi.com/products', {
//         method: 'POST',
//         headers:
//          {
//             'Content-type':'application/json'
//         }, 
//         body: JSON.stringify(obj )
//     })
//     .then(res => res.json())
//     .then(data => cons,ole.log(data))
//     .catch(err => console.error(err))
// })


async function desconto() {
    const res = await fetch ('https://fakestoreapi.com/products')
    const data = await res.json()
    const produtosAbaixo =  data.filter( produto => produto.rating.rate < 3) 
    .map(produto => {
        produto.price -= (produto.price * 0.2).toFixed(2)
    })
console.log(produtosAbaixo)
}
desconto()
