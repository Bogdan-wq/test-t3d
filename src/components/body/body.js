import React from "react";
import {connect} from 'react-redux';
import LoadingIndicator from "../loading-indicator";
import Content from "../content";
import ErrorIndicator from "../error-indicator";

const Body = (props) => {
    const {content,loading,error,isShown,noDataToShow} = props;


    const labelIfDataAbsent = (!content && !loading && !error && !isShown) || noDataToShow
        ? <div className="lead text-center">Данные отсутствуют.</div>
        : null;

    const labelIfDataReady = content && !loading && !error && !isShown
        ? <div className="lead text-center">Данные готовы для показа.</div>
        : null;


    const loadingIndicator = loading
        ? <LoadingIndicator/>
        : null;

    const errorIndicator = error
        ? <ErrorIndicator/>
        : null;

    const contentToShow = isShown
        ? <Content content={content}/>
        : null;



    return (
        <div className="w-50 mt-4 mx-auto">
            {contentToShow}
            {loadingIndicator}
            {errorIndicator}
            {labelIfDataReady}
            {labelIfDataAbsent}
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        content:state.content,
        loading:state.loading,
        error:state.error,
        isShown:state.isShown,
        state:state.noDataToShow,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {}
}


export default connect(mapStateToProps,mapDispatchToProps)(Body);