import React from "react";
import "./Store.css";

const Store = () => {
  return (
    <div className="games">
      <a href="!#" className="game_link">
        <div className="game">
          <div className="game_image_slot">
            <img
              className="game_image"
              src={require("./Dragon_Age_Origins.jpg")}
              alt="game-cover"
            />
          </div>
          <div className="game_title_price">
            <span className="title">DragonAge: Origins</span>
            <span className="price">R 150</span>
          </div>
        </div>
      </a>
      <a href="!#" className="game_link">
        <div className="game">
          <div className="game_image_slot">
            <img
              className="game_image"
              src={require("./Dragon_Age_2.jpg")}
              alt="game-cover"
            />
          </div>
          <div className="game_title_price"></div>
        </div>
      </a>
      <a href="!#" className="game_link">
        <div className="game">
          <div className="game_image_slot">
            <img
              className="game_image"
              src={require("./Dragon_Age_Inquisition.jpg")}
              alt="game-cover"
            />
          </div>
          <div className="game_title_price"></div>
        </div>
      </a>
      <a href="!#" className="game_link">
        <div className="game">
          <div className="game_image_slot">
            <img
              className="game_image"
              src={require("./Battlefield_Bad_Company_2.jpg")}
              alt="game-cover"
            />
          </div>
          <div className="game_title_price"></div>
        </div>
      </a>
      <a href="!#" className="game_link">
        <div className="game">
          <div className="game_image_slot">
            <img
              className="game_image"
              src={require("./Battlefield_3.jpg")}
              alt="game-cover"
            />
          </div>
          <div className="game_title_price"></div>
        </div>
      </a>
      <a href="!#" className="game_link">
        <div className="game">
          <div className="game_image_slot">
            <img
              className="game_image"
              src={require("./Battlefield_4.jpg")}
              alt="game-cover"
            />
          </div>
          <div className="game_title_price"></div>
        </div>
      </a>
      <a href="!#" className="game_link">
        <div className="game">
          <div className="game_image_slot">
            <img
              className="game_image"
              src={require("./Battlefield_1.jpg")}
              alt="game-cover"
            />
          </div>
          <div className="game_title_price"></div>
        </div>
      </a>
      <a href="!#" className="game_link">
        <div className="game">
          <div className="game_image_slot">
            <img
              className="game_image"
              src={require("./Fifa_20.jpg")}
              alt="game-cover"
            />
          </div>
          <div className="game_title_price"></div>
        </div>
      </a>
      <a href="!#" className="game_link">
        <div className="game">
          <div className="game_image_slot">
            <img
              className="game_image"
              src={require("./Madden_20.jpg")}
              alt="game-cover"
            />
          </div>
          <div className="game_title_price"></div>
        </div>
      </a>
      <a href="!#" className="game_link">
        <div className="game">
          <div className="game_image_slot">
            <img
              className="game_image"
              src={require("./NFS_Heat.jpg")}
              alt="game-cover"
            />
          </div>
          <div className="game_title_price"></div>
        </div>
      </a>
    </div>
  );
};

export default Store;
