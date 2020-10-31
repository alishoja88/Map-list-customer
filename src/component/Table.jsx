import React, { Component } from 'react';
import TableHeader from "./TableHeader"
import TableBody from './TableBody'
import ListData from "../Data/ListOfSending"


class Table extends Component {
    columns = [
        { id: 1  , icon : "trash-o"} ,
        { lable: "نام خریدار", id: "نام خریدار" },
        { lable: "آدرس", id: "آدرس" },
        { lable: "منطقه", id: "منطقه" },
        { lable: "مبلغ قابل پرداخت", id: "مبلغ قابل پرداخت" },
        { lable: "شماره فاکتور", id: "شماره فاکتور" },
        { lable: "شناسه فاکتور", id: "شناسه فاکتور" },
        { lable: "ردیف", id: "ردیف" },
    ]



    render() {
        const { TableData, handelDelete } = this.props


        return (
            <table className="table table-bordered text-center">
                <TableHeader columns={this.columns} />
                {TableData.map((data , index) =>
                    <TableBody 
                    key={data.point_id}
                    handelDelete={handelDelete}
                    TableData={data}
                    index={index} />
                )}
            </table>

        );
    }
}

export default Table;
