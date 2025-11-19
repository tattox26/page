import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contactnos",
  description: "",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contactenos"
        description="Contáctanos ahora para optimizar la gestión de tu copropiedad! Descubre cómo nuestra tecnología puede transformar tu administración. No esperes más, ¡mejora la eficiencia y toma el control hoy mismo!"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
