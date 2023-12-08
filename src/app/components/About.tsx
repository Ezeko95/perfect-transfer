import React from "react";

interface AboutUsProps {
  sectionRef1: React.RefObject<HTMLDivElement>;
}
const About: React.FC<AboutUsProps> = ({ sectionRef1 }) => {
  return (
    <div className="" id="about" ref={sectionRef1}>
      <div className="flex flex-col items-start p-44 pl-32 bg-gradient-to-r from-black via-gray-500 to-white">
        <h2 className="text-4xl font py-4 max-w-sm text-white">Misión</h2>
        <p className="text-lg max-w-4xl text-white">
          En Perfect Transfer, nos comprometemos a ser el socio confiable y
          líder en la distribución de insumos gráficos, proporcionando productos
          de calidad excepcional que potencien la creatividad y la excelencia en
          la industria de la impresión. Buscamos superar las expectativas de
          nuestros clientes, brindando soluciones innovadoras y un servicio
          excepcional que impulse su éxito.
        </p>
      </div>
      <div className="flex flex-col items-end p-44 pr-32 bg-gradient-to-l from-black via-gray-500 to-white">
        <h2 className="text-4xl py-4 max-w-sm text-white">Nuestra visión</h2>
        <p className="text-lg max-w-4xl text-white">
          Ser reconocidos como la opción preferida y de referencia en la
          industria gráfica, destacando por nuestra excelencia en la calidad de
          productos, servicio al cliente y compromiso con el crecimiento
          sostenible. Aspiramos a expandir nuestra presencia global y ser el
          catalizador de la innovación en la industria de impresión gráfica.
        </p>
      </div>
      <div className="flex flex-col items-start p-44 pb-32 bg-gradient-to-r from-black via-gray-500 to-white">
        <h2 className="text-4xl py-4 text-white">Objetivos:</h2>
        <ol className="text-white text-lg max-w-6xl">
          <li>
            Excelencia en la calidad: Proveer insumos gráficos de la más alta
            calidad para satisfacer las necesidades de nuestros clientes.
          </li>
          <li>
            Servicio al cliente excepcional: Brindar un servicio personalizado,
            ágil y confiable que supere las expectativas de nuestros clientes en
            cada interacción.
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
      <div className="flex flex-col items-end p-44 pr-32 bg-gradient-to-l from-black via-gray-500 to-white">
        <h2 className="text-4xl py-4 text-white">Valores:</h2>
        <ol className="text-white text-lg max-w-6xl">
          <li>
            Calidad: Comprometidos con la excelencia en la calidad de nuestros
            productos y servicios.
          </li>
          <li>
            Integridad: Actuar con honestidad, transparencia y ética en todas
            nuestras operaciones.
          </li>
          <li>
            Innovación: Fomentar la creatividad y la innovación para impulsar el
            progreso.
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
    </div>
  );
};

export default About;
