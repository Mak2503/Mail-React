import React from "react";

const styles = {
  head: {
    backgroundColor: "blue",
    margin: "0px",
  },
  heading: {
    color: "#fff",
    marginLeft: "10px",
  },
};

export const Navbar = () => {
  return (
    <div style={styles.head}>
      <h1 style={styles.heading}>Mailer</h1>
    </div>
  );
};
