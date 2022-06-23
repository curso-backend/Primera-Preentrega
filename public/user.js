
fetch('/api/products', {
    headers: {
        admin: 'true'
    }
})
    .then(response => response.json())
    .then(products => {
        console.log(products)
        let html = `<div class="d-flex">`
        for ( const product of products){
            html += `
            <div class="card m-3" style="width: 18rem;">
                <img src="${product.photo}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text">$ ${product.price}</p>
                    <button data-id="${product.id}" class="btn btn-primary add">Agregar</button>
                </div>
            </div>
            `
        }    
        html += "</div>"

        document.getElementById('products').innerHTML = html
        loadEvent()
    })
    .catch(error => {
        console.log(error)
    })
    function loadEvent() {
        const btnAdds = document.getElementsByClassName('add')
        for (const btn of btnAdds) {
            btn.onclick = (e) => {
                const id = e.target.getAttribute('data-id')
                const admin = document.getElementById('isAdmin').checked
                console.log('A guardar el id ', id, "Con admin:", admin)
            }
        }
    }