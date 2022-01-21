import React from 'react';
import "./index.css"
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './redux/actions/index'

const Main = () => {
    const mystate = useSelector((state) => state.changethenumber)
    const dispatch = useDispatch();
    return <div>
        <div className="container">

            <h1>Increment/decrement counter</h1>
            <h4>on CSS and JS</h4>

            <div className="quantity">
                <button onClick={() => dispatch(decNumber())} className="quantity__minus" title='increment'><span>-</span></button>
                <input name="quantity" type="text" className="quantity__input" value={mystate} />
                <button onClick={() => dispatch(incNumber())} className="quantity__plus" title='decrement'><span>+</span></button>
            </div>

        </div>
    </div>;
};

export default Main;
