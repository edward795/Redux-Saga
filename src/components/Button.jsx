import React from "react";

export const Button = ({ children, loading, ...props }) => {
  return (
    <div>
      <button class="btn btn-secondary" disabled={loading} {...props}>
        {loading ? "loading..." : children}
      </button>
    </div>
  );
};
