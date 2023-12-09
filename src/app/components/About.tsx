import React from "react";

interface AboutUsProps {
  sectionRef1: React.RefObject<HTMLDivElement>;
}
const About: React.FC<AboutUsProps> = ({ sectionRef1 }) => {
  return (
    <div className="font-garamond" id="about" ref={sectionRef1}>
      <div
        className="flex flex-col items-start p-36 pl-24 gap-y-20"
        style={{ backgroundImage: "linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%), url('/textura-hormigon.jpg')" }}
      >
        <h2 className="text-4xl text-black py-4 px-6 font-bold rounded-t-sm max-w-sm bg-white bg-opacity-50">
          Misión
        </h2>
        <p className="text-2xl max-w-4xl py-8 px-6 text-white font-normal rounded-b-sm rounded-r-sm bg-black bg-opacity-30">
          Estamos comprometidos a ser el socio confiable y líder en la
          distribución de insumos gráficos, proporcionando productos de calidad
          excepcional que potencien la creatividad y la excelencia en la
          industria de la impresión. Buscamos superar las expectativas de
          nuestros clientes, brindando soluciones innovadoras y un servicio
          excepcional que impulse su éxito.
        </p>
      </div>
      <div
        className="flex flex-col items-end p-36 pr-24 gap-y-20"
        style={{ backgroundImage: "linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%), url('/textura-tela.jpg')" }}
      >
        <h2 className="text-4xl p-6 max-w-sm text-white rounded-t-sm bg-gray-600">
          Nuestra visión
        </h2>
        <p className="text-2xl font-light max-w-4xl p-8 text-white bg-black bg-opacity-30">
          Ser reconocidos como la opción preferida y de referencia en la
          industria gráfica, destacando por nuestra excelencia en la calidad de
          productos, servicio al cliente y compromiso con el crecimiento
          sostenible. Aspiramos a expandir nuestra presencia global y ser el
          catalizador de la innovación en la industria de impresión gráfica.
        </p>
      </div>
      <div
        className="flex flex-col items-start p-36 pl-24 gap-y-20"
        style={{ backgroundImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%), url('/textura-madera.jpg')" }}
      >
        <h2 className="text-4xl font-garamond font-light p-6 text-black bg-white bg-opacity-50 rounded-t-sm">
          Objetivos:
        </h2>
        <ol className="text-2xl font-light max-w-7xl p-8 text-white bg-black bg-opacity-50 list-disc">
          <li>
            Excelencia en la <span className="text-teal-500">calidad</span>: Proveer insumos gráficos de la más alta
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
      <div
        className="flex flex-col items-end p-44 pr-32"
        style={{ backgroundImage: "linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%), url('/textura-vidrio.jpg')" }}
      >
        <h2 className="text-4xl p-6 text-white bg-gray-600 rounded-t-sm">
          Valores:
        </h2>
        <ol className="text-white text-lg p-8 max-w-6xl bg-gray-600 list-disc rounded-b-sm rounded-l-sm">
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
