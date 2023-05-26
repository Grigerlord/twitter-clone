import "../styles/layersStyles/Menu.css";
import { FaTwitter,  } from "react-icons/fa";

import { ITEMS } from '../utils/MenuItemList'
import { IconContext } from "react-icons";

import MenuItem from '../components/MenuItem';
import BlueButton from '../components/BlueButton';
import CardAcount from '../components/CardAcount';

function Menu() {

  return (
    <IconContext.Provider
      value={{
        color: "#e7e9ea",
        className: "global-class-name",
        size: "1.6rem",
      }}
    >
      <div className="menuList">
        <div className="listUp">
          <a href='#' className="init-button">
            <FaTwitter size="1.8rem" />
          </a>

          <div className="menu">
            {
              ITEMS.map((item, i) => {
                return (
                  <MenuItem
                    text={item.text}
                    key={item.text}
                    item={item}
                  />
                )
              })
            }
          </div>

          <div className="boxBlueButton">
            <BlueButton text="Twittear" />
          </div>
        </div>

        <div className="cardACountMatrix">
          <CardAcount />
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Menu;
