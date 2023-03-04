// npm
import React from "react";

// style
import '../style/PostImg.scss';

function PostImg({img}){
    if(img === ""){
        return false;
    } else if(img.length === 1) {
        return(
            <div className="img">
                <ul>
                    <li>
                        <img src={img[0].src} alt={img[0].alt}/>
                    </li>
                </ul>
            </div>
        )
    } else {
        return(
            <div className="img">
                <ul>
                    {img.map(
                        (imgs,index) => {return(
                            <li key={index} >
                                <img src={"../images/"+imgs.src} alt={imgs.alt}/>
                            </li>
                        )}
                    )}
                </ul>
                <div id="remote">
                    <button id="prev" >
                        <i className="fa-solid fa-angle-left"></i>
                    </button>
                    <button id="next" >
                        <i className="fa-solid fa-angle-right"></i>
                    </button>
                </div>
                <div id="paging">
                    <span id="nowImgNo">1</span>
                     / 
                    <span id="allImgEa">2</span>
                </div>
            </div>
        )
    }
}
export default PostImg;