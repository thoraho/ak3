import { Link } from "react-router-dom";
import { resources } from "../resources/resources.js";

export default function Content({ category }) {
  const filteredResources = resources.filter(
    (resource) => resource.category === category
  );

  return (
    <>
      {filteredResources.map((resource, index) => (
        <div key={index}>
          <h2>{resource.category}</h2>
          <p>{resource.text}</p>
          <ul>
            {resource.sources.map((source, index) => (
              <li key={index}>
                <Link to={source.url}>{source.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
