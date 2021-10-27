import styled from "styled-components";

export default styled.button`
  background-color: ${(props) => props.bg || "red"};
  color: ${(props) => props.color};
  border: none;
  border-radius: 5px;
  padding: 20px;
  font-size: 1.5rem;
`;
