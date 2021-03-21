import React from 'react'
import { useSelector } from 'react-redux'
import FormElement from './FormElement'


const Header = () => {

    const saved = useSelector(state => state.saved)

    return (
        <header className="header">

            <FormElement />

            {saved.length > 0 &&
                <div className="header__checked-row pt-3">
                    Saved: {saved.length}
                </div>}
        </header>
    )
}

export default Header