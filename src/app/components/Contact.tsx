"use client";
import React, { useState } from "react";

interface ContactProps {
  sectionRef3: React.RefObject<HTMLDivElement>;
}

const Contact: React.FC<ContactProps> = ({ sectionRef3 }) => {
  const [submissionStatus, setSubmissionStatus] = useState<boolean | string>(
    false
  );
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    comment: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xknldknv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactForm),
      });

      if (response.ok) {
        // Handle successful form submission
        console.log("Form submitted successfully!");
        setSubmissionStatus(true);
      } else {
        // Handle form submission failure
        console.error("Form submission failed!");
        setSubmissionStatus("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };
  return (
    <div
      id="contact"
      ref={sectionRef3}
      className="flex flex-col justify-center min-h-screen"
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-garamond text-7xl font-bold mb-5">
          Ponete en contacto
        </h1>
        <p className="font-garamond text-2xl">
          Tenés alguna pregunta? Querés saber más sobre nosotros? Ponete en
          contacto con nosotros!
        </p>
      </div>
      <div className="flex flex-col items-center max-w-full mt-10">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="font-garamond text-2xl">Nombre</label>
          <input
            className="border border-gray-700 text-black font-medium rounded-md w-96 h-10 px-2 font-garamond text-lg"
            type="text"
            name="name"
            placeholder="Escribe tu nombre"
            value={contactForm.name}
            onChange={changeHandler}
          />
          <br />

          <label className="font-garamond text-2xl">Email</label>
          <input
            className="border border-gray-700 text-black font-medium  rounded-md w-96 h-10 px-2 font-garamond text-lg"
            type="email"
            name="email"
            placeholder="Escribe tu email"
            value={contactForm.email}
            onChange={changeHandler}
          />
          <br />
          <label className="font-garamond text-2xl">Numero de telefono</label>
          <input
            className="border border-gray-700 text-black font-medium rounded-md w-96 h-10 px-2 font-garamond text-lg"
            type="tel"
            name="phone"
            placeholder="Escribe tu telefono"
            value={contactForm.phone}
            onChange={changeHandler}
          />
          <br />
          <label className="font-garamond text-2xl">Mensaje</label>
          <textarea
            className="border border-gray-700 text-black font-medium rounded-md w-96 px-2 font-garamond text-lg"
            value={contactForm.comment}
            rows={6}
            name="comment"
            placeholder="Escribe tu mensaje"
            onChange={changeHandler}
          />
          <br />
          <button
            id="submit"
            className="mb-20 border-gray-600 hover:bg-green-700 text-black font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded"
            type="submit"
          >
            Enviar
          </button>
        </form>
        {submissionStatus === true && (
          <p
            style={{
              color: "green",
              backgroundColor: "#DFFFD6",
              padding: "10px",
              borderRadius: "5px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              marginBottom: "50px",
            }}
          >
            Tu mensaje ha sido enviado!
          </p>
        )}
        {submissionStatus === "error" && (
          <p
            style={{
              color: "red",
              backgroundColor: "#ffe6e6",
              padding: "10px",
              borderRadius: "5px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              marginBottom: "50px",
            }}
          >
            Tu mensaje esta incompleto, por favor llena todos los campos
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
