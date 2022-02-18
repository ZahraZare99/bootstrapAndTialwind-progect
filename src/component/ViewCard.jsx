import react from "react";
import { FaMicrophoneSlash } from "react-icons/fa";
import { FaEllipsisV } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import "./viewCard.css";
class ViewCard extends react.Component {
    state = {
      cardList: [
        {
        microphone:<FaMicrophoneSlash/>,
        image: "/images/4.png",
        name: "Ehsan",
        },
        {
        microphone:<FaMicrophoneSlash/>,
        image: "/images/2.png",
        name: "morteza",
        },
        {
        borderclass:"border border-success",
        microphone:<FaMicrophone/>,
        image: "/images/5.png",
        name: "Navid",
        },
        {
        microphone:<FaMicrophoneSlash/>,
        image: "/images/1.png",
        name: "Nooshin",
        },
        {
        microphone:<FaMicrophoneSlash/>,
        image: "/images/3.png",
        name: "fateme",
        },
        {
        microphone:<FaMicrophoneSlash/>,
        image: "/images/4.png",
        name: "Reza",
        },
        {
        microphone:<FaMicrophoneSlash/>,
        image: "/images/5.png",
        name: "Ahmad",
        }
        ,
        {
        microphone:<FaMicrophoneSlash/>,
        image: "/images/1.png",
        name: "You",
        }
        ,
        {
        microphone:<FaMicrophoneSlash/>,
        image: "/images/6.png",
        name: "fateme",
        }
        
      ]
    };
  
    render() {
      return (
        <div className="viewCard d-flex justify-content-center bg-secondary">
          <div className="darkBody d-grid col m-3 p-1 bg-dark">
            {this.state.cardList.map((card, index) => {
              return (
                <div
                  className={`p-2 d-flex flex-column col-12 bg-dark ${card.borderclass}`}key={index} >
                  <span className={`d-flex justify-content-end pb-2 px-2 `}>
                  <span  
                    className="d-flex"
                    style={{fontSize: '20px',backgroundColor:"white",borderRadius:"50%",opacity:"0.5",padding:"4px"}}>
                      {card.microphone}
                    </span>
                  </span>
                  <span className="d-flex justify-content-center">
                    <img
                    className="d-flex"
                      src={card.image}
                      key={index}
                      alt="NL"
                      style={{ width: "50px", height: "50px" }}
                    />
                  </span>
                  <span className="d-flex justify-content-between align-items-center pt-3 px-2">
                  <h5 className="d-flex p-0 m-0 fs-6" style={{color:"white"}}>{card.name}</h5>
                  <FaEllipsisV style={{color: 'white', fontSize: '15px'}}/>  
                  </span>
                </div>
              );
            })}
            <div className="footer-user bg-dark d-grid px-2 py-3">
              <div className="d-flex col flex-fill justify-content-center">
                <FaPhone  style={{color:"white",fontSize: '35px',backgroundColor:"red",borderRadius:"50%",opacity:"1",padding:"7px", margin:"0 9px"}}/> 
                <FaVideo  style={{fontSize: '35px',backgroundColor:"white",borderRadius:"50%",opacity:"0.5",padding:"7px", margin:"0 9px"}}/> 
                <FaMicrophoneSlash  style={{fontSize: '35px',backgroundColor:"white",borderRadius:"50%",opacity:"0.5",padding:"7px", margin:"0 9px"}}/> 
                <FaEllipsisV style={{fontSize: '35px',backgroundColor:"white",borderRadius:"50%",opacity:"0.5",padding:"8px", margin:"0 9px"}}/> 
              </div>
            </div>
            </div>
          </div>
      );
    }
  }
  export default ViewCard;