import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const initialValues = {
  projectName: "",
  clientName: "",
  description: "t",
};

const CreateProjectView: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const handleForm = (data) => {
    console.log({ data });
  };
  return (
    <Fragment>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-black">Crear Proyecto</h1>
        <p className=" text-2xl font-light text-gray-500 mt-5">
          Llena el siguiente formulario para crear un proyecto
        </p>
        <nav className="my-5">
          <Link
            to="/"
            className="bg-purple-400 hover:bg-purple-500 px-10 py-3  text-white text-xl font-bold cursor-pointer transition-colors"
          >
            Volver a Proyectos
          </Link>
        </nav>
        <form
          className="mt-10 bg-white shadow-lg p-10 rounded-lg"
          onSubmit={handleSubmit(handleForm)}
          noValidate
        >
          <input
            type="submit"
            value="Crear Proyecto"
            className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3 text-white uppercase font-bold cursor-auto transition-colors"
          />
        </form>
      </div>
    </Fragment>
  );
};

export default CreateProjectView;
