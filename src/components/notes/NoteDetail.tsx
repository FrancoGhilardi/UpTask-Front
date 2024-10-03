import { deleteNote } from "@/api/NoteApi";
import { useAuth } from "@/hooks/useAuth";
import { Note } from "@/types/index";
import { formatDate } from "@/utils/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useMemo } from "react";
import { useLocation, useParams } from "react-router-dom";
import { toast } from "react-toastify";

type NoteDetailProps = {
  note: Note;
};
const NoteDetail: React.FC<NoteDetailProps> = ({ note }) => {
  const { data, isLoading } = useAuth();
  const params = useParams();
  const location = useLocation();
  const queryClient = useQueryClient();
  const queryParams = new URLSearchParams(location.search);
  const taskId = queryParams.get("viewTask")!;
  const projectId = params.projectId!;

  const canDelete = useMemo<boolean>(
    () => data?._id === note.createdBy._id,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data]
  );

  const { mutate } = useMutation({
    mutationFn: deleteNote,
    onError: (error) => toast.error(error.message),
    onSuccess: (data) => {
      toast.success(data);
      queryClient.invalidateQueries({ queryKey: ["task", taskId] });
    },
  });

  const handleDeleteNote = () => {
    const data = { projectId, taskId, noteId: note._id };
    mutate(data);
  };

  if (isLoading) return "Cargando...";

  return (
    <div className="p-3 flex justify-between items-center">
      <div>
        <p>
          <span className="font-bold">{note.createdBy.name}:</span>{" "}
          {note.content}
        </p>
        <p className="text-xs text-slate-500">{formatDate(note.createdAt)}</p>
      </div>
      {canDelete && (
        <button
          type="button"
          className="bg-red-400 hover:bg-red-500 p-2 text-xs text-white font-bold cursor-pointer transition-colors "
          onClick={handleDeleteNote}
        >
          Eliminar
        </button>
      )}
    </div>
  );
};

export default NoteDetail;
