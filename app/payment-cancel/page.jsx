export default function PaymentCancel() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Payment Canceled</h1>
        <p style={styles.message}>
          It seems you have canceled the payment. If this was a mistake, you can
          try again.
        </p>
        <a href="/purchase" style={styles.button}>
          Go to Home
        </a>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    margin: 0,
    padding: 0,
    backgroundColor: "#f5f5f5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
  },
  card: {
    textAlign: "center",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    width: "100%"
  },
  title: {
    fontSize: "24px",
    marginBottom: "10px",
    color: "#dc3545"
  },
  message: {
    fontSize: "16px",
    margin: "10px 0",
    color: "#6c757d"
  },
  button: {
    display: "inline-block",
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    textDecoration: "none",
    fontSize: "16px",
    cursor: "pointer"
  }
};
