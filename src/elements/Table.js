import React from 'react'
import { useSelector } from 'react-redux'


const Table = () => {

    const universities = useSelector(state => state.universities)

    const tableRowList = universities.map((item, index) => {
        return (
            <tr key={item.name.toString()}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td><a href={item.web_pages[0]}>{item.web_pages[0]}</a></td>
                <td>{item.domains[0]}</td>
                <td>{item.country}</td>
                <td>{item.alpha_two_code}</td>
            </tr>
        )
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