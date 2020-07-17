import React from "react";
import Buttons from "../buttons";
import 'bootstrap/dist/css/bootstrap.css'
import 'mdbreact/dist/css/mdb.css';
import './app.css'
import {MDBContainer} from "mdbreact";
import Body from "../body";


const App = () => {
    return (
        <MDBContainer>
            <div className="mt-5">
                <Buttons/>
                <Body/>
            </div>
        </MDBContainer>
    )
}



export default App;