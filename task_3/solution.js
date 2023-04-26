function renderCartItem(item) {
    const product = item;
    let sum = product.count * product.price;

    let itemCountText = `${product.count} × ${product.price} ₽ = ${sum} ₽`;

    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}
