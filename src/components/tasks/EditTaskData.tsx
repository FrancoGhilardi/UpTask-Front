import { getTaskById } from "@/api/TaskApi";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Navigate, useLocation, useParams } from "react-router-dom";
import EditTaskModal from "./EditTaskModal";

const EditTaskData: React.FC = () => {
  const location = useLocation();
  const params = useParams();
  const queryParams = new URLSearchParams(location.search);
  const taskId = queryParams.get("editTask")!;
  const projectId = params.projectId!;

  const { data, isError } = useQuery({
    queryKey: ["task", taskId],
    queryFn: () => getTaskById({ projectId, taskId }),
    enabled: !!taskId,
  });

  if (isError) return <Navigate to={"/404"} />;

  if (data) return <EditTaskModal data={data} taskId={taskId} />;
};

export default EditTaskData;
