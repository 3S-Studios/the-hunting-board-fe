import Layout from "../components/Base/Layout";
import Stepper from "../components/Stepper";
import PostStep from "../components/Steps/PostStep";

const MainPage = () => {
  return <Layout aside={<Stepper />} main={<PostStep />} />;
};

export { MainPage as default, MainPage };
