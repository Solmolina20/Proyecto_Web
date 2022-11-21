import json from "./products.json";


let arrayProductSelect = [];

export function listProductAvailable(products) {
    products.forEach((value, index,) => {
            if (value.stock > 0) {
                console.log("producto " + index + " " + value)
            }
        }
    )
}

export function selectProducts(product) {
    arrayProductSelect.push(product);
    console.log(arrayProductSelect)

}

export function checkout() {
    let totalValue;
    arrayProductSelect.forEach(
        (object) => {
            totalValue += object.price
            json.products.map(product =>
                object.id === product.id ? {...product, stock: product.stock - object.amount} : product)
        }
    )
    console.log(totalValue)
}

export default arrayProductSelect;