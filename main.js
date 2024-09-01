var data = [
  {
    sellername: "Musharraf",
    sellernum: "+919876543210",
    product: "Bike Chain",
    price: "1,380",
    image1: "https://example.com/images/bike-chain-1.jpg",
    image2: "https://example.com/images/bike-chain-2.jpg",
    image3: "https://example.com/images/bike-chain-3.jpg",
    description:
      "Genuine bike chain for various models. Durable and high-quality. Ideal for smooth and efficient bike performance.",
    postTime: "Lajpat Nagar, Delhi. 3 mins ago",
  },
  {
    sellername: "OLX User",
    sellernum: "+919876543211",
    product: "Motorcycle Battery",
    price: "4,500",
    image1: "https://example.com/images/motorcycle-battery-1.jpg",
    image2: "https://example.com/images/motorcycle-battery-2.jpg",
    image3: "https://example.com/images/motorcycle-battery-3.jpg",
    description:
      "Brand new motorcycle battery. Ensures reliable starting and long-lasting performance. Suitable for various motorcycle models.",
    postTime: "Kolkata, West Bengal. 1 min ago",
  },
  {
    sellername: "Kifayat Khan",
    sellernum: "+919876543212",
    product: "Car Air Filter",
    price: "2,500",
    image1: "https://example.com/images/car-air-filter-1.jpg",
    image2: "https://example.com/images/car-air-filter-2.jpg",
    image3: "https://example.com/images/car-air-filter-3.jpg",
    description:
      "High-quality car air filter compatible with various car models. Improves engine performance and keeps the air inside the car clean.",
    postTime: "Bangalore, Karnataka. 1 week ago",
  },
  {
    sellername: "Fahad Saleem",
    sellernum: "+919876543213",
    product: "Car Headlights",
    price: "15,000",
    image1: "https://example.com/images/car-headlights-1.jpg",
    image2: "https://example.com/images/car-headlights-2.jpg",
    image3: "https://example.com/images/car-headlights-3.jpg",
    description:
      "High-quality car headlights. Bright and durable with long-lasting illumination. Available for different car models and brands.",
    postTime: "Mumbai, Maharashtra. 3 weeks ago",
  },
  {
    sellername: "OLX User",
    sellernum: "+919876543214",
    product: "Bike Spare Parts Set",
    price: "8,000",
    image1: "https://example.com/images/bike-spare-parts-1.jpg",
    image2: "https://example.com/images/bike-spare-parts-2.jpg",
    image3: "https://example.com/images/bike-spare-parts-3.jpg",
    description:
      "Complete set of bike spare parts including brake pads, clutch cables, and more. Ideal for maintaining and repairing your bike.",
    postTime: "Chennai, Tamil Nadu. 1 min ago",
  },
];


var onClickFunc = function (item) {
  console.log(item);
  sessionStorage.setItem("products", JSON.stringify(item));
  var getUserMail = sessionStorage.getItem("mail");
  if (getUserMail) {
    location.href = "products.html";
  } else {
    alert("SignIn Required to view the product details");
  }
};

window.onload = function () {
  var getDataFromStorage = localStorage.getItem("DATA");
  if (!getDataFromStorage) {
    localStorage.setItem("DATA", JSON.stringify(data));
  }

  var getData = localStorage.getItem("DATA");
  var Arrangedata = JSON.parse(getData);

  var row = null;
  Arrangedata.forEach(function (item, index) {
    if (index % 4 === 0) {
      row = document.createElement("div");
      row.className = "row mt-1";
    }
    var itemContainer = document.createElement("div");
    itemContainer.className =
      "card mt-3 col col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3";
    itemContainer.onclick = function () {
      onClickFunc(item);
    };
    // itemContainer.onclick = onClickFunc(item);
    var datahtml = `<div class="card-div">
                 <img src="${item.image1}" class="cardimg car" alt="...">
               </div>
               <div id='cardbo' class="card-body">
                 <p class="card-text">${item.product}</p><br>
                 <h5 class="card-title">Rs ${item.price}</h5><br>
                 <p class="card-text"><small class="text-muted">${item.postTime}</small></p>
               </div>
             `;
    itemContainer.innerHTML = datahtml;
    row?.appendChild(itemContainer);
    document.getElementById("product-container")?.appendChild(row);

    // console.log(getData);
  });

  // console.log(data);
  // var logout = (document.getElementById("log").innerText = "Login");
  // var logvalue = sessionStorage.setItem("log", "logout");
};

function post() {
  var sellerName = document.getElementById("sellername").value;
  var sellerNum = document.getElementById("sellernum").value;
  var productTitle = document.getElementById("productName").value;
  var price = document.getElementById("price").value;
  var Location = document.getElementById("Location").value;
  var productDetail = document.getElementById("productDetail").value;
  var Image1 = document.getElementById("img1").value;
  var Image2 = document.getElementById("img2").value;
  var Image3 = document.getElementById("img3").value;
  var obj = {
    sellername: sellerName,
    sellernum: sellerNum,
    product: productTitle,
    price: price,
    image1: Image1,
    image2: Image2,
    image3: Image3,
    description: productDetail,
    postTime: Location,
  };

  var getData = localStorage.getItem("DATA");
  var Arrangedata = JSON.parse(getData);
  Arrangedata.push(obj);
  localStorage.setItem("DATA", JSON.stringify(Arrangedata));
  // console.log(Arrangedata);
  location.href = "index.html";
  // match = false;
  // sessionStorage.setItem("SetData", JSON.stringify(data));
  // console.log(setdata);
}
