/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const SearchButton = ({ urlAmount, setUrl }) => {
  const styles = {
    searchButton: css`
      width: 50px;
      height: 40px;
      background-color: #28abfd;
      border: 1px solid black;
    `,
  };

  return (
    <div
      css={styles.searchButton}
      onClick={() => {
        setUrl(urlAmount);
        console.log("123");
      }}
    ></div>
  );
};

export default SearchButton;
