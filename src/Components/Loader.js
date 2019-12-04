import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height:100vh;
    width:100vw;
    display:flex;
    justify-content:center;
    font-size : 12px;
    margin-top:20px;
`;

export default () => (
    <Container>
        <span role="img" aria-label="Loading">
            "Loading..."
        </span>
    </Container>
);
//시각 장애인에게 페이지가 넘어갈때 '로딩'이라고 읽어줌