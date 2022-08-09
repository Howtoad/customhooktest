import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const { data, isLoading } = useFetch(
    "https://pokeapi.co/api/v2/pokemon?limit=10"
  );

  return (
    <div className="App">
      {data.results?.map((item) => (
        <p key={item.name}>
          <Link to={"/pokemon/" + item.name}>{item.name}</Link>
        </p>
      ))}
      :
    </div>
  );
};

export default Home;
