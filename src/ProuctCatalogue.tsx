import ProductCard from "./ProductCards";

function ProductCatalogue() {

  const products = [
    {
      name: "Wireless Headphones",
      price: 2499,
      description: "High quality wireless sound experience.",
      image: "https://picsum.photos/300/200?1",
      category: "Electronics",
      rating: 4.5
    },
    {
      name: "Smart Watch",
      price: 3999,
      description: "Track fitness and notifications easily.",
      image: "https://picsum.photos/300/200?2",
      category: "Wearables",
      rating: 4.3
    },
    {
      name: "Gaming Mouse",
      price: 1499,
      description: "RGB gaming mouse with fast response.",
      image: "https://picsum.photos/300/200?3",
      category: "Accessories",
      rating: 4.6
    },
    {
      name: "Bluetooth Speaker",
      price: 1999,
      description: "Portable speaker with deep bass.",
      image: "https://picsum.photos/300/200?4",
      category: "Audio",
      rating: 4.2
    },
    {
      name: "Laptop Bag",
      price: 999,
      description: "Stylish and water-resistant laptop bag.",
      image: "https://picsum.photos/300/200?5",
      category: "Bags",
      rating: 4.1
    },
    {
      name: "Mechanical Keyboard",
      price: 2999,
      description: "Smooth typing experience for professionals.",
      image: "https://picsum.photos/300/200?6",
      category: "Accessories",
      rating: 4.7
    }
  ];

  return (
    <div className="container mt-4">

      <h2 className="text-center mb-4">
        Product Catalogue
      </h2>

      <div className="row g-4">
        {products.map((product, index) => (
          <div className="col-md-4" key={index}>
            <ProductCard
              name={product.name}
              price={product.price}
              description={product.description}
              image={product.image}
              category={product.category}
              rating={product.rating}
            />
          </div>
        ))}
      </div>

    </div>
  );
}

export default ProductCatalogue;