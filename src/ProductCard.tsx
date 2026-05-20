type ProductCardProps = {
  productName: string;
  price: number;
  features: string[];
};

function ProductCard(props: ProductCardProps) {
  return (
    <div className="container mx-auto border border-primary p-4 rounded mb-4">
      <h2 className="text-warning">Product Details</h2>
      <h3 className="text-info">Name - {props.productName}</h3>
      <h4 className="text-secondary">Price - ${props.price}</h4>
      <h5 className="text-danger">Features: </h5>
      <ul>
        {props.features.map((feature) => (
          <li>{feature}</li>
        ))}
      </ul>
    </div>
  );
}
export default ProductCard;
