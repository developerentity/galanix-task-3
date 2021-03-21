import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToSaved, removeFromSaved, setSaved, setUniversities } from '../redux/universitiesReducer'
import { localStorageHelper } from '../util/localStorageHelper'
import TableRow from './TableRow'


const Table = () => {

    const dispatch = useDispatch()

    const universities = useSelector(state => state.universities)
    const saved = useSelector(state => state.saved)

    const add = uni => dispatch(addToSaved(uni))
    const remove = name => dispatch(removeFromSaved(name))

    useEffect(() => {
        if (localStorageHelper.getLocalData('uni_saved_arr')) {
            dispatch(setSaved(localStorageHelper.getLocalData('uni_saved_arr')))
        }
    }, [dispatch])

    useEffect(() => {
        localStorageHelper.setLocalData('uni_saved_arr', saved)
    }, [saved])

    useEffect(() => {
        if (localStorageHelper.getLocalData('uni_entered_arr')) {
            dispatch(setUniversities(localStorageHelper.getLocalData('uni_entered_arr')))
        }
    }, [dispatch])

    useEffect(() => {
        localStorageHelper.setLocalData('uni_entered_arr', universities)
    }, [universities])

    const tableRowList = universities.map((item, index) => {
        return <TableRow
            key={item.name.toString()}
            item={item}
            index={index}
            saved={saved}
            add={add}
            remove={remove} />
    })

    if (universities.length) {
        return (
            <section className="content">
                <table className="table table-dark table-hover mb-0">
                    <thead>
                        <tr>
                            <th scope="col">N</th>
                            <th scope="col">Name</th>
                            <th scope="col">Web pages</th>
                            <th scope="col">Domains</th>
                            <th scope="col">Country</th>
                            <th scope="col">Alpha two code</th>
                            <th scope="col">Is saved</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableRowList}
                    </tbody>
                </table>
            </section>
        )
    } else {
        return null
    }
}

export default Table