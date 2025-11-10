//
// PUBLIC_INTERFACE
export function getFeatureFlags() {
  /**
   * Returns an object of feature flags derived from REACT_APP_FEATURE_FLAGS.
   * Example: REACT_APP_FEATURE_FLAGS="todos,alpha" -> { todos: true, alpha: true }
   * Missing or empty env results in an empty object. This function is side-effect free.
   */
  const raw = process.env.REACT_APP_FEATURE_FLAGS || "";
  return raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
}
