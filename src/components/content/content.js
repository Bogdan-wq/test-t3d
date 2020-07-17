import React from "react";
import {MDBRow} from "mdbreact";
import ContentItem from "../content-item";

const Content = ({content}) => {
    return (

        <MDBRow>
            {
                content.map((itemContent,index) => {
                    return <ContentItem
                                itemContent={itemContent}
                                index={index}
                                key={itemContent.icon}/>
                })
            }
        </MDBRow>
    )
}

export default Content;