import React, { useState } from "react";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

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
      } else {
        // Handle form submission failure
        console.error("Form submission failed!");
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
    <div className="flex flex-col h-fit pt-20 ">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-garamond text-7xl font-bold mb-5">
          Ponte en contacto
        </h1>
        <p className="font-garamond text-2xl">
          Tienes alguna pregunta? Quieres saber mas sobre nosotros? Ponete en
          contacto con nosotros!
        </p>
      </div>
      <div className="flex flex-col items-center justify-center max-w-full mt-10 mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="font-garamond text-2xl">Nombre</label>
          <input
            className="bg-gray-700 text-white rounded-md w-96 h-10 px-2 font-garamond text-lg"
            type="text"
            name="name"
            placeholder="Escribe tu nombre"
            value={contactForm.name}
            onChange={changeHandler}
          />
          <br />
          <label className="font-garamond text-2xl">Empresa</label>
          <input
            className="bg-gray-700 text-white rounded-md w-96 h-10 px-2 font-garamond text-lg"
            type="text"
            name="company"
            placeholder="Escribe tu empresa"
            value={contactForm.company}
            onChange={changeHandler}
          />
          <br />
          <label className="font-garamond text-2xl">Email</label>
          <input
            className="bg-gray-700 text-white rounded-md w-96 h-10 px-2 font-garamond text-lg"
            type="email"
            name="email"
            placeholder="Escribe tu email"
            value={contactForm.email}
            onChange={changeHandler}
          />
          <br />
          <label className="font-garamond text-2xl">Numero de telefono</label>
          <input
            className="bg-gray-700 text-white rounded-md w-96 h-10 px-2 font-garamond text-lg"
            type="tel"
            name="phone"
            placeholder="Escribe tu telefono"
            value={contactForm.phone}
            onChange={changeHandler}
          />
          <br />
          <label className="font-garamond text-2xl">Comentario</label>
          <textarea
            className="bg-gray-700 text-white rounded-md w-96 px-2 font-garamond text-lg"
            value={contactForm.comment}
            rows={6}
            name="comment"
            placeholder="Escribe tus preguntas o dudas"
            onChange={changeHandler}
          />
          <br />
          <button
            className="mb-20 bg-gray-600 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
