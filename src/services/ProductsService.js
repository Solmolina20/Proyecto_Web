import json from './products.json'

export function getAllProducts() {
    return json.products
}

export function getOneById(id) {
    const productList = json.products;
    productList.find({id: id})
}

export function addProduct(product) {
    getAllProducts().push(product)
}

export function editProduct(product) {
    return getAllProducts().map(item =>
        item.id === product.id ?
            {...getAllProducts(), ...product}
            : item);
}

export function addUnitsProduct(product) {
    getAllProducts().map(item =>
        item.id === product.id ?
            {...item, stock: item.stock}
            : item);
}

export function listProducts(products) {
    products.forEach((value, index,) => {
            console.log("producto " + index + " " + value)
        }
    )
}

