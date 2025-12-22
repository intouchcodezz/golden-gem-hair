import React from "react";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

/**
 * Backend-driven auth.
 * PHP session (cookie) is the source of truth.
 * If session is invalid, APIs will return 401 and frontend will redirect.
 */
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  return <>{children}</>;
};

export default ProtectedRoute;
