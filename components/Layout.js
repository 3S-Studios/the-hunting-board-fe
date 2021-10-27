import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const Aside = styled.aside`
  flex: 1 1 auto;
  background-color: ${(props) => props.bg};
`;

const Main = styled.main`
  flex: 1 1 75%;
  background-color: ${(props) => props.bg};
`;

const Layout = ({ debug = false }) => {
  return (
    <Wrapper>
      <Aside bg={debug ? "red" : "transparent"} />
      <Main bg={debug ? "blue" : "transparent"} />
    </Wrapper>
  );
};

export { Layout as default, Layout };
