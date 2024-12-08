export default function Sidebar() {
  return (
    <div className="sidebar">
      <a href="#home">Home</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <div className="contact">
        <a href="mailto:singamet@outlook.com">
          <img
            src="https://img.icons8.com/?size=100&id=YRRhCXfA0Vd0&format=png&color=000000"
            alt="Email"
          />
        </a>
        <a href="https://www.linkedin.com/in/ametojsingh" target="_blank">
          <img
            src="https://img.icons8.com/?size=100&id=kBCrQMzpQDLQ&format=png&color=000000"
            alt="LinkedIn"
          />
        </a>
      </div>
    </div>
  );
}
