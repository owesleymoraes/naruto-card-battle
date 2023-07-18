import styled from "styled-components";

export const Container = styled.div`
  /* reset CSS  */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #000000;
  font-family: "Roboto Mono", monospace;
  position: relative;
  width: 100%;
  height: 700px;
  padding-bottom: 20vh;
  text-align: center;
  padding: 8px;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-height: 414px) {
    height: 400px;
  }
`;

export const ContainerWrapper = styled.div`
  position: absolute;
  top: 4%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  background: transparent;
  background-color: transparent;
  background: none;
  width: 300px;
  height: 300px;
  border: 4px solid red;
`;
