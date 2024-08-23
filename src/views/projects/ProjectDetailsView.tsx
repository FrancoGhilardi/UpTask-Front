import { getProjectById } from "@/api/ProjectApi";
import AddTaskModal from "@/components/tasks/AddTaskModal";
import TaskList from "@/components/tasks/TaskList";
import { useQuery } from "@tanstack/react-query";
import React, { Fragment } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const ProjectDetailsView: React.FC = () => {
  const params = useParams();
  const navigate = useNavigate();

  const projectId = params.projectId!;

  const showModal = () => navigate(location.pathname + "?newTask=true");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["editProject", projectId],
    queryFn: () => getProjectById(projectId),
  });

  if (isLoading) return "Cargando...";

  if (isError) return <Navigate to="/404" />;

  if (data)
    return (
      <Fragment>
        <h1 className="text-5xl font-black">{data.projectName}</h1>
        <p className="text-2xl font-light text-gray-500 mt-5">
          {data.description}
        </p>

        <nav className="my-5 flex gap-3">
          <button
            type="button"
            className="bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors"
            onClick={showModal}
          >
            Agregar Tarea
          </button>
        </nav>
        <TaskList tasks={data.tasks} />
        <AddTaskModal />
      </Fragment>
    );
};

export default ProjectDetailsView;
