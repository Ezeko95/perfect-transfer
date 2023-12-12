import React from "react";

interface AboutUsProps {
  sectionRef1: React.RefObject<HTMLDivElement>;
}
const About: React.FC<AboutUsProps> = ({ sectionRef1 }) => {
  return (
    <div className="font-garamond " id="about" ref={sectionRef1}>
      <div className="flex flex-row items-center justify-center px-36 py-12">
        <div>
          <h2 className="text-4xl font-garamond font-light italic text-white py-4 px-6 rounded-t-sm max-w-sm bg-gray-900">
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

        <div className="">
          <img src="/prueba.jpg" width={"620"} alt="prueba" />
        </div>
      </div>
      <div className="flex flex-row-reverse items-center justify-center px-36 py-12 gap-x-20">
        <div>
          <h2 className="text-4xl max-w-sm font-garamond font-light italic text-white py-4 px-6 rounded-t-sm bg-gray-900">
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
        <div className="">
          <img src="/prueba2.jpg" alt="prueba2" width={"620"} />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center px-36 py-12 gap-x-20">
        <div className="">
          <h2 className="text-4xl max-w-sm font-garamond font-light italic py-4 px-6 text-white bg-gray-900 rounded-t-sm">
            Objetivos
          </h2>
          <ol className="text-xl text-justify font-light max-w-7xl pt-8 text-blacklist-disc">
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
        <div className="">
          <img src="/prueba3.jpg" alt="prueba3" width={"620"} />
        </div>
      </div>
      <div className="flex flex-row-reverse justify-center items-center px-36 py-5 gap-x-20">
        <div className="">
          <h2 className="text-4xl max-w-sm font-garamond font-light italic py-4 px-6 text-white bg-gray-900 rounded-t-sm">
            Valores
          </h2>
          <ol className="text-black text-justify font-garamond text-xl py-8 max-w-6xl rounded-b-sm rounded-l-sm">
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
        <div className="">
          <img src="/prueba4.jpg" alt="prueba4" width={"620"} />
        </div>
      </div>
    </div>
  );
};

export default About;
