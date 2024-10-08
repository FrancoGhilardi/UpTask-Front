import { NoteFormData } from "@/types/index";
import React from "react";
import { useForm } from "react-hook-form";
import ErrorMessage from "../ErrorMessage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNote } from "@/api/NoteApi";
import { toast } from "react-toastify";
import { useLocation, useParams } from "react-router-dom";

const AddNotesForm: React.FC = () => {
  const params = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const projectId = params.projectId!;
  const taskId = queryParams.get("viewTask")!;
  const queryClient = useQueryClient();
  const initialValues: NoteFormData = {
    content: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: initialValues });

  const { mutate } = useMutation({
    mutationFn: createNote,
    onError: (error) => toast.error(error.message),
    onSuccess: (data) => {
      toast.success(data);
      queryClient.invalidateQueries({ queryKey: ["task", taskId] });
      reset();
    },
  });

  const handleAddNotes = (formData: NoteFormData) => {
    const data = {
      formData,
      projectId,
      taskId,
    };
    mutate(data);
  };
  return (
    <form
      onSubmit={handleSubmit(handleAddNotes)}
      className="space-y-3"
      noValidate
    >
      <div className="flex flex-col gap-2">
        <label className="font-bold" htmlFor="content">
          Crear Nota
        </label>
        <input
          id="contetn"
          type="text"
          placeholder="Contenido de la nota"
          className="w-full p-3 border border-gray-300"
          {...register("content", {
            required: "El contenido de la nota es obligatorio",
          })}
        />
        {errors.content && (
          <ErrorMessage>{errors.content.message}</ErrorMessage>
        )}
      </div>
      <input
        type="submit"
        value="Crear Nota"
        className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-2 text-white font-black cursor-pointer"
      />
    </form>
  );
};

export default AddNotesForm;
