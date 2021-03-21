import React from 'react'


const TableRow = ({ item, index, saved, add, remove }) => {

    let checkBoxValue = !!saved.find(uni => uni.name === item.name)

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
                        onChange={() => {
                            checkBoxValue
                                ? remove(item.name)
                                : add(item)
                        }}
                        checked={checkBoxValue}
                        className="form-check-input"
                        type="checkbox" />
                </div>
            </td>
        </tr>
    )
}

export default TableRow