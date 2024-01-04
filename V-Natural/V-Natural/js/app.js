(function ($) {
  $(function () {
    //  open and close nav
    $("#navbar-toggle").click(function () {
      $("nav ul").slideToggle();
    });

    // Hamburger toggle
    $("#navbar-toggle").on("click", function () {
      this.classList.toggle("active");
    });

    // If a link has a dropdown, add sub menu toggle.
    $("nav ul li a:not(:only-child)").click(function (e) {
      $(this).siblings(".navbar-dropdown").slideToggle("slow");

      // Close dropdown when select another dropdown
      $(".navbar-dropdown").not($(this).siblings()).hide("slow");
      e.stopPropagation();
    });

    // Click outside the dropdown will remove the dropdown class
    $("html").click(function () {
      $(".navbar-dropdown").hide();
    });
  });
})(jQuery);

// Filter Products

const products = {
  allProducts: [
    {
      id:1,
      name: "Body Wax Strips",
      image: "./img/wax-strips.jpeg",
      description:
        " \nProduct Code: ZT-408\nPackaging: 16 PCS\nMRP: ₹289",
      category: "skinCare",
    },

    {
      id:2,
      name: "Acne / Pimple Patch",
      image: "./img/acne-pimple.jpeg",
      description:
        " \nProduct Code: ZT-410\nPackaging: 36 Patches\nMRP: ₹279",
        category: "skinCare",
    },

    {
      id:3,
      name: "Under Eye Pads",
      image: "./img/eye-pads.jpeg",
      description:
        " UNder Eye Pads\nProduct Code: ZT-409\nPackaging: 3 PCS\nMRP: ₹279",
        category: "faceCare"
    },

    {
      id:4,
      name: "Lip Mask",
      image: "./img/lip-mask.jpeg",
      description:
        " \nProduct Code: ZT-411\nPackaging: 3 PCS\nMRP: ₹269",
        category: "faceCare"
    },

    {
      id:5,
      name: "Cotton Buds Pouch 100s",
      image: "./img/buds-75.jpeg",
      description:
        "\nProduct Code: ZT-401\nPackaging: 100 PCS\nMRP: ₹75",
        category: "generalCare"
    },

    {
      id:6,
      name: "Cotton Buds Pouch 200s",
      image: "./img/buds-129.jpeg",
      description:
        "\nProduct Code: ZT-403\nPackaging: 200 PCS\nMRP: ₹129",
        category: "generalCare"
    },

    {
      id:7,
      name: "Cotton Buds Pouch 300s",
      image: "./img/buds-199.jpeg",
      description:
        " \nProduct Code: ZT-404\nPackaging: 300 PCS\nMRP: ₹199",
        category: "generalCare"
    },

    // {
    //   id:8,
    //   name: "Watermelon Nose Stripes",
    //   image: "./img/watermelon-nose-stripes.png",
    //   description:
    //     "\nProduct Code: \nPackaging: \nMRP: ",
    //     category: "faceCare"
    // },
    // {
    //   id:9,
    //   name: "Luxary Bath Loofah",
    //   image: "./img/luxary-bath-loofah.png",
    //   description:
    //     " \nProduct Code: \nPackaging: \nMRP: ",
    //     category: "generalCare"
    // },
    // {
    //   id:10,
    //   name: "Premium Delux Napkins",
    //   image: "./img/premium-delux-napkins.png",
    //   description:
    //     " \nProduct Code: \nPackaging: \nMRP: ",
    //     category: "generalCare"
    // },
    // {
    //   id:11,
    //   name: "Coffee Nose Stripes",
    //   image: "./img/coffee-nose-stripes.png",
    //   description:
    //     "\nProduct Code: \nPackaging: \nMRP: ",
    //     category: "faceCare"
    // },
  ],
};



function showProducts(category) {
  const productContainer = document.getElementById("product-container");
  productContainer.innerHTML = ""; // Clear previous content

  const filteredProducts = products.allProducts.filter(
    (product) => product.category === category
  );

  if (filteredProducts.length > 0) {
    filteredProducts.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";

      const img = document.createElement("img");
      img.src = product.image;
      img.alt = product.name;
      img.onclick = function () {
        openZoomModal(product.image);
      };

      const productName = document.createElement("h3");
      productName.textContent = product.name;

      const productDescription = document.createElement("div");
      productDescription.className = "product-description";
      productDescription.classList.add("text-center", "w-100");

      // Create a table for additional information
      const table = document.createElement("table");

      // Split the description into lines
      const descriptionLines = product.description.split("\n");

      // Create a table row for each line
      descriptionLines.forEach((line) => {
        const row = document.createElement("tr");
        const cell = document.createElement("td");
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



function displayAllProducts() {
  const productContainer = document.getElementById("product-container");

  // Clear previous content
  productContainer.innerHTML = "";

  products.allProducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    const img = document.createElement("img");
    img.classList.add("mb-3","object-fit-cover")
    img.src = product.image;
    img.alt = product.name;
    img.onclick = function () {
      openZoomModal(product.image);
    };

    const productName = document.createElement("h2");

    productName.textContent = product.name;

    const productDescription = document.createElement("div");
    productDescription.className = "product-description";
    productDescription.classList.add("text-center","m-auto","p-0");

    // Create a table for additional information
    const table = document.createElement("table");

    // Split the description into lines
    const descriptionLines = product.description.split("\n");

    // Create a table row for each line
    descriptionLines.forEach((line) => {
      const row = document.createElement("tr");
      const cell = document.createElement("td");
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


window.addEventListener("load", displayAllProducts);

// Function to show the zoom modal
function openZoomModal(imageSrc) {
  const modal = document.getElementById("zoom-modal");
  const modalImg = document.getElementById("modal-img");

  modal.style.display = "block";
  modalImg.src = imageSrc;
}

function closeZoomModal() {
  const modal = document.getElementById("zoom-modal");
  modal.style.display = "none";
}
