import React from 'react';
import {getFriend} from '../actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux;'

class Friends extends React.Component {

    componentDidMount() {
        this.props.getFriend();
    }

    render(){
        return(
            <div>hello</div>
        )
    }
}


const mapStateToProps = ({ friends, fetchingFriends });

export default withRouter (
    connect(mapStateToProps,
        {getFriend})(Friends)
)