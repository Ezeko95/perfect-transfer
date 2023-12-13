import React, { useState, useEffect } from "react";
import "../globals.css";

interface AboutUsProps {
  sectionRef1: React.RefObject<HTMLDivElement>;
}
const About: React.FC<AboutUsProps> = ({ sectionRef1 }) => {
  const [scrollY, setScrollY] = useState(0);

  const logit = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });
  return (
    <div className="font-garamond " id="about" ref={sectionRef1}>
      <div className="flex flex-row items-center justify-center px-10 py-8 md:px-20 md:py-16 lg:px-36 lg:py-12 gap-x-6 md:gap-x-12 lg:gap-x-20">
        <div className={` ${scrollY > 0 ? "slide-in-right" : ""}`}>
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

        <div className={` ${scrollY > 0 ? "slide-in-right" : ""}`}>
          <img src="/prueba.jpg" width={"620"} alt="prueba" />
        </div>
      </div>
      <div className="flex flex-row-reverse items-center justify-center px-10 py-8 md:px-20 md:py-16 lg:px-36 lg:py-12 gap-x-6 md:gap-x-12 lg:gap-x-20">
        <div className={` ${scrollY > 636 ? "slide-in-left" : ""}`}>
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
        <div className={` ${scrollY > 636 ? "slide-in-left" : ""}`}>
          <img src="/prueba2.jpg" alt="prueba2" width={"620"} />
        </div>
      </div>
      {/* <div className="flex flex-row items-center justify-center px-10 py-8 md:px-20 md:py-16 lg:px-36 lg:py-12 gap-x-6 md:gap-x-12 lg:gap-x-20">
        <div className={` ${scrollY > 1139 ? "slide-in-right" : ""}`}>
          <h2 className="text-4xl max-w-sm font-garamond font-light italic py-4 px-6 text-white bg-green-700 rounded-t-sm">
            Objetivos
          </h2>
          <ol className="text-xl text-left md:text-justify font-light max-w-7xl pt-8 text-blacklist-disc">
            <li>
              <span className=" font-bold text-2xl">
                Excelencia en la calidad:
              </span>{" "}
              Proveer insumos gráficos de la más alta calidad para satisfacer
              las necesidades de nuestros clientes.
            </li>
            <li>
              <span className=" font-bold text-2xl">
                Servicio al cliente excepcional:
              </span>{" "}
              Brindar un servicio personalizado, ágil y confiable.
            </li>
            <li>
              <span className=" font-bold text-2xl">Innovación continua:</span>{" "}
              Estar a la vanguardia de la industria, ofreciendo productos
              innovadores y soluciones creativas.
            </li>
            <li>
              <span className=" font-bold text-2xl">
                Crecimiento sostenible:
              </span>{" "}
              Expandir nuestra presencia de manera sostenible, manteniendo
              nuestro compromiso con la responsabilidad social y ambiental.
            </li>
          </ol>
        </div>
        <div className={` ${scrollY > 1139 ? "slide-in-right" : ""}`}>
          <img src="/prueba3.jpg" alt="prueba3" width={"620"} />
        </div>
      </div>
      <div className="flex flex-row-reverse justify-center items-center px-10 py-8 md:px-20 md:py-16 lg:px-36 lg:py-12 gap-x-6 md:gap-x-12 lg:gap-x-20">
        <div className={` ${scrollY > 1739 ? "slide-in-left" : ""}`}>
          <h2 className="text-4xl max-w-sm font-garamond font-light italic py-4 px-6 text-white bg-green-700 rounded-t-sm">
            Valores
          </h2>
          <ol className="text-black text-left md:text-left lg:text-justify font-garamond text-xl py-8 max-w-6xl rounded-b-sm rounded-l-sm">
            <li>
              <span className=" font-bold text-2xl">Calidad:</span>{" "}
              Comprometidos con la excelencia en la calidad de nuestros
              productos y servicios.
            </li>
            <li>
              <span className=" font-bold text-2xl">Integridad:</span> Actuar
              con honestidad, transparencia y ética en todas nuestras
              operaciones.
            </li>
            <li>
              <span className=" font-bold text-2xl">Innovación:</span> Fomentar
              la creatividad y la innovación para impulsar el progreso.
            </li>
            <li>
              <span className=" font-bold text-2xl">Colaboración:</span>{" "}
              Trabajar en equipo y fomentar relaciones sólidas con clientes y
              socios.
            </li>
            <li>
              <span className=" font-bold text-2xl">Sostenibilidad:</span>{" "}
              Contribuir positivamente al entorno social y medioambiental.
            </li>
          </ol>
        </div>
        <div className={` ${scrollY > 1739 ? "slide-in-left" : ""}`}>
          <img src="/prueba4.jpg" alt="prueba4" width={"620"} />
        </div>
      </div> */}
    </div>
  );
};

export default About;
