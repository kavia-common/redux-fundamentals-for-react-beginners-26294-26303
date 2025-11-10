import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "../store/counterSlice";

/**
 * Simple counter demonstrating dispatching actions and selecting state.
 */
// PUBLIC_INTERFACE
export default function Counter() {
  /** A counter component connected to Redux store */
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");

  const parsed = Number(amount) || 0;

  return (
    <div style={styles.card} aria-label="Counter demo">
      <div style={styles.header}>
        <h3 style={styles.title}>Counter</h3>
        <span style={styles.pill}>{count}</span>
      </div>

      <div style={styles.controls}>
        <button style={styles.primaryBtn} onClick={() => dispatch(increment())} aria-label="Increment">
          +1
        </button>
        <button style={styles.secondaryBtn} onClick={() => dispatch(decrement())} aria-label="Decrement">
          -1
        </button>
        <button style={styles.warnBtn} onClick={() => dispatch(reset())} aria-label="Reset">
          Reset
        </button>
      </div>

      <div style={styles.amountRow}>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          placeholder="Amount"
          style={styles.input}
          aria-label="Amount"
        />
        <button
          style={styles.primaryBtn}
          onClick={() => dispatch(incrementByAmount(parsed))}
          disabled={!amount}
        >
          Add amount
        </button>
      </div>

      <p style={styles.note}>
        This component uses useSelector to read the counter value and dispatches actions from the counter slice.
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
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  title: { margin: 0, fontSize: 16 },
  pill: {
    background: "#2563EB",
    color: "#ffffff",
    borderRadius: 999,
    padding: "4px 10px",
    fontWeight: 700,
  },
  controls: {
    display: "flex",
    gap: 8,
    marginBottom: 12,
  },
  amountRow: {
    display: "flex",
    gap: 8,
    alignItems: "center",
  },
  input: {
    flex: 1,
    border: "1px solid #d1d5db",
    borderRadius: 8,
    padding: "8px 10px",
  },
  primaryBtn: buttonStyle("#2563EB"),
  secondaryBtn: buttonStyle("#F59E0B", "#111827"),
  warnBtn: buttonStyle("#EF4444"),
  note: {
    marginTop: 12,
    fontSize: 13,
    color: "#374151",
  },
};

function buttonStyle(bg, text = "#ffffff") {
  return {
    background: bg,
    color: text,
    border: "none",
    borderRadius: 8,
    padding: "8px 12px",
    cursor: "pointer",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  };
}
