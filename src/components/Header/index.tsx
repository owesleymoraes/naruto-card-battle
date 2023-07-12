import React from "react";
import * as Styled from "./styles";

export const Header: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.Static>Naruto</Styled.Static>
      <Styled.Dynamic>
        <Styled.ListDynamic>
          <Styled.ContentDynamic>Classic</Styled.ContentDynamic>
        </Styled.ListDynamic>
        <Styled.ListDynamic>
          <Styled.ContentDynamic>Shippuden</Styled.ContentDynamic>
        </Styled.ListDynamic>
        <Styled.ListDynamic>
          <Styled.ContentDynamic>Card</Styled.ContentDynamic>
        </Styled.ListDynamic>
        <Styled.ListDynamic>
          <Styled.ContentDynamic>Battle</Styled.ContentDynamic>
        </Styled.ListDynamic>
      </Styled.Dynamic>
    </Styled.Container>
  );
};
