import { useLocation } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const { data } = location.state;

  return (
    <div className="flex p-4">
      <img src={data.image} />
      <div>
        <h1 className="font-bold text-3xl">$ {data.price}</h1>
        <h1 className="mt-5">
          <span className="font-semibold">Category</span> : {data.category}
        </h1>
        <h1 className="mt-5">
          <span className="font-semibold">Title</span> : {data.title}
        </h1>
        <h1 className="mt-5">
          <span className="font-semibold">Description</span> : {data.description}
        </h1>
      </div>
    </div>
  );
};

export default Details;
