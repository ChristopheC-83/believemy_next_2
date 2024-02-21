"use client";

export default function Button({ onClick, children, enabled }) {
  

  return (
    <button
      className={`btn-custom ${!enabled && "disabled-btn"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
