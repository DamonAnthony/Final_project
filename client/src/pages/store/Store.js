import React from "react";
import "./Store.css";

const Store = () => {
  return (
    <div className="games">
      <a href="/Store/DragonAgeOrigins" className="game_link">
        <div className="game">
          <div className="game_image_slot">
            <img
              className="game_image"
              src={require("../../games/Dragon Age/Dragon_Age_Origins.jpg")}
              alt="game-cover"
            />
          </div>
          <div className="game_title_price">
            <span className="store-store-title">Dragon Age: Origins</span>
            <span className="store-store-price">R 349.95</span>
          </div>
        </div>
      </a>
      <a href="/Store/DragonAge2" className="game_link">
        <div className="game">
          <div className="game_image_slot">
            <img
              className="game_image"
              src={require("../../games/Dragon Age 2/Dragon_Age_2.jpg")}
              alt="game-cover"
            />
          </div>
          <div className="game_title_price">
            <span className="store-title">Dragon Age 2</span>
            <span className="store-price">R 349.95</span>
          </div>
        </div>
      </a>
      <a href="/Store/DragonAgeInquisition" className="game_link">
        <div className="game">
          <div className="game_image_slot">
            <img
              className="game_image"
              src={require("../../games/Dragon Age Inquisition/Dragon_Age_Inquisition.jpg")}
              alt="game-cover"
            />
          </div>
          <div className="game_title_price">
            <span className="store-title">Dragon Age Inquisition</span>
            <span className="store-price">R 349.95</span>
          </div>
        </div>
      </a>
      <a href="/Store/Fifa20" className="game_link">
        <div className="game">
          <div className="game_image_slot">
            <img
              className="game_image"
              src={require("../../games/Fifa 20/Fifa_20.jpg")}
              alt="game-cover"
            />
          </div>
          <div className="game_title_price">
            <span className="store-title">Fifa 20</span>
            <span className="store-price">R 345.95</span>
          </div>
        </div>
      </a>
      <a href="/Store/BattlefieldBadCompany2" className="game_link">
        <div className="game">
          <div className="game_image_slot">
            <img
              className="game_image"
              src={require("../../games/Battlefield Bad Company 2/Battlefield_Bad_Company_2.jpg")}
              alt="game-cover"
            />
          </div>
          <div className="game_title_price">
            <span className="store-title">Battlefield Bad Company 2</span>
            <span className="store-price">R 349.95</span>
          </div>
        </div>
      </a>
      <a href="/Store/Battlefield3" className="game_link">
        <div className="game">
          <div className="game_image_slot">
            <img
              className="game_image"
              src={require("../../games/Battlefield 3/Battlefield_3.jpg")}
              alt="game-cover"
            />
          </div>
          <div className="game_title_price">
            <span className="store-title">Battlefield 3</span>
            <span className="store-price">R 349.95</span>
          </div>
        </div>
      </a>
      <a href="/Store/Battlefield4" className="game_link">
        <div className="game">
          <div className="game_image_slot">
            <img
              className="game_image"
              src={require("../../games/Battlefield 4/Battlefield_4.jpg")}
              alt="game-cover"
            />
          </div>
          <div className="game_title_price">
            <span className="store-title">Battlefield 4</span>
            <span className="store-price">R 349.95</span>
          </div>
        </div>
      </a>
      <a href="/Store/Battlefield1" className="game_link">
        <div className="game">
          <div className="game_image_slot">
            <img
              className="game_image"
              src={require("../../games/Battlefield 1/Battlefield_1.jpg")}
              alt="game-cover"
            />
          </div>
          <div className="game_title_price">
            <span className="store-title">Battlfield 1</span>
            <span className="store-price">R 349.95</span>
          </div>
        </div>
      </a>
      <a href="/Store/Madden20" className="game_link">
        <div className="game">
          <div className="game_image_slot">
            <img
              className="game_image"
              src={require("../../games/Madden 20/Madden_20.jpg")}
              alt="game-cover"
            />
          </div>
          <div className="game_title_price">
            <span className="store-title">Madden 20</span>
            <span className="store-price">R 349.95</span>
          </div>
        </div>
      </a>
      <a href="/Store/NFSHeat" className="game_link">
        <div className="game">
          <div className="game_image_slot">
            <img
              className="game_image"
              src={require("../../games/NFS Heat/NFS_Heat.jpg")}
              alt="game-cover"
            />
          </div>
          <div className="game_title_price">
            <span className="store-title">NFS Heat</span>
            <span className="store-price">R 349.95</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Store;
