import React from 'react';
import D from "./Dialogs.module.css";

const Dialogs = (props) => {
    return (
        <div className={D.dialogs}>
            <div className={D.dialogs_items}>
                <div className={D.dialog + ' ' + D.active}>
                    Alex
                </div>
                <div className={D.dialog}>
                    Andrey
                </div>
                <div className={D.dialog}>
                    Max
                </div>
                <div className={D.dialog}>
                    Sveta
                </div>
            </div>
            <div className={D.messages}>
                <div className={D.message}>Hi</div>
                <div className={D.message}>How is your WWW</div>
                <div className={D.message}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs;