import React from "react";
export const metadata = {
  title: "Next.js App",
  description: "Generated by Next.js",
};
function Footer() {
  return (
    <div>
      {" "}
      <footer
        style={{
          backgroundColor: "ghostwhite",
          padding: "1rem",
        }}
      >
        <p>&copy; {new Date().getFullYear()} Next.js App</p>
      </footer>
    </div>
  );
}

export default Footer;
