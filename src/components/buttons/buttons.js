import React from "react";
import {MDBBtn, MDBBtnGroup} from "mdbreact";
import {connect} from "react-redux"
import getData from "../../fetch-client";
import {fetchDataError, fetchDataLoading, fetchDataSuccess, showData, removeData, noData} from "../../actions";

const Buttons = (props) => {

    const {fetchData,showData,removeData,content} = props;

    const disabled = !content ? false : true;

    return (
        <div className="d-flex justify-content-center">
            <MDBBtnGroup>
                <MDBBtn color="primary"
                        onClick={fetchData}
                        disabled={disabled}>
                    Запросить
                </MDBBtn>
                <MDBBtn
                    color="primary"
                    onClick={() => showData(content)}>
                    Показать</MDBBtn>
                <MDBBtn
                    color="primary"
                    onClick={removeData}>
                    Очистить
                </MDBBtn>
            </MDBBtnGroup>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        content:state.content,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData:() => {
            dispatch(fetchDataLoading())
            getData()
                .then((res) => dispatch(fetchDataSuccess(res)))
                .catch(() => dispatch(fetchDataError()))
        },
        showData:(content) => {
            if(!content) {
                dispatch(noData())
            } else {
                dispatch(showData())
            }

        },
        removeData:() => {
            dispatch(removeData())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Buttons);