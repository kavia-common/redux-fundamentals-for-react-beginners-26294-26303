import React from "react";
import { selectFlags } from "../store";

// PUBLIC_INTERFACE
export default function Sidebar() {
  /**
   * Sidebar with learning notes about Redux fundamentals.
   * Reads feature flags to show which features are on.
   */
  const flags = selectFlags();

  return (
    <aside style={styles.aside} aria-label="Learning sidebar">
      <h2 style={styles.h2}>Redux Fundamentals</h2>
      <ul style={styles.list}>
        <li>
          Store: single source of truth created via Redux Toolkit{" "}
          <code>configureStore</code>.
        </li>
        <li>
          Slices: logic collocated in <code>createSlice</code> (actions +
          reducers).
        </li>
        <li>
          Components dispatch actions and select data from the store with{" "}
          <code>useDispatch</code> and <code>useSelector</code>.
        </li>
        <li>
          Feature Flags: toggle features by setting{" "}
          <code>REACT_APP_FEATURE_FLAGS</code> (e.g. <code>todos</code>).
        </li>
      </ul>

      <div style={styles.flagsCard}>
        <div style={styles.flagsHeader}>Active Feature Flags</div>
        {Object.keys(flags).length === 0 ? (
          <div style={styles.badgeMuted}>None</div>
        ) : (
          <div style={styles.badgesWrap}>
            {Object.keys(flags).map((k) => (
              <span key={k} style={styles.badge}>
                {k}
              </span>
            ))}
          </div>
        )}
      </div>

      <div style={styles.envCard}>
        <div style={styles.flagsHeader}>Environment Vars (optional)</div>
        <ul style={styles.envList}>
          {[
            "REACT_APP_API_BASE",
            "REACT_APP_BACKEND_URL",
            "REACT_APP_FRONTEND_URL",
            "REACT_APP_WS_URL",
            "REACT_APP_NODE_ENV",
            "REACT_APP_NEXT_TELEMETRY_DISABLED",
            "REACT_APP_ENABLE_SOURCE_MAPS",
            "REACT_APP_PORT",
            "REACT_APP_TRUST_PROXY",
            "REACT_APP_LOG_LEVEL",
            "REACT_APP_HEALTHCHECK_PATH",
            "REACT_APP_FEATURE_FLAGS",
            "REACT_APP_EXPERIMENTS_ENABLED",
          ].map((key) => (
            <li key={key}>
              <code>{key}</code>{" "}
              <span style={{ opacity: 0.7 }}>
                {process.env[key] ? "set" : "unset"}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

const styles = {
  aside: {
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: 12,
    padding: 16,
    boxShadow: "0 4px 14px rgba(0,0,0,0.04)",
    color: "#111827",
  },
  h2: {
    margin: "0 0 10px 0",
    fontSize: 16,
    color: "#111827",
  },
  list: {
    paddingLeft: 18,
    margin: 0,
    lineHeight: 1.6,
    fontSize: 14,
    color: "#374151",
  },
  flagsCard: {
    marginTop: 16,
    padding: 12,
    border: "1px dashed #d1d5db",
    borderRadius: 10,
    background: "#f9fafb",
  },
  flagsHeader: {
    fontWeight: 600,
    marginBottom: 8,
    color: "#111827",
  },
  badgesWrap: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
  },
  badge: {
    background: "#2563EB",
    color: "#ffffff",
    borderRadius: 999,
    padding: "4px 10px",
    fontSize: 12,
    boxShadow: "0 2px 6px rgba(37,99,235,0.3)",
  },
  badgeMuted: {
    background: "#e5e7eb",
    color: "#111827",
    borderRadius: 999,
    padding: "4px 10px",
    fontSize: 12,
  },
  envCard: {
    marginTop: 16,
    padding: 12,
    borderRadius: 10,
    background: "#ffffff",
    border: "1px solid #e5e7eb",
  },
  envList: {
    margin: 0,
    paddingLeft: 18,
    fontSize: 13,
    color: "#374151",
    lineHeight: 1.5,
  },
};
