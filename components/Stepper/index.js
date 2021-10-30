import styled from "styled-components";
import _map from "lodash/map";
import Step from "./Step";

const currentStep = 2;

const steps = [
  { id: 1, value: "Post quest" },
  { id: 2, value: "Describe job" },
  { id: 3, value: "Set roles" },
  { id: 4, value: "Send Invites" },
];

const StepperWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StepsWrapper = styled.ol`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
  color: #000;
  margin: 0px;
  margin-bottom: 21px;
`;

const Stepper = () => {
  return (
    <StepperWrapper>
      <Title>Mission guide</Title>
      <StepsWrapper>
        {_map(steps, (step) => (
          <Step id={step.id} currentStep={currentStep} label={step.value} />
        ))}
      </StepsWrapper>
    </StepperWrapper>
  );
};

export { Stepper as default, Stepper };
