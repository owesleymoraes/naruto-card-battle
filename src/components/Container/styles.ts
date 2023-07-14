import styled from "styled-components";
import cover from "../../../public/images/cover.svg";

export const Container = styled.body`
  /* reset CSS  */
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: "Roboto Mono", monospace;
  min-height: 854px;
  background-image: url(${cover});
  background-color: #000000;
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  padding-bottom: 20vh;

  text-align: center;
  padding: 20px;
`;
