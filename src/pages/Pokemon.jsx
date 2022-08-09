/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Types from "../Types";
const Pokemon = () => {
  const styles = {
    name: css`
      text-transform: capitalize;
    `,
  };
  const { name } = useParams();
  const { data, isLoading } = useFetch(
    "https://pokeapi.co/api/v2/pokemon/" + name
  );
  return (
    <div>
      {isLoading ? (
        <p>Loading..</p>
      ) : (
        <>
          <h1 css={styles.name}>{data.name}</h1>
          <Types types={data.types} />
        </>
      )}
    </div>
  );
};

export default Pokemon;
