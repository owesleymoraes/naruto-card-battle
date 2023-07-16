import React from "react";
import * as Styled from "./styles";
import cover from "../../../public/images/605592.png";
import { Header } from "../Header";

interface ContainerProps {
  children: React.ReactNode | React.ReactNode[];
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <>
      <Styled.Container>
        <Styled.ContainerWrapper>
          <Header />
        </Styled.ContainerWrapper>
        <img src={cover} />
          <Styled.Content>{children}</Styled.Content>
      </Styled.Container>
    </>
  );
};
