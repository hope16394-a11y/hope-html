let total = 0;

function addToCart(name, price) {
    const list = document.getElementById("cart-items");
    const item = document.createElement("li");
    item.textContent = name + " - $" + price;
    list.appendChild(item);

    total += price;
    document.getElementById("total").textContent = total;
}
