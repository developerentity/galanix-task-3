import React, { useEffect, useState } from 'react'


const TableRow = ({ item, index }) => {

    const [val, setVal] = useState(false)

    useEffect(() => {
        console.log(val)
    }, [val])

    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{item.name}</td>
            <td><a href={item.web_pages[0]}>{item.web_pages[0]}</a></td>
            <td>{item.domains[0]}</td>
            <td>{item.country}</td>
            <td>{item.alpha_two_code}</td>
            <td>
                <div className="form-check">
                    <input
                        onChange={() => setVal(!val)}
                        value={val}
                        className="form-check-input"
                        type="checkbox" />
                </div>
            </td>
        </tr>
    )
}

export default TableRow