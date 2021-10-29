import { Checkbox } from "@mui/material";
import styled from "styled-components";

const Wrapper = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  color: ${(props) => (props.currentStep ? "#000" : "#6A6A6A")};
  font-weight: ${(props) => (props.currentStep ? 500 : 300)};
  margin-bottom: 2px;
`;

const StyledCheckbox = styled(Checkbox)`
  svg {
    fill: ${(props) => (props.currentStep ? "#000" : "#6a6a6a")};
  }
`;

const Step = ({ label, currentStep = false }) => {
  return (
    <Wrapper>
      <StyledCheckbox
        name={label}
        title={label}
        currentStep={currentStep}
        disabled
        disableRipple
      />
      <Label htmlFor={label} currentStep={currentStep}>
        {label} {currentStep && "(current)"}
      </Label>
    </Wrapper>
  );
};

export { Step as default, Step };
