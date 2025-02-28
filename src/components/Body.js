import { useEffect, useState } from "react";
import Card from "./Card";

const Body = () => {
  const [listOfItems, setListOfItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://api.sampleapis.com/beers/ale");
    const json = await data.json();
    console.log(json);
    setListOfItems(json);
  };

  return (
    <div className="flex flex-wrap justify-center">
      {listOfItems.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Body;
