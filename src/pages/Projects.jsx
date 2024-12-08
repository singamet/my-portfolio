import Card from "../components/Card";

export default function Projects() {
  const data = [
    {
      image: "../images/snow.jpg",
      title: "Weather app",
      description:
        "Explore weather conditions effortlessly with this simple yet powerful weather app built using React. The app leverages OpenWeatherMap's API to fetch real-time weather data and forecasts. With built-in geocoding capabilities, it provides search suggestions as you type. The interface, styled using CSS, offers a clean and intuitive user experience. Additionally, users can switch between metric and imperial units for their convenience. Stay updated with accurate weather information, no matter where you are.",
      link: "https://singametweatherapp.netlify.app/",
    },
    {
      image: "../images/notes.jpg",
      title: "Notebook",
      description:
        "This simple notebook app, built using React and Firebase, allows users to sign in or sign up and create personalized sticky notes. Users can effortlessly create, edit, delete, color code, and search their notes, making it easy to organize and retrieve information. The app employs Firebase's robust authentication system and Firestore database, ensuring secure and efficient data management. Enjoy a seamless note-taking experience with intuitive features and a user-friendly interface.",
      link: "https://singametnotebook.netlify.app/",
    },
  ];

  return (
    <div id="projects" className="projects full-page">
      {data.map((x) => (
        <Card key={x.title} project={x} />
      ))}
    </div>
  );
}
