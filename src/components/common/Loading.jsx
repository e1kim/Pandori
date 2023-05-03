import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <Container>
      <Spinner src="../../img/Spinner.gif" />
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 50px 0;
`;

const Spinner = styled.img`
  width: 150px;
  height: 150px;
`;