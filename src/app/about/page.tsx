import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quierenes somos",
  description: "",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Quienes somos"
        description="En SamCopropiedad, somos una empresa de tecnología especializada en el desarrollo de software para la gestión eficiente de copropiedades. Nuestra solución integra herramientas avanzadas de contabilidad y administración, diseñadas para simplificar la operación diaria de conjuntos residenciales, edificios y propiedades horizontales"
      />      
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
