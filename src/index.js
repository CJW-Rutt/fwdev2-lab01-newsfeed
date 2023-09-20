import React, { useState, useEffect, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import InfoCard from "./InfoCard";

const App = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    import("./sample_news_stories.json")
      .then((response) => {
        const dataFiltered = response.default.results.filter(
          (item) => item.image_url !== null && item.language === "english",
        );
        setData(dataFiltered);
      })
      .catch((error) => {
        console.error("Failed to load data:", error);
      });
  }, []);

  return (
    <div>
      <InfoCard data={data} />
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
