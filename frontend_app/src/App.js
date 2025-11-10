import React from "react";
import "./index.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import { Provider } from "react-redux";
import { store } from "./store";
import { selectFlags } from "./store";

// PUBLIC_INTERFACE
function App() {
  /**
   * App layout with header, main area (counter & optional todos), sidebar and footer.
   * Ocean Professional theme is applied via inline styles and CSS variables.
   */
  const flags = selectFlags();

  return (
    <Provider store={store}>
      <div className="app-shell">
        <Header />
        <main className="app-main">
          <div className="grid">
            <section className="cards" aria-label="Demos">
              <Counter />
              {flags.todos ? <TodoList /> : <FeatureOffCard />}
            </section>
            <Sidebar />
          </div>
        </main>
        <Footer />
      </div>
    </Provider>
  );
}

function FeatureOffCard() {
  return (
    <div style={styles.card} role="note" aria-label="Todos feature disabled">
      <h3 style={{ marginTop: 0 }}>Todos (feature-flagged)</h3>
      <p style={styles.text}>
        The Todos example is hidden. Enable it by setting:
      </p>
      <pre style={styles.code}>REACT_APP_FEATURE_FLAGS=todos</pre>
      <p style={styles.textSmall}>
        Restart the dev server if needed so the env var is picked up.
      </p>
    </div>
  );
}

const styles = {
  card: {
    background: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: 12,
    padding: 16,
    boxShadow: "0 4px 14px rgba(0,0,0,0.04)",
    color: "#111827",
  },
  text: { color: "#374151" },
  textSmall: { color: "#6b7280", fontSize: 13 },
  code: {
    background: "#f3f4f6",
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    padding: 10,
    overflowX: "auto",
  },
};

export default App;
