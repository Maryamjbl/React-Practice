function ProductObject() {
  const products = [
    {
      title: "Laptop",
      description: "A high-performance laptop for work and play.",
      price: 999.99
    },
    {
        title: "Smartphone",
        description: "A sleek smartphone with the latest features.",
        price: 699.99
    },
    {
        title: "Headphones",
        description: "Noise-cancelling headphones for immersive sound.",
        price: 199.99
    },
    {
        title: "Smartwatch",
        description: "A stylish smartwatch to keep you connected on the go.",
        price: 299.99
    },
    {
        title: "Tablet",
        description: "A versatile tablet for work and entertainment.",
        price: 399.99
    }
  ];

  return (
   <div className="p-4">
      <h2 style={{ color: "green" }}>Product List</h2>
      <ul className="list-group">
        {products.map((product) => (
          <li className="list-group-item " key={product.title}>
            <h3 className="fw-bold">{product.title}</h3>
            <p className="text-muted">{product.description}</p>
            <p className="text-danger"><strong>Price: ${product.price}</strong></p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductObject;