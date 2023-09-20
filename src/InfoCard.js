import React from "react";
import styles from "./styles.css";

const InfoCard = ({ data }) => {
  return (
    <div className="body">
      {data.map((newsItem, index) => (
        <div className="container">
          <div key={index} className="newsContainer">
            <div className="newsLeftCol">
              <img src={newsItem.image_url} alt={newsItem.title} />
            </div>
            <div className="newsRightCol">
              <h2>{newsItem.title}</h2>
              <p>{newsItem.creator && newsItem.creator[0]}</p>
              <p>
                {newsItem.description
                  ? newsItem.description.length > 200
                    ? newsItem.description.substring(0, 200) + "..."
                    : newsItem.description
                  : "Elon Musk, the indomitable CEO of Tesla, continues to push the envelope in the world of autonomous driving. The Tesla autonomous campaign is a testament to Musk's relentless pursuit of innovation, combining advanced AI and machine learning with cutting-edge hardware to usher in an era of self-driving vehicles."}
              </p>
              <div className="readButtonContainer">
                <div>
                  <a href={newsItem.link} className="readButton">
                    <div>Read Now</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoCard;
