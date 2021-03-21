import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUniversities } from '../redux/universitiesReducer'
import FormElement from './FormElement'


const Header = () => {

    const dispatch = useDispatch()

    const saved = useSelector(state => state.saved)

    const showSaved = () => dispatch(setUniversities(saved))

    return (
        <header className="header">

            <FormElement />

            {saved.length > 0 &&
                <>
                    <div className="header__checked-row pt-3">
                        <div className=" flex-column">
                            <input
                                onClick={showSaved}
                                value={`Saved university: ${saved.length}`}
                                type="button"
                                className="btn btn-primary" />
                        </div>
                    </div>
                </>}
        </header>
    )
}

export default Header