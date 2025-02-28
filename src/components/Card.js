const Card = (props) => {
  const { data } = props;
  const { name, price, image, rating } = data;
  const avg = rating.average;
  return (
    <div className="m-4 p-4 w-[220px] bg-white rounded-lg shadow-lg">
      <div className="text-center">
        <img
          className="h-45"
          src={image}
          onError={(e) =>
            (e.target.src =
              "https://www.shutterstock.com/image-vector/no-image-available-picture-coming-600nw-2057829641.jpg")
          }
        />
      </div>
      <div className="space-y-2">
        <h3 className="font-bold text-lg line-clamp-1">{name}</h3>
        <h4>{price}</h4>
        <h4>{Math.round(avg * 10) / 10} ⭐</h4>
        <h4>{rating.reviews} Reviews</h4>
      </div>
    </div>
  );
};
export default Card;
