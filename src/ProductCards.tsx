type ProductProps = {
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: number;
};

function ProductCards({
  name,
  price,
  description,
  image,
  category,
  rating,
}: ProductProps) {
  return (
    <div className="card h-100 shadow-sm product-card">
      <img src={image} className="card-img-top" alt={name} height="210" />

      <div className="card-body d-flex flex-column">
        <span className="badge bg-secondary mb-2">{category}</span>

        <h5 className="card-title">{name}</h5>

        <h6 className="text-primary">₹ {price}</h6>

        <p className="card-text">{description}</p>

        <p className="text-warning">⭐ {rating} / 5</p>

        <button className="btn btn-dark mt-auto">Buy Now</button>
      </div>
    </div>
  );
}

export default ProductCards;
