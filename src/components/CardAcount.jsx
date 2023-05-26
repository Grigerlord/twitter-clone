import "../styles/componentsStyles/CardAcount.css";
import { HiEllipsisHorizontal,  } from "react-icons/hi2";

function CardAcount({ userImg, userName, user }) {
    return (
        <div className='cardAcount'>
            <div className="cardAcount-user--img">
                {/* <img src="https://unavatar.io/twitter/joseangel" alt="user Img" /> */}
                <img src="https://pbs.twimg.com/profile_images/1483289887902208001/KVQGNL5t_400x400.jpg" alt="user Img" />
            </div>
            <div className="cardAcount-userInfo">
                <div className="cardAcount-userInfo--name">Griger</div>
                <span className="cardAcount-userInfo--user">@grigerratia</span>
            </div>
            <div className="cardAcount-menu">
                <HiEllipsisHorizontal />
            </div>
        </div>
    );
}

export default CardAcount;