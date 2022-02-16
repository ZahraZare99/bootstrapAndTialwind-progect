import react from "react";

// import { BiMicrophoneOff } from "react-icons/fa";
class ViewCard extends react.Component{
   
        state = {
           cardList:[
            //    {className:"col-3 p-2 d-flex "},
               {
                iconName:require("../images/no-recording.png"),
                image:require("../images/1.png"),
                name:"Ehsan",
                footerIcon:"fa fa-ellipsis-h"
               },
               {
                iconName:require("../images/no-recording.png"),
                image:require("../images/2.png"),
                name:"morteza",
                footerIcon:"fa fa-ellipsis-h"
              },
              {
                iconName:require("../images/no-recording.png"),
                image:require("../images/3.png"),
                name:"Navid",
                footerIcon:"fa fa-ellipsis-h"
            },
            {
                iconName:require("../images/no-recording.png"),
                image:require("../images/4.png"),
                name:"Nooshin",
                footerIcon:"fa fa-ellipsis-h"
            },
            {
                iconName:require("../images/no-recording.png"),
                image:require("../images/5.png"),
                name:"fateme",
                footerIcon:"fa fa-ellipsis-h"
            },
            {
                iconName:require("../images/no-recording.png"),
                image:require("../images/6.png"),
                name:"Reza",
                footerIcon:"fa fa-ellipsis-h"
            },
            {
                iconName:require("../images/no-recording.png"),
                image:require("../images/1.png"),
                name:"Ahmad",
                footerIcon:"fa fa-ellipsis-h"
            },
            {
                iconName:require("../images/no-recording.png"),
                image:require("../images/2.png"),
                name:"Zahra",
                footerIcon:"fa fa-ellipsis-h"
            },
            {
                iconName:require("../images/no-recording.png"),
                image:require("../images/3.png"),
                name:"mohammad",
                footerIcon:"fa fa-ellipsis-h"
            },
           ]
        }
  
    render(){
        return(
            <div className="viewCard d-flex justify-content-center bg-secondary">
                
                <div className="d-flex flex-wrap m-2 bg-danger">
                    {this.state.cardList.map((card,index) => {
                        return(
                            <div className="col-3 p-1 m-1 d-flex flex-column justify-content-center flex-fill" key={index}>
                                <span><image src={card.iconName} key={index}></image></span>
                                <span><image src={card.image} key={index}></image></span>
                                <h5>{card.name}</h5>
                             </div>
                        )
                    })}
                   
                </div>
            </div>
        )
    }
}
export default ViewCard;