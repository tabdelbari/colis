import PropTypes from 'prop-types';
import React from 'react';
import {deleteColis, getColis, postColis, putColis} from "../../actions";
import {connect} from 'react-redux';


class Colis extends React.Component {

    componentDidMount() {
        this.props.getColis();
    }

    render() {
        return (
            <ul>
                {
                    this.props.colis.map(colis => {
                        return (
                            <li key={colis.id}>{`Destination: ${colis.destination}, Sender: ${colis.sender}, Receiver: ${colis.receiver}`}</li>
                        )
                    })
                }
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        colis: state.colis.colis,
    }
}
const mapDispatchToProps = {getColis, postColis, putColis, deleteColis}

export default connect(mapStateToProps, mapDispatchToProps)(Colis)

