import React, { Component } from 'react';

class TableHeader extends Component {
    state = {
        icon:[{
            id : 1 ,  icon : "trash-o" 
        }]
    }
    render() {
        const { columns } = this.props

        return (
            <thead className="table-head">
                <tr className="table-head-row">
                    {columns.map(column =>
                        <th className="table-head-list" key={column.id}>{column.lable}
                            <i className={this.state.icon.filter(icon => icon.id === column.id).map(item => `fa fa-${item.icon}`)}></i>
                        </th>
                    )}
                </tr>
            </thead>

        );
    }
}

export default TableHeader;


// const TableHeader = (props) => {

//     return (
//         <thead className="table-head">
//             <tr className="table-head-row">
//                 {columns.map(column =>
//                     <th  className="table-head-list" key={column.id}>{column.lable}
//                      <i className={columns.filter(icon => icon.id === column.id).map(item => `fa fa-${item.icon}`)}></i>
//                     </th>
//                 )}
//             </tr>
//         </thead>
//     );
// }

// export default TableHeader;