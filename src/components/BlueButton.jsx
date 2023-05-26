import "../styles/componentsStyles/BlueButton.css";

function BlueButton({text, fontSize}) {
  return (
   <a href="#" className="blueButton--active" >
    <div className="contentButton">
      { text }
    </div>
   </a>
  );
}

export default BlueButton;