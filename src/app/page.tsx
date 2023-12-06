"use client";
import React, { useRef } from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";

const Home: React.FC = () => {
  const sectionRef1 = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="relative h-screen overflow-hidden">
        <NavBar scrollTo={scrollToSection} sectionRef1={sectionRef1} />
        <Header />
      </div>
      <div className="flex flex-col items-center justify-center max-w-max">
        <section className="py-5 mx-4 max-w-md" id="about" ref={sectionRef1}>
          <h2 className="text-4xl font py-4">Misión</h2>
          <p className="text-lg loading-relaxed">
            En Perfect Transfer, nos comprometemos a ser el socio confiable y
            líder en la distribución de insumos gráficos, proporcionando
            productos de calidad excepcional que potencien la creatividad y la
            excelencia en la industria de la impresión. Buscamos superar las
            expectativas de nuestros clientes, brindando soluciones innovadoras
            y un servicio excepcional que impulse su éxito.
          </p>
          <h2 className="text-4xl py-4">Nuestra visión</h2>
          <p>
            Ser reconocidos como la opción preferida y de referencia en la
            industria gráfica, destacando por nuestra excelencia en la calidad
            de productos, servicio al cliente y compromiso con el crecimiento
            sostenible. Aspiramos a expandir nuestra presencia global y ser el
            catalizador de la innovación en la industria de impresión gráfica.
          </p>
        </section>
        <section className="max-w-md">
          <h2 className="text-4xl py-4">Objetivos:</h2>
          <ol>
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
          <h2 className="text-4xl py-4">Valores:</h2>
          <ul>
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
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Home;
