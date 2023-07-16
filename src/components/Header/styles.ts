import styled from "styled-components";

export const Container = styled.div`
  display: inline-flex;
  
  
`;

export const Static = styled.div`
  color: #ffd700;
  font-size: 60px;

  font-weight: 400;
  font-size: 38px;
`;

export const Dynamic = styled.ul`
  margin: 0;
  list-style-type: none;
  height: 33px;
  /* height: 80px; */
  overflow: hidden;
`;

export const ListDynamic = styled.li`
  font-size: 20px;
  /* font-size: 60px; */
  font-weight: 500;
  color: #8a2be2;
  left: 0;
  position: relative;
  top: 0;
  animation: slide 8s steps(4) infinite;
  font-size: 38px;

  @keyframes slide {
    100% {
      top: -172px;
      /* top: -280px; */
    }
  }
`;

export const ContentDynamic = styled.span`
  display: flex;
  position: relative;
  align-items: flex-start;

  @keyframes typing {
    0% {
      left: 0;
      margin: 0;
      opacity: 0;
    }
    100% {
      left: 100%;
      margin: 0 -35px 0 35px;
      opacity: 1;
    }
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    animation: typing 1.5s steps(10) infinite;
  }
`;
