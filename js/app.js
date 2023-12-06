const btnAddToCart = document.querySelector('.btnAdd');
const emptyCart = document.getElementById('empty-cart')
const container = document.getElementById('container-cards');
const card = document.querySelectorAll('.card');
const bar = document.getElementById('search-bar');
const btnCreate = document.getElementById('btn-create');
const modifyModal = document.getElementById('btn-modify');
const btnFilterAsc = document.getElementById('btn-filter-asc');
const btnFilterDesc = document.getElementById('btn-filter-desc');
const btnModify = document.getElementById('btn-modify')
const btnUpdate = document.getElementById('update-product');
let imgSelected = " ";
let skuProduct = 0;

const modalModify = document.querySelector('.modal-modify')
const btnCloseModal2 = document.getElementById('close-modal2')

const modal = document.querySelector('.modal');
const btnCloseModal = document.getElementById('close-modal');
const newSku = document.getElementById('new-sku')
const newProduct = document.getElementById('new-product');
const newPrice = document.getElementById('new-price');
const newDescrip = document.getElementById('new-description');
const newCategory = document.getElementById('new-category');
const newStock = document.getElementById('new-stock');
const newImage = document.getElementById('new-image');
const btnNewProduct = document.getElementById('btn-new-create');


let products = [
    {sku: "1", name: 'Call of Duty MW', price: 30, description: 'Videojuego de disparos en primera persona desarrollado por Infinity Ward y publicado por Activision.', category: 'accion', image: './images/callOfDutyMW.png', stock: 10},
    {sku: "2", name: 'Destiny 2', price: 40, description: 'Videojuego de disparos en primera persona, desarrollado y publicado por Bungie.', category: 'accion', image: './images/destiny2.png', stock: 7},
    {sku: "3", name: 'Assassin\'s Creed Valhalla', price: 45, description: 'Juego de acción-aventura desarrollado por Ubisoft Montreal y publicado por Ubisoft.', category: 'aventura', image: './images/assasinsCreedValhalla.png', stock: 15},
    {sku: "4", name: 'FIFA 22', price: 55, description: 'Videojuego de simulación de fútbol desarrollado y publicado por Electronic Arts.', category: 'deportes', image: './images/fifa22.png', stock: 8},
    {sku: "5", name: 'Halo Infinite', price: 40, description: 'Próximo videojuego de disparos en primera persona desarrollado por 343 Industries y publicado por Xbox Game Studios.', category: 'accion', image: './images/haloInfinite.png', stock: 18},
    {sku: "6", name: 'Super Mario Odyssey', price: 50, description: 'Videojuego de plataformas desarrollado y publicado por Nintendo para Nintendo Switch.', category: 'aventura', image: './images/superMarioO.png', stock: 14},
    {sku: "7", name: 'The Witcher 3: Wild Hunt', price: 35, description: 'Videojuego de rol desarrollado por CD Projekt y publicado por CD Projekt RED.', category: 'accion', image: './images/theWitcher.png', stock: 22},
    {sku: "8", name: 'Overwatch', price: 25, description: 'Videojuego de disparos en equipo desarrollado y publicado por Blizzard Entertainment.', category: 'accion', image: './images/overwatch.png', stock: 11},
    {sku: "9", name: 'Madden NFL 22', price: 60, description: 'Videojuego de simulación de fútbol americano desarrollado por EA Tiburon y publicado por Electronic Arts.', category: 'deportes', image: './images/nfl22.jpg', stock: 9},
    {sku: "10", name: 'Cyberpunk 2077', price: 65, description: 'Videojuego de rol de acción desarrollado y publicado por CD Projekt.', category: 'rol', image: './images/cyberpunk.png', stock: 13},
    {sku: "11", name: 'Grand Theft Auto V', price: 40, description: 'Videojuego de acción-aventura desarrollado por Rockstar North y publicado por Rockstar Games.', category: 'aventura', image: './images/gta5.png', stock: 16},
    {sku: "12", name: 'Fall Out 3', price: 15, description: 'Videojuego de rol de acción desarrollado por Bethesda Game Studios y publicado por Bethesda Softworks.', category: 'rol', image: './images/fallOut3.png', stock: 25},
    {sku: "13", name: 'Persona 5', price: 50, description: 'Videojuego de rol desarrollado por Atlus para PlayStation.', category: 'rol', image: './images/persona5.jpg', stock: 20},
    {sku: "14", name: 'Call of Duty MW2', price: 30, description: 'Videojuego de acción en primera persona desarrollado por Infinity Ward.', category: 'accion', image: './images/callOfDutyMW2.png', stock: 30},
    {sku: "15", name: 'God of War', price: 55, description: 'Videojuego de acción-aventura desarrollado por Santa Monica Studio y publicado por Sony Interactive Entertainment.', category: 'aventura', image: './images/godOfWar.png', stock: 18},
    {sku: "16", name: 'NBA 2K24', price: 20, description: 'Videojuego de baloncesto del 2023 desarrollado por Visual Concepts y publicado por 2K, basado en la National Basketball Association.', category: 'deportes', image: './images/nba2k24.jpg', stock: 12},
    {sku: "17", name: 'Mortal Kombat 11', price: 45, description: 'Videojuego de pelea desarrollado por NetherRealm Studios y publicado por Warner Bros. Interactive Entertainment.', category: 'lucha', image: './images/mortalKombat11.png', stock: 15},
    {sku: "18", name: 'The Evil Within', price: 35, description: 'Videojuego de terror en tercera persona el cual fue desarrollado por el estudio Tango Gameworks y publicado por la empresa Bethesda Softworks.', category: 'terror', image: './images/theEvilWithin.png', stock: 22},
    {sku: "19", name: 'Animal Crossing: New Horizons', price: 55, description: 'Videojuego de simulación social desarrollado y publicado por Nintendo.', category: 'aventura', image: './images/animal.png', stock: 10},
    {sku: "20", name: 'Rainbow Six Siege', price: 30, description: 'Videojuego de disparos táctico en primera persona desarrollado por Ubisoft Montreal y publicado por Ubisoft.', category: 'accion', image: './images/ranbomSixSiege.png', stock: 17},
    {sku: "21", name: 'Battlefield 2042', price: 40, description: 'Videojuego de disparos y acción bélica en primera persona, desarrollado por EA Digital Illusion CE, Criterion Games, Ripple Effect y distribuido por Electronic Arts.', category: 'accion', image:'./images/battleField.png', stock: 14},
    {sku: "22", name: 'Final Fantasy VII Remake', price: 50, description: 'Videojuego de rol de acción desarrollado y publicado por Square Enix.', category: 'rol', image: './images/finalFantasy.jpg', stock: 19},
    {sku: "23", name: 'Gran Turismo 7', price: 15, description: 'Videojuego de simulación de carreras de 2022 desarrollado por Polyphony Digital y publicado por Sony Interactive Entertainment.', category: 'carrera', image: './images/granTurismo7.png', stock: 23},
    {sku: "24", name: 'Spider-Man: Miles Morales', price: 45, description: 'Videojuego de acción y aventuras desarrollado por Insomniac Games y publicado por Sony Interactive Entertainment.', category: 'accion', image: './images/spiderman.png', stock: 8},
    {sku: "25", name: 'God Of War III', price: 25, description: ' videojuego de hack and slash de acción y aventura desarrollado por Santa Monica Studio y publicado por Sony Computer Entertainment.', category: 'aventura', image: './images/godOfWar3.png', stock: 15},
    {sku: "26", name: 'Outlast 2', price: 35, description: 'Videojuego de terror psicológico y supervivencia en primera persona desarrollado y publicado por Red Barrels Games.', category: 'terror', image: './images/out2.png', stock: 12},
    {sku: "27", name: 'Far Cry 3', price: 55, description: 'Videojuego de disparos en primera persona de mundo abierto desarrollado por Ubisoft Toronto y publicado por Ubisoft.', category: 'accion', image: './images/farCry3.png', stock: 11},
    {sku: "28", name: 'Until Dawn', price: 20, description: 'Videojuego de terror narrativo perteneciente a los subgéneros horror de supervivencia y Drama Interactivo desarrollado por Supermassive Games y publicado por Sony Computer Entertainment', category: 'terror', image: './images/untilDawn.png', stock: 25},
    {sku: "29", name: 'Suicide Squad', price: 60, description: 'Videojuego desarrollado por Rocksteady Studios, y distribuido por Warner Bros.', category: 'lucha', image: './images/suicideSquad.png', stock: 9},
    {sku: "30", name: 'Injustice 2', price: 60, description: 'Videojuego de lucha desarrollado por NetherRealm Studios y publicado por Warner Bros.', category: 'lucha', image: './images/injustice2.png', stock: 12}
];

function makeCard(product) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.setAttribute('data-category', product.category)
    card.setAttribute('id', product.sku);

    const titleCard = document.createElement('h2')
    titleCard.textContent = product.name
    titleCard.classList.add('card-title')

    const priceCard = document.createElement('p')
    priceCard.textContent = `$${product.price}`
    priceCard.classList.add('card-price')

    const descripCard = document.createElement('p')
    descripCard.textContent = product.description
    descripCard.classList.add('card-details')

    const categoryCard = document.createElement('p')
    categoryCard.textContent = `Categoria: ${product.category}`
    categoryCard.classList.add('card-details')

    const imgCard = document.createElement('img')
    imgCard.src = product.image
    imgCard.alt = product.name
    imgCard.classList.add('card-image')

    const stockCard = document.createElement('p')
    stockCard.textContent = `Disponibles:${product.stock}`
    stockCard.classList.add('card-details')

    const addToCart = document.createElement('button')
    addToCart.textContent = "Agregar al Carrito"
    addToCart.classList.add('card-button')


    card.appendChild(imgCard)
    card.appendChild(titleCard)
    card.appendChild(priceCard)
    card.appendChild(descripCard)
    card.appendChild(categoryCard)
    card.appendChild(stockCard)
    card.appendChild(addToCart)

    container.appendChild(card)
}

function filterByCategory(category) {
    document.querySelectorAll('.card').forEach( card =>{
        card.style.display = 'none'
    })

    if (category === 'todo') {
        document.querySelectorAll('.card').forEach( card =>{
            card.style.display = 'block'
        })
    }else{
        document.querySelectorAll(`[data-category=${category}]`).forEach(card =>{
            card.style.display = 'block'
        })
    }
}

window.addEventListener('DOMContentLoaded', () => {
    products.forEach( product => makeCard(product) )
})

bar.addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
    );    

    container.innerHTML = '';

    filteredProducts.forEach(product => makeCard(product));
});


btnCreate.addEventListener('click', showModal);
btnCloseModal.addEventListener('click', function() {
  modal.style.display = 'none'
  document.querySelector('.overlay').style.display = 'none'
});

btnModify.addEventListener('click', showModalModify);
btnCloseModal2.addEventListener('click', function () {
    modalModify.style.display = 'none'
    document.querySelector('.overlay').style.display = 'none'
});
btnNewProduct.addEventListener('click', createNewProduct);
newImage.addEventListener('change', importImg);

function showModal() {
  modal.style.display = 'block'
  document.querySelector('.overlay').style.display = 'block'
}

function showModalModify(){
    modalModify.style.display = 'block'
    document.querySelector('.overlay').style.display = 'block'
}

function createNewProduct() {
    const skuProduct = newSku.value;
    const productName = newProduct.value;
    const price = newPrice.value;
    const description = newDescrip.value;
    const category = newCategory.value;
    const stock = newStock.value;

    const newProductObject = {
        sku: skuProduct,
        name: productName,
        price: price,
        description: description,
        category: category,
        image: imgSelected,
        stock: stock,
    };

    products.push(newProductObject);
    makeCard(newProductObject);
    modal.style.display = 'none';
    newSku.value = '';
    newProduct.value = '';
    newPrice.value = '';
    newDescrip.value = '';
    newCategory.value = '';
    newStock.value = '';
    newImage.value = '';

    document.querySelector('.overlay').style.display = 'none'
}

function importImg(event) {
    const currentImg = event.target.files[0];
    const objectURL = URL.createObjectURL(currentImg);
    imgSelected = objectURL;
}

function renderCards(){
    container.innerHTML = ''; // Limpiar el contenedor antes de renderizar
  
    products.map(product => {
        product ? makeCard(product) : null;
    });
  }
  
function sortProducts(order) {
    if (order === 'asc') {
      products = sortByPriceAscending(products);
    } else if (order === 'desc') {
      products = sortByPriceDescending(products);
    }
  
    renderCards();
}

btnFilterAsc.addEventListener('click', () => {
    sortProducts('asc');
});

btnFilterDesc.addEventListener('click', () => {
    sortProducts('desc');
});
  
function sortByPriceAscending(products) {
    return products.slice().sort((a, b) => a.price - b.price);
}
  
function sortByPriceDescending(products) {
    return products.slice().sort((a, b) => b.price - a.price);
}

container.addEventListener('click', function (event) {
    if (event.target.classList.contains('card-button')) {
        const card = event.target.closest('.card');
        if (card) {
            const sku = card.getAttribute('id');
            const productToAdd = products.find(product => product.sku === sku);
            addToCart(productToAdd);
        }
    }
});


document.addEventListener('DOMContentLoaded', () => {
    try {
        const storedCart = localStorage.getItem('products-in-cart');
        if (storedCart) {
            // Intenta analizar la cadena JSON
            cart = JSON.parse(storedCart);
            updateCart();  // Actualiza la interfaz del carrito después de cargar desde localStorage
        }
    } catch (error) {
        // Maneja el error al analizar la cadena JSON
        console.error('Error parsing cart from localStorage:', error);
        // Puedes tomar medidas adicionales según tus necesidades, como restablecer el carrito o informar al usuario.
    }

    // Resto del código...
});

let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    try {
        const storedCart = localStorage.getItem('products-in-cart');
        if (storedCart) {
            // Intenta analizar la cadena JSON
            cart = JSON.parse(storedCart);
            updateCart();  // Actualiza la interfaz del carrito después de cargar desde localStorage
        }
    } catch (error) {
        // Maneja el error al analizar la cadena JSON
        console.error('Error parsing cart from localStorage:', error);
        // Puedes tomar medidas adicionales según tus necesidades, como restablecer el carrito o informar al usuario.
    }

    // Resto del código...
});


// Función para agregar un producto al carrito
function addToCart(productToAdd) {
  const { sku, stock } = productToAdd;
  if (stock > 0) {
      const existingItem = cart.find(item => item.sku === sku);

      if (existingItem) {
          existingItem.quantity += 1;
      } else {
          cart.push({ ...productToAdd, quantity: 1 });
      }

      // Actualizar el stock del producto
      productToAdd.stock -= 1;

      // Guardar el carrito en localStorage
      localStorage.setItem('products-in-cart', JSON.stringify(cart));

      // Actualizar la interfaz del carrito
      updateCart();
  }
}

  
  
// Función para actualizar la vista del carrito
function updateCart() {
  const cartItemsDiv = document.getElementById('cart-items');
  cartItemsDiv.innerHTML = '';

  let totalPrice = 0;

  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-new-product');
    cartItem.innerHTML = `<p id = "text">${item.name} - Cantidad:</p> 
    <div class = "buttons">
      <button class = "btn-Minum" onclick="decrementQuantity('${item.sku}')">-</button><p id="text">
      ${item.quantity}</p>
      <button class = "btn-Plus" onclick="incrementQuantity('${item.sku}')">+</button>
      <button class = "btn-Delete" onclick="removeFromCart('${item.sku}')">Eliminar</button>
    </div>`;

    cartItemsDiv.appendChild(cartItem);

    totalPrice += item.price * item.quantity;
  });

  document.getElementById('cart-total').innerText = `$${totalPrice}`;
}

// Funciones para ajustar la cantidad de productos en el carrito
function incrementQuantity(sku) {
  const item = cart.find(item => item.sku === sku);
  if (item && item.quantity < item.stock) {
    item.quantity++;
    updateCart();
  }
}

function decrementQuantity(sku) {
  const item = cart.find(item => item.sku === sku);
  if (item && item.quantity > 1) {
    item.quantity--;
    updateCart();
  }
  
}

// Función para eliminar un producto del carrito
function removeFromCart(sku) {
  cart = cart.filter(item => item.sku !== sku);
  localStorage.setItem('products-in-cart', JSON.stringify(cart));
  updateCart();
}

// Función para vaciar completamente el carrito
document.getElementById('empty-cart').addEventListener('click', () => {
  cart = [];
  localStorage.setItem('prdocuts-in-cart', cart)
  updateCart();
});



// Evento al hacer clic en "Añadir al carrito" en cada producto
container.addEventListener('click', function(event) {
    if (event.target.classList.contains('btnAdd')) {
      const sku = event.target.getAttribute('id');
      const productToAdd = products.find(product => product.sku === sku);
      addToCart(productToAdd);
    }
  });
  
  // Función para eliminar un producto del carrito
  function removeFromCart(sku) {
    cart = cart.filter(item => item.sku !== sku);
    localStorage.setItem('products-in-cart', JSON.stringify(cart));
    updateCart();
}

  
  // Función para vaciar completamente el carrito
  emptyCart.addEventListener('click', () => {
    cart = [];
    localStorage.setItem('products-in-cart', cart);
    updateCart();
  });

const callProduct = document.getElementById('call-product').addEventListener('click', updateModifyForm);

function updateModifyForm() {
  const skuToModify = document.getElementById('new-sku2').value;
  const productToModify = products.find(product => product.sku === skuToModify);

  if (productToModify) {
    // Llena los campos del formulario con los datos del producto
    document.getElementById('new-product2').value = productToModify.name;
    document.getElementById('new-price2').value = productToModify.price;
    document.getElementById('new-description2').value = productToModify.description;
    document.getElementById('new-stock2').value = productToModify.stock;
    document.getElementById('new-category2').value = productToModify.category;

    const imgPreview = document.getElementById('new-image2');
        imgPreview.src = productToModify.image;
        imgSelected = productToModify.image;

    document.getElementById('new-image2').addEventListener('change', updateImagePreview);

  } else {
    // Si no se encuentra el producto, puedes mostrar un mensaje de error o realizar alguna acción adicional.
    console.log('Producto no encontrado');
  }
}

function updateImagePreview(event) {
    const currentImg = event.target.files[0];
    const objectURL = URL.createObjectURL(currentImg);
    imgSelected = objectURL;
  
    const imgPreview = document.getElementById('new-image2-preview');
    imgPreview.src = objectURL;
  }

// Agrega un evento de clic al botón "Actualizar producto"
btnUpdate.addEventListener('click', updateProduct);

function updateProduct() {
  const skuToUpdate = document.getElementById('new-sku2').value;
  const indexToUpdate = products.findIndex(product => product.sku === skuToUpdate);

  if (indexToUpdate !== -1) {
    // Actualiza los valores del producto con los nuevos valores del formulario
    products[indexToUpdate].name = document.getElementById('new-product2').value;
    products[indexToUpdate].image = imgSelected;
    products[indexToUpdate].price = document.getElementById('new-price2').value;
    products[indexToUpdate].description = document.getElementById('new-description2').value;
    products[indexToUpdate].stock = document.getElementById('new-stock2').value;
    products[indexToUpdate].category = document.getElementById('new-category2').value;


    // Limpia el formulario después de la actualización
    document.getElementById('new-sku2').value = '';
    document.getElementById('new-product2').value = '';
    document.getElementById('new-image2').value = '';
    document.getElementById('new-price2').value = '';
    document.getElementById('new-description2').value = '';
    document.getElementById('new-stock2').value = '';
    document.getElementById('new-category2').value = '';

    // Cierra el modal de modificación
    document.querySelector('.overlay').style.display = 'none'
    modalModify.style.display = 'none'

    // Vuelve a renderizar las tarjetas con los productos actualizados
    renderCards();
  } else {
    // Si no se encuentra el producto, puedes mostrar un mensaje de error o realizar alguna acción adicional.
    console.log('Producto no encontrado para actualizar');
  }
}