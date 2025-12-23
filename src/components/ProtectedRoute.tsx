import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
  const isAuthed = sessionStorage.getItem("adminAuth") === "true";

  if (!isAuthed) {
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
}
