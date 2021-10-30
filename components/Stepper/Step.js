import { Checkbox } from "@mui/material";
import styled from "styled-components";

const Wrapper = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  color: ${({ currentStep, id }) => (id === currentStep ? "#000" : "#6A6A6A")};
  font-weight: ${({ currentStep, id }) => (id === currentStep ? 500 : 300)};
  text-decoration: ${({ currentStep, id }) =>
    id < currentStep && "line-through"};
  margin-bottom: 2px;
`;

const StyledCheckbox = styled(Checkbox)`
  svg {
    fill: ${({ id, currentStep }) => (id === currentStep ? "#000" : "#6a6a6a")};
  }
`;

const Step = ({ id, label, currentStep }) => {
  return (
    <Wrapper>
      <StyledCheckbox
        name={label}
        title={label}
        currentStep={id === currentStep}
        checked={id < currentStep}
        disabled
        disableRipple
      />
      <Label htmlFor={label} currentStep={currentStep} id={id}>
        {label} {currentStep && "(current)"}
      </Label>
    </Wrapper>
  );
};

export { Step as default, Step };
