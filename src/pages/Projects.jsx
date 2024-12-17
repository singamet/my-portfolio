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
    {
      image: "../images/burger-fries-plate.jpg",
      title: "Food App",
      description:
        "This Food Ordering App uses a React front end to provide a dynamic and responsive user interface. The back end is built with Node.jsand Express, ensuring efficient and scalable server-side operations. MongoDB is used to store all essential data, offering flexibility and performance. JWT (JSON Web Tokens) is utilized for secure user authentication. Important routes, such as cart, orders, and favorites, are protected, ensuring data security and a personalized experience for users throughout the entire process.",
      link: "https://singametfoodapp.netlify.app/",
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
