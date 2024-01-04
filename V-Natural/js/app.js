(function($) { 
    $(function() 
    { 

        // Open and close nav on hover
        $('#navbar-toggle').hover(function() {
            $('nav ul').slideToggle();
        });

        // Hamburger toggle on hover
        $('#navbar-toggle').on('mouseenter', function() 
        {
            this.classList.toggle('active');
        });

        // If a link has a dropdown, add sub menu toggle on hover
        $('nav ul li').hover(
            function() {
                $(this).find('.navbar-dropdown').stop(true, true).slideDown("slow");
            },
            function() {
                $(this).find('.navbar-dropdown').stop(true, true).slideUp("slow");
            }
        );

        // Click outside the dropdown will remove the dropdown class
        $('html').click(function() {
            $('.navbar-dropdown').hide();
        });

        // Prevent the dropdown from closing when hovering over it
        $('.navbar-dropdown').click(function(e) {
            e.stopPropagation();
        });
    }); 
})(jQuery);


// Filter Products

 const products = {
    allProducts: [
        {
  name: 'Body Wax Strips', 
  image: './img/wax-strips.jpeg', 
  description: 'Product Name: Body Wax Strips\nProduct Code: ZT-408\nPackaging: 16 PCS\nMRP: ₹289' },

  {
  name: 'Acne / Pimple Patch', 
  image: './img/acne-pimple.jpeg', 
  description: 'Product Name: Acne / Pimple Patch\nProduct Code: ZT-410\nPackaging: 36 Patches\nMRP: ₹279' },

  {
  name: 'Under Eye Pads', 
  image: './img/eye-pads.jpeg', 
  description: 'Product Name: UNder Eye Pads\nProduct Code: ZT-409\nPackaging: 3 PCS\nMRP: ₹279' },

  {
  name: 'Lip Mask', 
  image: './img/lip-mask.jpeg', 
  description: 'Product Name: Lip Mask\nProduct Code: ZT-411\nPackaging: 3 PCS\nMRP: ₹269' },

  {
  name: 'Cotton Buds Pouch 100s', 
  image: './img/buds-75.jpeg', 
  description: 'Product Name: Cotton Buds Pouch 100s\nProduct Code: ZT-401\nPackaging: 100 PCS\nMRP: ₹75' },

//   {
//   name: 'Cotton Buds Pouch 100s', 
//   image: './img/buds-75.jpeg', 
//   description: 'Product Name: Cotton Buds Pouch 100s\nProduct Code: ZT-402\nPackaging: 100 PCS\nMRP: ₹75' },

  {
  name: 'Cotton Buds Pouch 200s', 
  image: './img/buds-129.jpeg', 
  description: 'Product Name: Cotton Buds Pouch 200s\nProduct Code: ZT-403\nPackaging: 200 PCS\nMRP: ₹129' },

  {
  name: 'Cotton Buds Pouch 300s', 
  image: './img/buds-199.jpeg', 
  description: 'Product Name: Cotton Buds Pouch 300s\nProduct Code: ZT-404\nPackaging: 300 PCS\nMRP: ₹199' },
],



skinCare: [
    {
        name: 'Body Wax Strips', 
        image: './img/wax-strips.jpeg', 
        description: 'Product Name: Body Wax Strips\nProduct Code: ZT-408\nPackaging: 16 PCS\nMRP: ₹289' },

  {
    name: 'Acne / Pimple Patch', 
    image: './img/acne-pimple.jpeg', 
    description: 'Product Name: Acne / Pimple Patch\nProduct Code: ZT-410\nPackaging: 36 Patches\nMRP: ₹279' },
],




faceCare: [
    {
        name: 'Under Eye Pads', 
        image: './img/eye-pads.jpeg', 
        description: 'Product Name: UNder Eye Pads\nProduct Code: ZT-409\nPackaging: 3 PCS\nMRP: ₹279' },

  {
        name: 'Lip Mask', 
        image: './img/lip-mask.jpeg', 
        description: 'Product Name: Lip Mask\nProduct Code: ZT-411\nPackaging: 3 PCS\nMRP: ₹269' },
],



generalCare: [
// {
//   name: 'Cotton Buds Pouch 100s', 
//   image: '/cool-and-cool/skin care products/General care-1.jpg', 
//   description: 'Product Name: Cotton Buds Pouch 100s\nProduct Code: ZT-401\nPackaging: 100 PCS\nMRP: $0.60' },

{
    name: 'Cotton Buds Pouch 100s', 
    image: './img/buds-75.jpeg', 
    description: 'Product Name: Cotton Buds Pouch 100s\nProduct Code: ZT-401\nPackaging: 100 PCS\nMRP: ₹75' },
  
    {
    name: 'Cotton Buds Pouch 200s', 
    image: './img/buds-129.jpeg', 
    description: 'Product Name: Cotton Buds Pouch 200s\nProduct Code: ZT-403\nPackaging: 200 PCS\nMRP: ₹129' },
  
    {
    name: 'Cotton Buds Pouch 300s', 
    image: './img/buds-199.jpeg', 
    description: 'Product Name: Cotton Buds Pouch 300s\nProduct Code: ZT-404\nPackaging: 300 PCS\nMRP: ₹199' },
]
};

// function showProducts(category) {
// const productContainer = document.getElementById('product-container');
// // Clear previous content
// productContainer.innerHTML = '';
// productContainer.classList.add=("") 

// const categoryProducts = products[category];

// if (categoryProducts) {
// categoryProducts.forEach(product => {
//   const productCard = document.createElement('div');
//   productCard.className = 'product-card';

//   const img = document.createElement('img');
//   img.src = product.image;
//   img.alt = product.name;

//   const productName = document.createElement('h3');
//   productName.textContent = product.name;

//   const productDescription = document.createElement('div');
//   productDescription.className = 'product-description';
//   productDescription.classList.add("container","text-center")

//   // Create a table for additional information
//   const table = document.createElement('table');

//   // Split the description into lines
//   const descriptionLines = product.description.split('\n');

//   // Create a table row for each line
//   descriptionLines.forEach(line => {
//     const row = document.createElement('tr');
//     const cell = document.createElement('td');
//     cell.textContent = line;
//     row.appendChild(cell);
//     table.appendChild(row);
//   });

//   productDescription.appendChild(table);

//   productCard.appendChild(img);
//   productCard.appendChild(productName);
//   productCard.appendChild(productDescription);

//   productContainer.appendChild(productCard);
// });
// }
// }

function showProducts(category) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; // Clear previous content
  
    const categoryProducts = products[category];
  
    if (categoryProducts) {
      categoryProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
  
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;
        img.onclick = function() {
          openZoomModal(product.image);
        };
  
        const productName = document.createElement('h3');
        productName.textContent = product.name;
  
        const productDescription = document.createElement('div');
        productDescription.className = 'product-description';
        productDescription.classList.add("text-center", "w-100");
  
        // Create a table for additional information
        const table = document.createElement('table');
  
        // Split the description into lines
        const descriptionLines = product.description.split('\n');
  
        // Create a table row for each line
        descriptionLines.forEach(line => {
          const row = document.createElement('tr');
          const cell = document.createElement('td');
          cell.textContent = line;
          row.appendChild(cell);
          table.appendChild(row);
        });
  
        productDescription.appendChild(table);
  
        productCard.appendChild(img);
        productCard.appendChild(productName);
        productCard.appendChild(productDescription);
  
        productContainer.appendChild(productCard);
      });
    }
  }
  
  
  // Function to show the zoom modal
  function openZoomModal(imageSrc) 
  {
        const modal = document.getElementById('zoom-modal');
        const modalImg = document.getElementById('modal-img');
  
        modal.style.display = 'block';
        modalImg.src = imageSrc;
      }
  
      function closeZoomModal() {
        const modal = document.getElementById('zoom-modal');
        modal.style.display = 'none';
      }
  

