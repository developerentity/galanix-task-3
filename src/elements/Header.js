import React from 'react'
import FormElement from './FormElement'


const Header = ({ countSaved }) => {

    return (
        <header className="header">

            <FormElement />

            {countSaved &&
                <div className="header__checked-row pt-3">
                    Saved: {countSaved}
                </div>}
        </header>
    )
}

export default Header