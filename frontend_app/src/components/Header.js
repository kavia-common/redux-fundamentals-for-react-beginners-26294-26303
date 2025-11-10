import React from "react";

/**
 * Header with Ocean Professional theme accents.
 */
// PUBLIC_INTERFACE
export default function Header() {
  /** Header of the demo app */
  return (
    <header style={styles.header} role="banner">
      <div style={styles.brandWrap}>
        <span style={styles.brandDot} aria-hidden="true" />
        <h1 style={styles.title}>Redux Fundamentals Demo</h1>
      </div>
      <p style={styles.subtitle}>
        React + Redux Toolkit • Feature Flags • Clean UI
      </p>
    </header>
  );
}

const styles = {
  header: {
    background: "linear-gradient(135deg, rgba(37,99,235,0.08), #f9fafb 70%)",
    borderBottom: "1px solid #e5e7eb",
    padding: "24px 20px",
  },
  brandWrap: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  brandDot: {
    width: 12,
    height: 12,
    borderRadius: 999,
    background: "#2563EB",
    boxShadow: "0 0 0 4px rgba(37,99,235,0.15)",
  },
  title: {
    margin: 0,
    color: "#111827",
    fontSize: 20,
    fontWeight: 700,
  },
  subtitle: {
    margin: "6px 0 0 0",
    color: "#374151",
    fontSize: 14,
  },
};
