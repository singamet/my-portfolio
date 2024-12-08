export default function Skills() {
  const skills = [
    {
      name: "JavaScript",
      icon: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
    },
    {
      name: "React",
      icon: "https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000",
    },
    {
      name: "Node JS",
      icon: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
    },
    {
      name: "Express JS",
      icon: "https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000",
    },
    {
      name: "HTML",
      icon: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
    },
    {
      name: "CSS",
      icon: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
    },
    {
      name: "Python",
      icon: "https://img.icons8.com/?size=100&id=l75OEUJkPAk4&format=png&color=000000",
    },
    {
      name: "C#",
      icon: "https://img.icons8.com/?size=100&id=55251&format=png&color=000000",
    },
    {
      name: ".NET",
      icon: "https://img.icons8.com/?size=100&id=o0pte3XTuPWi&format=png&color=000000",
    },
    {
      name: "Mongo DB",
      icon: "https://img.icons8.com/?size=100&id=74402&format=png&color=000000",
    },
    {
      name: "Firebase",
      icon: "https://img.icons8.com/?size=100&id=62452&format=png&color=000000",
    },
    {
      name: "SQL Server",
      icon: "https://img.icons8.com/?size=100&id=laYYF3dV0Iew&format=png&color=000000",
    },
  ];
  return (
    <div id="skills" className="skills full-page">
      {skills.map((x) => (
        <div key={x.name} className="skills-item">
          <img src={x.icon} alt={x.name} />
          <h4>{x.name}</h4>
        </div>
      ))}
    </div>
  );
}
