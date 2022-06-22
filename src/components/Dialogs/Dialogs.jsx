import React from 'react';
import { NavLink } from 'react-router-dom';
import D from "./Dialogs.module.css";

const Dialogs = (props) => {
    return (
        <div className={D.dialogs}>
            <div className={D.dialogs_items}>
                <div className={D.dialog + ' ' + D.active}>
                    <NavLink to="/dialogs/1"> Alex </NavLink>
                </div>
                <div className={D.dialog}>
                    <NavLink to="/dialogs/2"> Andrey </NavLink>
                    
                </div>
                <div className={D.dialog}>
                    <NavLink to="/dialogs/3"> Max </NavLink>
                    
                </div>
                <div className={D.dialog}>
                    <NavLink to="/dialogs/4"> Sveta </NavLink>
                    
                </div>
            </div>
            <div className={D.messages}>
                <div className={D.message}>Hi</div>
                <div className={D.message}>How is your WWW?</div>
                <div className={D.message}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs;