/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import DownButton from "../components/DownButton";
import LeftButton from "../components/LeftButton";
import RightButton from "../components/RightButton";
import SearchButton from "../components/SearchButton";
import SelectedPokemon from "../components/SelectedPokemon";
import UpButton from "../components/UpButton";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const styles = {
    appcontainer: css`
      overflow-y: scroll;
      height: 40vh;
      width: 300px;
      grid-column: 1/2;
      grid-row: 1/2;
    `,
    buttons: css`
      width: 50px;
      height: 40px;
      background-color: #28abfd;
      border: 1px solid black;
    `,
    buttoncontainer: css`
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      max-width: 255px;
    `,
    navcontainer: css`
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      width: 95px;
      height: 155px;
      grid-column: 2/3;
      grid-row: 1/2;
    `,
    gridder: css`
      display: grid;
      grid-template-columns: 400px;
    `,
  };
  const [url, setUrl] = useState(null);
  const { data, isLoading } = useFetch(url); // useFetch is a custom hook

  return (
    <>
      <div className="gridder" css={styles.gridder}>
        <div className="App" css={styles.appcontainer}>
          {isLoading ? (
            <p>Awaiting your button press..</p>
          ) : (
            data.results?.map((item) => (
              <p key={item.name}>
                <Link to={"/pokemon/" + item.name}>{item.name}</Link>
                <SelectedPokemon name={item.name} />
              </p>
            ))
          )}
        </div>
        <div className="navcontainer" css={styles.navcontainer}>
          <UpButton />
          <DownButton />
          <LeftButton />
          <RightButton />
        </div>
        <div css={styles.buttoncontainer}>
          <SearchButton
            urlAmount="https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
            setUrl={setUrl}
          />
          <SearchButton
            urlAmount="https://pokeapi.co/api/v2/pokemon?limit=10&offset=10"
            setUrl={setUrl}
          />
          <SearchButton
            urlAmount="https://pokeapi.co/api/v2/pokemon?limit=10&offset=20"
            setUrl={setUrl}
          />
          <SearchButton
            urlAmount="https://pokeapi.co/api/v2/pokemon?limit=10&offset=30"
            setUrl={setUrl}
          />
          <SearchButton
            urlAmount="https://pokeapi.co/api/v2/pokemon?limit=10&offset=40"
            setUrl={setUrl}
          />
          <SearchButton
            urlAmount="https://pokeapi.co/api/v2/pokemon?limit=10&offset=50"
            setUrl={setUrl}
          />
          <SearchButton
            urlAmount="https://pokeapi.co/api/v2/pokemon?limit=10&offset=60"
            setUrl={setUrl}
          />
          <SearchButton
            urlAmount="https://pokeapi.co/api/v2/pokemon?limit=10&offset=70"
            setUrl={setUrl}
          />
          <SearchButton
            urlAmount="https://pokeapi.co/api/v2/pokemon?limit=10&offset=80"
            setUrl={setUrl}
          />
          <SearchButton
            urlAmount="https://pokeapi.co/api/v2/pokemon?limit=10&offset=90"
            setUrl={setUrl}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
