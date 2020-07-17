import {MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardText} from "mdbreact";
import React from 'react'

const ContentItem = ({itemContent,index}) => {
    const {icon,name,description} = itemContent;

    const marginTop = index >= 2 ? 'mt-4' : ''

    return (
        <MDBCol size="6" key={icon}>
            <MDBCard className={`${marginTop}`}>
                <MDBCardImage className="w-100" src={`https://api.t3d.live/${icon}`} />
                <MDBCardBody>
                    <MDBCardText>
                        <div><b>Название:</b> {name}</div>
                        <div className="mt-3">
                            <b>Описание:</b>
                            <div>{description}</div>
                        </div>
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    )
}


export default ContentItem;