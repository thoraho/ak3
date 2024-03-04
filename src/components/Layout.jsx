import { Link } from "react-router-dom";
import { resources } from "../resources/resources.js";
import { useState } from "react";

export default function Layout({ children }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div id="container">
      <nav>
        <ul id="menu">
          {resources.map((resource, index) => (
            <li key={index}>
              <Link
                className={`menubutton ${
                  index === activeIndex ? "active" : ""
                }`}
                to={`/${resource.category.replaceAll(" ", "-").toLowerCase()}`}
                onClick={() => handleClick(index)}
              >
                {resource.category}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
}
