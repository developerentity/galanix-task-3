import React from 'react'
import { useSelector } from 'react-redux'
import TableRow from './TableRow'


const Table = () => {

    const universities = useSelector(state => state.universities)

    const tableRowList = universities.map((item, index) => {
        return <TableRow item={item} index={index} key={item.name.toString()} />
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