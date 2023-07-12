import styled from "styled-components";
import capa from "../../../public/images/capa.png";

export const Container = styled.div`
  /* reset CSS  */
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: "Roboto Mono", monospace;
  min-height: 854px;
  background-image: url(${capa});
  background-color: #000000;
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  padding-bottom: 20vh;

  text-align: center;
    padding: 20px;
`;
