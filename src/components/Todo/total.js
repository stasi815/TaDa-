import React from 'react'
import { connect } from 'react-redux'

function Total(props) {
    return (
        <div>
            <p>Total Points: {props.total}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        total: state.total
    }
}

export default connect(mapStateToProps)(Total)