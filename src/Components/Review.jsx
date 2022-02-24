import React from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import ReviewData from "../data/ReviewData";
import "../CSS/Review.css";

function Review() {
  return (
    <div className="Review">
      <div className="title_Review">
        <h1>Reviews</h1>
        <p>
          1/12 <BsArrowLeft className="reviewArrow" />
          <BsArrowRight className="reviewArrow" />
        </p>
      </div>
      <div className="dataCon_Review">
        {ReviewData.map((data, index) => {
          return (
            <div key={data.id} className="cardContainer_Review">
              <div className="card_Review">
                <div className="header_Review">
                  <img
                    className="profile_Review"
                    src={data.image}
                    alt="image"
                  />
                  <div className="rightHeader_Review">
                    <h4>{data.name}</h4>
                    <div className="flagContainer_Review">
                      <img
                        className="flag_Review"
                        src={data.countryFlag}
                        alt="flag"
                      />
                      <p>{data.countryName}</p>
                    </div>
                  </div>
                </div>
                <div className="details_cardReview">
                  <p>{data.para}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Review;
