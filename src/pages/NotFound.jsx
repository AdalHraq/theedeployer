import React from "react";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.subtitle}>Page Not Found</p>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#0d1117",
    color: "#fff",
    textAlign: "center",
    padding: "100px 20px",
  },
  title: {
    fontSize: "5rem",
    color: "#38b6ff",
  },
  subtitle: {
    fontSize: "1.5rem",
  },
};

export default NotFound;


