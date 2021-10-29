import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const Aside = styled.aside`
  flex: 1 1 auto;
  padding: 30px 20px;
  background-color: ${(props) => props.bg};
`;

const Main = styled.main`
  flex: 1 1 75%;
  padding: 30px 20px;
  background-color: ${(props) => props.bg};
`;

const Divider = styled.div`
  background-color: #6a6a6a;
  width: 2px;
  height: 92%;
  align-self: center;
`;

const Layout = ({ aside = "", main = "", debug = false }) => {
  return (
    <Wrapper>
      <Aside bg={debug ? "red" : "transparent"}>{aside}</Aside>
      <Divider />
      <Main bg={debug ? "blue" : "transparent"}>{main}</Main>
    </Wrapper>
  );
};

export { Layout as default, Layout };
