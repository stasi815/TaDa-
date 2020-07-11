import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearTotal } from '../../actions';
import './point-total.css'



function PointTotal(props) {
        const dispatch = useDispatch()
        const total = useSelector(state => state.total)
        return (
            <div className='total'>
                <h3 className='point-display'>
                    Total Points: {total}
                    <button
                        className='clear-button'
                        onClick={(e) => {
                                    dispatch(clearTotal())
                                }
                            }>Clear
                    </button>
                </h3>
            </div>
        )
}


export default PointTotal