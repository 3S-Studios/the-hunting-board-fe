import styled from "styled-components";

const getBackgroundColour = (variant) => {
  switch (variant) {
    case "primary":
      return "#3CAEA3";
    case "secondary":
      return "transparent";
    default:
      return "#3CAEA3";
  }
};

const getColour = (variant) => {
  switch (variant) {
    case "primary":
      return "#FFF";
    case "secondary":
      return "#3CAEA3";
    default:
      return "#000";
  }
};

const getBorder = (variant) => {
  switch (variant) {
    case "primary":
      return "none";
    case "secondary":
      return "3px solid #3CAEA3";
    default:
      return "#000";
  }
};

const StyledButton = styled.button`
  background-color: ${({ variant }) => getBackgroundColour(variant)};
  color: ${({ variant }) => getColour(variant)};
  border: ${({ variant }) => getBorder(variant)};
  border-radius: 5px;
  padding: 6px 0;
  font-size: 48px;
  width: 100%;
  cursor: pointer;
`;

const Button = ({ variant = "primary", children }) => (
  <StyledButton variant={variant}>{children}</StyledButton>
);

export { Button as default, Button };
