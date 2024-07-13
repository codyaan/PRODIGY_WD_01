
document.addEventListener('DOMContentLoaded', () => {
    const popularProducts = [
        { name: 'MacBook Pro', brand: 'Apple', price: '$1999', image: 'https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111972_SP748-mbp13touch-gray.jpeg' },
        { name: 'XPS 13', brand: 'Dell', price: '$1499', image: 'https://gradeatechnology.co.uk/wp-content/uploads/2023/07/Dell-XPS-9315-Main.png' },
        { name: 'ThinkPad X1', brand: 'Lenovo', price: '$1299', image: 'https://m.media-amazon.com/images/I/41mBJ6VUGnS.jpg' },
        { name: 'Spectre x360', brand: 'HP', price: '$1399', image: 'https://i0.wp.com/www.specsbap.com/wp-content/uploads/2017/11/HP-Spectre-x360-15-Specs.jpg?fit=600%2C600&ssl=1' },
        { name: 'ZenBook 14', brand: 'Asus', price: '$1099', image: 'https://dlcdnwebimgs.asus.com/gain/dc960661-0bcf-4674-9f5c-7c2ccdcd7cb1/' },
        { name: 'MacBook Air', brand: 'Apple', price: '$999', image: 'https://inventstore.in/wp-content/uploads/2023/05/macbook-air-m1-space-grey.png' },
        { name: 'Inspiron 15', brand: 'Dell', price: '$799', image: 'https://media.extra.com/i/aurora/100323325_100_03?fmt=auto&w=720' },
        { name: 'Yoga 920', brand: 'Lenovo', price: '$1399', image: 'https://exoplizin.gr/Image/Product/%CF%86%CE%BF%CF%81%CE%B7%CF%84%CE%BF%CE%B9-%CF%85%CF%80%CE%BF%CE%BB%CE%BF%CE%B3%CE%B9%CF%83%CF%84%CE%B5%CF%82/lenovo-laptop-yoga-920-13ikb-convertible-13-9-4k-i7-8550u-8gb-256gb-ssd-uhd-graphics-620-win-10-home-2y-car-glass-80y80050gm_2953.jpg' },
        
    ];

    const allProducts = [
        ...popularProducts,
        { name: 'Nitro 5', brand: 'Acer', price: '$899', image: 'https://m.media-amazon.com/images/I/81gQvl-qT8L.jpg' },
        { name: 'Omen 15', brand: 'HP', price: '$1399', image: 'https://images.jdmagicbox.com/quickquotes/images_main/hp-omen-15-dh0138tx-2019-15-6-gaming-laptop-9th-gen-i7-9750h-16gb-1tb-hdd-512gb-ssd-windows-10-8gb-nvidia-rtx-2070-graphics-shadow-black-164859176-0byi6.jpg' },
        { name: 'Predator Helios', brand: 'Acer', price: '$1799', image: 'https://m.media-amazon.com/images/I/71nz3cIcFOL.jpg' },
        { name: 'Alienware M15', brand: 'Dell', price: '$2499', image: 'https://www.dellstore.com/pub/media/catalog/product/cache/74ae05ef3745aec30d7f5a287debd7f5/7/-/7-alienware-m15-r7-gaming-laptop_3.png' },
        { name: 'Legion 5', brand: 'Lenovo', price: '$1199', image: 'https://m.media-amazon.com/images/I/71fzx0pGY5L._AC_UF894,1000_QL80_.jpg' },
        { name: 'Vivobook S14', brand: 'Asus', price: '$999', image: 'https://m.media-amazon.com/images/I/51N8CVa3mUL.jpg' },
        { name: 'Blade Stealth', brand: 'Razer', price: '$1799', image: 'https://m.media-amazon.com/images/I/71+TkW97MjL.jpg' },
        { name: 'Gram 17', brand: 'LG', price: '$1499', image: 'https://www.lg.com/content/dam/channel/wcms/in/images/computers/17z90q-g_ah75a2_eail_in_c/17Z90Q-G-AH75A2-450-v1.jpg' },
        { name: 'MateBook X', brand: 'Huawei', price: '$1299', image: 'https://shop-cdncname.huawei.com/mx/uomcdn/MXHW/pms/202405/gbom/6942103120619/428_428_7AD622334DDA86A78DEAB919E92A035Emp.png' },
        { name: 'Aspire 7', brand: 'Acer', price: '$749', image: 'https://i.gadgets360cdn.com/products/large/Acer-Aspire-7-DB-749x800-1614338241.jpg    ' },
        { name: 'ProBook 450', brand: 'HP', price: '$649', image: 'https://wibi.com.kw/cdn/shop/products/buy-hp-probook-450-g9-156-fhd-i7-16gb-512gb-nvme-m2-ssd-dos-without-os-1yw-laptop-wibi-want-it-buy-it-kuwait-360955.webp?v=1688628759' },
        { name: 'Vostro 14', brand: 'Dell', price: '$549', image: 'https://cdn.myrapidtrack.com/products/images/1684410584255936782.jpg' },
        
    ];

    const renderProducts = (products, container) => {
        const productGrid = document.querySelector(container);
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="brand-name">${product.brand}</p>
                    <p>${product.price}</p>
                </div>
            `;
            productGrid.appendChild(productCard);
        });
    };

    renderProducts(popularProducts, '.popular-section .product-grid');
    renderProducts(allProducts, '.products-section .product-grid');
});


let navbar = document.querySelector('.responsive-nav')
hamburger.addEventListener('click',()=>{
    navbar.style.left = "0"
})


cross.addEventListener('click',()=>{
    navbar.style.left = "-200%"
})


document.querySelectorAll('.res-nav-items').forEach((item)=>{
    item.addEventListener('click', ()=>{
        navbar.style.left = '-200%'
    })
})