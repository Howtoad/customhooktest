/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
const DownButton = () => {
  const styles = {
    downButton: css`
      width: 30px;
      height: 50px;
      background-color: #000000;
      border: 1px solid black;
      padding-top: 5px;
      transform: rotate(180deg);
      grid-row: 3/4;
      grid-column: 2/3;
    `,
    directionIndicator: css`
      width: 16px;
      height: 11px;
      background-color: #6e6b6b;
      border-radius: 40%;
      border: 1px solid black;
      margin: 0 auto;
    `,
  };
  return (
    <div css={styles.downButton}>
      <div css={styles.directionIndicator}></div>
    </div>
  );
};

export default DownButton;
