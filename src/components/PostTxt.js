// npm
import React from "react";

// style
import '../style/PostTxt.scss';

function PostTxt({txt}){
    if(txt === ""){
        return false;
    } else {
        return(
            <div className="txt">
                {txt}
            </div>
        )
    }
}

export default PostTxt;