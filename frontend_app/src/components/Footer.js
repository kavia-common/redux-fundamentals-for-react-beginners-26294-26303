import React from "react";

// PUBLIC_INTERFACE
export default function Footer() {
  /** Footer with notes and theme reference */
  return (
    <footer style={styles.footer} role="contentinfo">
      <div>
        <strong style={{ color: "#111827" }}>Notes:</strong>{" "}
        This demo keeps state in Redux Toolkit. No backend required.
      </div>
      <div style={styles.meta}>
        Theme: Ocean Professional — primary #2563EB, accent #F59E0B
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#ffffff",
    borderTop: "1px solid #e5e7eb",
    padding: "14px 20px",
    color: "#374151",
    fontSize: 13,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  meta: {
    opacity: 0.8,
  },
};
