import React from 'react'


const Header = ({ countSaved }) => {

    return (
        <header className="header">
            <div className="input-group mb-3">
                <input className="form-control" type="text" name="" id="" />
            </div>

            <div className="header__btn-row">
                <button className="btn btn-danger">Reset</button>
                <button className="btn btn-primary">Submit</button>
            </div>

            {countSaved &&
                <div className="header__checked-row pt-3">
                    Saved: {countSaved}
                </div>}
        </header>
    )
}

export default Header