import ProfileForm from "@/components/profile/ProfileForm";
import { useAuth } from "@/hooks/useAuth";
import React from "react";

const ProfileView: React.FC = () => {
  const { data, isLoading } = useAuth();

  if (isLoading) return "Cargando...";

  if (data) return <ProfileForm data={data} />;
};
export default ProfileView;
