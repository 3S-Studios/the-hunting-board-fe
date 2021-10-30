import styled from "styled-components";
import Button from "../Base/Button";

const Wrapper = styled.div`
  align-self: center;
  justify-self: center;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 800;
  color: #000;
  margin: 0;
`;

const Subtitle = styled.h2`
  font-size: 48px;
  font-weight: 800;
  color: #000;
  margin: 0;
  margin-bottom: 60px;
`;

const ButtonWrapper = styled.div`
  button:first-child {
    margin-bottom: 32px;
  }
`;

const PostStep = () => {
  return (
    <Wrapper>
      <Title>Hello adventurer,</Title>
      <Subtitle>What are you looking for?</Subtitle>
      <ButtonWrapper>
        <Button>Players for my team</Button>
        <Button variant="secondary">A group to join</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export { PostStep as default, PostStep };
