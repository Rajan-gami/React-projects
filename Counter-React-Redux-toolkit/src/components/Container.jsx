const Container = ({ children, className = "" }) => {
  return (
    <div className={`card ${className}`} style={{ width: "70%" ,backgroundColor: "#62f77b", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 1)" }}>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Container;
