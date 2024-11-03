document.addEventListener("DOMContentLoaded", () => {
    const productForm = document.getElementById("productForm");
    const priceGraph = document.getElementById("priceGraph");
    const ratingGraph = document.getElementById("ratingGraph");

    let products = [];

    // Render the bar graphs based on the current products list
    function renderGraphs() {
        priceGraph.innerHTML = "";
        ratingGraph.innerHTML = "";

        products.forEach(product => {
            const priceBar = document.createElement("div");
            priceBar.classList.add("bar");
            priceBar.style.height = ${product.price * 2}px;
            priceBar.textContent = product.price;
            priceGraph.appendChild(priceBar);

            const ratingBar = document.createElement("div");
            ratingBar.classList.add("bar");
            ratingBar.style.height = ${product.rating * 20}px;
            ratingBar.textContent = product.rating;
            ratingGraph.appendChild(ratingBar);
        });
    }

    // Add product on form submission
    productForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const price = parseFloat(document.getElementById("price").value);
        const rating = parseFloat(document.getElementById("rating").value);

        products.push({ name, price, rating });
        renderGraphs();
        productForm.reset();
    });

    // Sorting function
    window.sortData = (key) => {
        products.sort((a, b) => a[key] - b[key]);
        renderGraphs();
    };
});