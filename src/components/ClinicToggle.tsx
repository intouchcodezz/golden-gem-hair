import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ClinicToggle: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isSkin = location.pathname.startsWith("/skin");

  return (
    <div
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        background: "#f3f3f3", // ✅ better contrast
        border: "1px solid rgba(0,0,0,0.1)",
        borderRadius: "999px",
        padding: "3px",
      }}
    >
      {/* Sliding pill */}
      <span
        style={{
          position: "absolute",
          top: 3,
          bottom: 3,
          width: "calc(50% - 3px)",
          left: isSkin ? "calc(50%)" : "3px",
          borderRadius: "999px",
          background: "#f4a00c",
          transition: "left 0.28s cubic-bezier(.4,0,.2,1)",
        }}
      />

      {/* Hair */}
      <button
        onClick={() => navigate("/")}
        style={{
          position: "relative",
          zIndex: 1,
          fontSize: "12px",
          fontWeight: 600,
          padding: "6px 14px",
          borderRadius: "999px",
          border: "none",
          background: "transparent",
          color: !isSkin ? "#412402" : "#555", // ✅ visible inactive color
          cursor: "pointer",
        }}
      >
        Hair Clinic
      </button>

      {/* Skin */}
      <button
        onClick={() => navigate("/skin-clinic")}
        style={{
          position: "relative",
          zIndex: 1,
          fontSize: "12px",
          fontWeight: 600,
          padding: "6px 14px",
          borderRadius: "999px",
          border: "none",
          background: "transparent",
          color: isSkin ? "#412402" : "#555", // ✅ visible inactive color
          cursor: "pointer",
        }}
      >
        Skin Clinic
      </button>
    </div>
  );
};

export default ClinicToggle;