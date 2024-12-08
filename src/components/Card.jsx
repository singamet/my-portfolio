import PropTypes from "prop-types";

export default function Card({ project }) {
  return (
    <div className="card">
      <img src={project.image} alt={project.title} />
      <h4>{project.title}</h4>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        Visit
      </a>
    </div>
  );
}

// Define PropTypes for the Card component
Card.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};
