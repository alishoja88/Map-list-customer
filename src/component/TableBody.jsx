import React from 'react';

const TableBody = (props) => {
    const { TableData, index, handelDelete } = props
    return (
        <tbody className="table-body">

            <tr className="table-body-row">
                <td>
                    <button
                        onClick={() => handelDelete(TableData.properties.point_id)}
                        className="btn btn-danger btn-sm">delet
                         </button>
                </td>
                <td className="table=body-list">{TableData.properties.BUYER}</td>
                <td className="table=body-list">{TableData.properties.ADDRESS}</td>
                <td className="table=body-list">{TableData.properties.district}</td>
                <td className="table=body-list">{TableData.properties.AMOUNT_PAYABLE}</td>
                <td className="table=body-list">{TableData.properties.NUMBER_FACTOR}</td>
                <td className="table=body-list">{TableData.properties.ID_FACTOR}</td>
                <td className="table=body-list">{index + 1}</td>
            </tr>



        </tbody>
    );
}

export default TableBody;