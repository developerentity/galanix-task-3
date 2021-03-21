import { useState } from "react"
import { useDispatch } from "react-redux"
import { getUniversities, setUniversities } from "../redux/universitiesReducer"


const FormElement = () => {

    const dispatch = useDispatch()

    const [val, setVal] = useState('')

    const handleSubmit = (event) => {
        val && dispatch(getUniversities(val))
        event.preventDefault()
    }

    const reset = () => {
        dispatch(setUniversities([]))
        setVal('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter country</label>
            <div className="input-group">
                <input
                    onChange={(e) => setVal(e.target.value)}
                    value={val}
                    className="form-control"
                    type="text" />
            </div>
            <div className="header__btn-row pt-3">
                <input
                    onClick={reset}
                    type="reset"
                    value="Reset"
                    className="btn btn-danger" />
                <input
                    type="submit"
                    value="Submit"
                    className="btn btn-primary" />
            </div>
        </form>
    )
}

export default FormElement