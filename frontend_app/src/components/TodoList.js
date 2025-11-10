import React, { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, removeTodo, setFilter, clearCompleted } from "../store/todosSlice";

/**
 * Feature-flagged Todos list. Only rendered when 'todos' flag is enabled.
 */
// PUBLIC_INTERFACE
export default function TodoList() {
  /** Todos component connected to Redux store */
  const dispatch = useDispatch();
  const { items, filter } = useSelector((s) => s.todos);

  const [text, setText] = useState("");

  const filtered = useMemo(() => {
    if (filter === "active") return items.filter((t) => !t.completed);
    if (filter === "completed") return items.filter((t) => t.completed);
    return items;
  }, [items, filter]);

  const onAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text.trim()));
      setText("");
    }
  };

  return (
    <div style={styles.card} aria-label="Todos demo">
      <div style={styles.header}>
        <h3 style={styles.title}>Todos</h3>
        <div style={styles.filters}>
          {["all", "active", "completed"].map((f) => (
            <button
              key={f}
              onClick={() => dispatch(setFilter(f))}
              style={f === filter ? styles.filterActive : styles.filterBtn}
              aria-pressed={f === filter}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div style={styles.addRow}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a todo..."
          style={styles.input}
          aria-label="New todo"
        />
        <button onClick={onAdd} style={styles.addBtn}>Add</button>
      </div>

      <ul style={styles.list}>
        {filtered.map((t) => (
          <li key={t.id} style={styles.item}>
            <label style={styles.label}>
              <input
                type="checkbox"
                checked={t.completed}
                onChange={() => dispatch(toggleTodo(t.id))}
                aria-label={`Toggle todo ${t.text}`}
              />
              <span style={{ ...styles.text, textDecoration: t.completed ? "line-through" : "none", opacity: t.completed ? 0.6 : 1 }}>
                {t.text}
              </span>
            </label>
            <button onClick={() => dispatch(removeTodo(t.id))} style={styles.delBtn} aria-label="Remove todo">
              ✕
            </button>
          </li>
        ))}
      </ul>

      <div style={styles.footerRow}>
        <span style={styles.count}>
          {items.filter((t) => !t.completed).length} items left
        </span>
        <button onClick={() => dispatch(clearCompleted())} style={styles.clearBtn}>
          Clear completed
        </button>
      </div>
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
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  title: { margin: 0, fontSize: 16 },
  filters: { display: "flex", gap: 6 },
  filterBtn: tabStyle(false),
  filterActive: tabStyle(true),
  addRow: {
    display: "flex",
    gap: 8,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    border: "1px solid #d1d5db",
    borderRadius: 8,
    padding: "8px 10px",
  },
  addBtn: {
    background: "#2563EB",
    color: "#ffffff",
    borderRadius: 8,
    border: "none",
    padding: "8px 12px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "grid",
    gap: 8,
  },
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid #e5e7eb",
    borderRadius: 10,
    padding: "8px 10px",
  },
  label: { display: "flex", alignItems: "center", gap: 10 },
  text: { color: "#111827" },
  delBtn: {
    background: "#EF4444",
    color: "#ffffff",
    border: "none",
    borderRadius: 8,
    padding: "4px 8px",
    cursor: "pointer",
  },
  footerRow: {
    marginTop: 12,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  count: { fontSize: 12, color: "#374151" },
  clearBtn: {
    background: "#F59E0B",
    color: "#111827",
    border: "none",
    borderRadius: 8,
    padding: "6px 10px",
    cursor: "pointer",
  },
};

function tabStyle(active) {
  return {
    background: active ? "#2563EB" : "#e5e7eb",
    color: active ? "#ffffff" : "#111827",
    border: "none",
    borderRadius: 999,
    padding: "6px 10px",
    cursor: "pointer",
    boxShadow: active ? "0 2px 8px rgba(37,99,235,0.3)" : "none",
    textTransform: "capitalize",
    fontSize: 12,
  };
}
