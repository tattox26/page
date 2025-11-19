import Breadcrumb from "@/components/Common/Breadcrumb";
import Pricing from "@/components/Pricing";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contactnos",
  description: "",
  // other metadata
};

const Price = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contactenos"
        description="Contáctanos ahora para optimizar la gestión de tu copropiedad! Descubre cómo nuestra tecnología puede transformar tu administración. No esperes más, ¡mejora la eficiencia y toma el control hoy mismo!"
      />

      <Price />
    </>
  );
};

export default Pricing;
