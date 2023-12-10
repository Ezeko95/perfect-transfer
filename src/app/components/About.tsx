import React from "react";

interface AboutUsProps {
  sectionRef1: React.RefObject<HTMLDivElement>;
}
const About: React.FC<AboutUsProps> = ({ sectionRef1 }) => {
  return (
    <div className="font-garamond" id="about" ref={sectionRef1}>
      <div className="flex flex-row items-start justify-center">
        <div className="p-36 pl-24 ">
          <h2 className="text-4xl text-white py-4 px-6 rounded-t-sm max-w-sm bg-gray-900">
            Misión
          </h2>
          <p className="text-2xl max-w-4xl pt-8  text-black font-normal rounded-b-sm rounded-r-sm">
            Estamos comprometidos a ser el socio confiable y líder en la
            distribución de insumos gráficos, proporcionando productos de
            calidad excepcional que potencien la creatividad y la excelencia en
            la industria de la impresión. Buscamos superar las expectativas de
            nuestros clientes, brindando soluciones innovadoras y un servicio
            excepcional que impulse su éxito.
          </p>
        </div>
        <div className="flex justify-center">
          <img src="/prueba.jpg" width={"620"} alt="prueba" />
        </div>
      </div>
      <div className="flex flex-row-reverse items-start justify-center">
        <div className="p-36 pl-24 ">
          <h2 className="text-4xl p-6 max-w-sm text-white rounded-t-sm bg-gray-900">
            Nuestra visión
          </h2>
          <p className="text-2xl font-light max-w-4xl py-8 text-black">
            Ser reconocidos como la opción preferida y de referencia en la
            industria gráfica, destacando por nuestra excelencia en la calidad
            de productos, servicio al cliente y compromiso con el crecimiento
            sostenible. Aspiramos a expandir nuestra presencia global y ser el
            catalizador de la innovación en la industria de impresión gráfica.
          </p>
        </div>
        <div>
          <img src="/prueba2.jpg" alt="prueba2" width={"620"} />
        </div>
      </div>
      <div className="flex flex-row items-start gap-y-20 mx-16">
        <div className="p-36 pl-24 ">
          <h2 className="text-4xl max-w-sm font-garamond font-light p-6 text-white bg-gray-900 rounded-t-sm">
            Objetivos:
          </h2>
          <ol className="text-2xl font-light max-w-7xl pt-8 text-blacklist-disc">
            <li>
              Excelencia en la calidad: Proveer insumos gráficos de la más alta
              calidad para satisfacer las necesidades de nuestros clientes.
            </li>
            <li>
              Servicio al cliente excepcional: Brindar un servicio
              personalizado, ágil y confiable que supere las expectativas de
              nuestros clientes en cada interacción.
            </li>
            <li>
              Innovación continua: Estar a la vanguardia de la industria,
              ofreciendo productos innovadores y soluciones creativas para la
              impresión gráfica.
            </li>
            <li>
              Crecimiento sostenible: Expandir nuestra presencia de manera
              sostenible, manteniendo nuestro compromiso con la responsabilidad
              social y ambiental.
            </li>
          </ol>
        </div>
        <div>
          <img src="/prueba3.jpg" alt="prueba3" width={"620"} />
        </div>
      </div>
      <div className="flex flex-row-reverse items-end gap-y-20 justify-center">
        <div className="p-36 pl-24">
          <h2 className="text-4xl max-w-sm font-garamond p-6 text-white bg-gray-900 rounded-t-sm">
            Valores:
          </h2>
          <ol className="text-black font-garamond text-2xl py-8 max-w-6xl  list-disc rounded-b-sm rounded-l-sm">
            <li>
              Calidad: Comprometidos con la excelencia en la calidad de nuestros
              productos y servicios.
            </li>
            <li>
              Integridad: Actuar con honestidad, transparencia y ética en todas
              nuestras operaciones.
            </li>
            <li>
              Innovación: Fomentar la creatividad y la innovación para impulsar
              el progreso.
            </li>
            <li>
              Colaboración: Trabajar en equipo y fomentar relaciones sólidas con
              clientes y socios.
            </li>
            <li>
              Sostenibilidad: Contribuir positivamente al entorno social y
              medioambiental.
            </li>
          </ol>
        </div>
        <div>
          <img src="/prueba4.jpg" alt="prueba4" width={"620"} />
        </div>
      </div>
    </div>
  );
};

export default About;
