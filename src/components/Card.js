const Card = (props) => {
  const { data } = props;
  const { name, price, image, rating } = data;
  const avg = rating.average;
  return (
    <div className="m-4 p-4 w-[200px] bg-gray-100 rounded-lg shadow-lg">
      <img className="h-auto" src={image} alt="image" />
      <div className="space-y-2">
        <h3 className="font-bold line-clamp-1">{name}</h3>
        <h4>{price}</h4>
        <h4>{Math.round(avg * 10) / 10} stars</h4>
        <h4>{rating.reviews} Reviews</h4>
      </div>
    </div>
  );
};
export default Card;
