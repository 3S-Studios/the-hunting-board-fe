import Layout from "../components/Base/Layout";
import Stepper from "../components/Stepper";

const MainPage = () => {
  return <Layout aside={<Stepper />} />;
};

export { MainPage as default, MainPage };
