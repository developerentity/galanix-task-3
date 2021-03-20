import React, { useEffect, useState } from 'react'


const Table = () => {

    const [data, setData] = useState({})

    useEffect(() => {
        fetch("http://universities.hipolabs.com/search?name=middle&country=Kuwait")
            .then(data => data.json())
            .then(obj => setData(obj[0]))

            .catch(err => console.error(err))
    }, [])

    const keysArr = Object.keys(data)

    const tableRowList = keysArr?.map((item, index) => {
        if (data[item]) {
            return <tr key={item.toString()}>
                <th scope="row">{index + 1}</th>
                <th>{item}</th>
                <td>
                    {typeof data[item] !== 'string'
                        ? data[item]?.map(j => {
                            return item === "web_pages"
                                ? <a key={j.toString()} href={j}>{j + ' '}</a>
                                : <p key={j.toString()} className="m-0">{j + ' '}</p>
                        })
                        : data[item]}
                </td>
            </tr>
        }
        return null
    })

    return (
        <section className="content">
            <table className="table table-dark table-hover mb-0">
                <tbody>
                    {tableRowList}
                </tbody>
            </table>
        </section>
    )
}

export default Table