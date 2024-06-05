import React, { useState, useEffect, useRef } from "react";
import "../globals.css";
import Image from "next/image";

interface AboutUsProps {
  sectionRef1: React.RefObject<HTMLDivElement>;
}
const About: React.FC<AboutUsProps> = ({ sectionRef1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, options);

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, [componentRef]);
  return (
    <div className="font-garamond w-11/12 mx-auto" id="about" ref={sectionRef1}>
      <div className="flex flex-row items-center justify-center px-8 py-6 md:px-20 md:py-16 lg:px-36 lg:py-12 gap-x-6 md:gap-x-12 lg:gap-x-20">
        <div
          className={` ${!isVisible ? "" : "slide-in-right"}`}
          ref={componentRef}>
          <h2 className="text-lg md:text-4xl font-garamond font-light italic text-white py-2 px-4 md:py-4 md:px-6 rounded-t-sm max-w-sm bg-green-700">
            Misión
          </h2>
          <p className="text-md md:text-xl max-w-4xl pt-8 text-justify text-black font-normal rounded-b-sm rounded-r-sm">
            Estamos comprometidos a ser el socio confiable y líder en la
            distribución de insumos gráficos, proporcionando productos de
            calidad excepcional que potencien la creatividad y la excelencia en
            la industria de la impresión. Buscamos superar las expectativas de
            nuestros clientes, brindando soluciones innovadoras y un servicio
            excepcional que impulse su éxito.
          </p>
        </div>
        <div
          className={` ${!isVisible ? "" : "slide-in-right"}`}
          ref={componentRef}>
          <Image
            src="/impresion-digital.jpg"
            alt="impresion-digital"
            width={"620"}
            height={"348"}
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex flex-row-reverse items-center justify-center px-8 py-6 md:px-20 md:py-16 lg:px-36 lg:py-12 gap-x-6 md:gap-x-12 lg:gap-x-20">
        <div
          className={` ${!isVisible ? "hidden-element" : "slide-in-right"}`}
          ref={componentRef}>
          <h2 className="text-lg md:text-4xl max-w-sm font-garamond font-light italic text-white py-2 px-4 md:py-4 md:px-6 rounded-t-sm bg-green-700">
            Nuestra visión
          </h2>
          <p className="text-md md:text-xl font-light text-justify max-w-4xl py-8 text-black">
            Ser reconocidos como la opción preferida y de referencia en la
            industria gráfica, destacando por nuestra excelencia en la calidad
            de productos, servicio al cliente y compromiso con el crecimiento
            sostenible. Aspiramos a expandir nuestra presencia global y ser el
            catalizador de la innovación en la industria de impresión gráfica.
          </p>
        </div>
        <div
          className={` ${!isVisible ? "hidden-element" : "slide-in-right"}`}
          ref={componentRef}>
          <Image
            src="/impresion-digital-2.jpg"
            alt="impresion-digital-2"
            width={"620"}
            height={"348"}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
