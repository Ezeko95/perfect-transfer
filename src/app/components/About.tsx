import React, { useState, useEffect } from "react";
import "../globals.css";

interface AboutUsProps {
  sectionRef1: React.RefObject<HTMLDivElement>;
}
const About: React.FC<AboutUsProps> = ({ sectionRef1 }) => {
  const [scrollY, setScrollY] = useState(0);

  const logit = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  }, []);
  return (
    <div className="font-garamond" id="about" ref={sectionRef1}>
      <div className="flex flex-row items-center justify-center px-10 py-8 md:px-20 md:py-16 lg:px-36 lg:py-12 gap-x-6 md:gap-x-12 lg:gap-x-20">
        <div className={` ${scrollY > 20 ? "slide-in-right" : ""}`}>
          <h2 className="text-4xl font-garamond font-light italic text-white py-4 px-6 rounded-t-sm max-w-sm bg-green-700">
            Misión
          </h2>
          <p className="text-2xl max-w-4xl pt-8 text-justify text-black font-normal rounded-b-sm rounded-r-sm">
            Estamos comprometidos a ser el socio confiable y líder en la
            distribución de insumos gráficos, proporcionando productos de
            calidad excepcional que potencien la creatividad y la excelencia en
            la industria de la impresión. Buscamos superar las expectativas de
            nuestros clientes, brindando soluciones innovadoras y un servicio
            excepcional que impulse su éxito.
          </p>
        </div>
        <div className={` ${scrollY > 20 ? "slide-in-right" : ""}`}>
          <img src="/prueba.jpg" width={"620"} alt="prueba" />
        </div>
      </div>
      <div className="flex flex-row-reverse items-center justify-center px-10 py-8 md:px-20 md:py-16 lg:px-36 lg:py-12 gap-x-6 md:gap-x-12 lg:gap-x-20">
        <div className={` ${scrollY > 400 ? "slide-in-left" : ""}`}>
          <h2 className="text-4xl max-w-sm font-garamond font-light italic text-white py-4 px-6 rounded-t-sm bg-green-700">
            Nuestra visión
          </h2>
          <p className="text-2xl font-light text-justify max-w-4xl py-8 text-black">
            Ser reconocidos como la opción preferida y de referencia en la
            industria gráfica, destacando por nuestra excelencia en la calidad
            de productos, servicio al cliente y compromiso con el crecimiento
            sostenible. Aspiramos a expandir nuestra presencia global y ser el
            catalizador de la innovación en la industria de impresión gráfica.
          </p>
        </div>
        <div className={` ${scrollY > 400 ? "slide-in-left" : ""}`}>
          <img src="/prueba2.jpg" alt="prueba2" width={"620"} />
        </div>
      </div>
    </div>
  );
};

export default About;
