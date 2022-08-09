/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const styles = {
    appcontainer: css`
      overflow-y: scroll;
      height: 80vh;
      width: 30%;
    `,
  };
  const { data, isLoading } = useFetch(
    "https://pokeapi.co/api/v2/pokemon?limit=100"
  );

  return (
    <div className="App" css={styles.appcontainer}>
      {isLoading ? (
        <p>Loading..</p>
      ) : (
        data.results?.map((item) => (
          <p key={item.name}>
            <Link to={"/pokemon/" + item.name}>{item.name}</Link>
          </p>
        ))
      )}
      :
    </div>
  );
};

export default Home;
