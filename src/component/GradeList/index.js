//LSY
//2028-9-6
import React from 'react';
import { Table } from 'antd';
import { Link } from 'dva/router';

const GradeList = ({ gradeData }) => {
    const columns = [{
        title: "日期",
        dataIndex: "date",
    }, {
        title: "时间",
        dataIndex: 'time',
    }, {
        title: "公开团体赛",
        dataIndex: 'gameteam',
        render: (text, row) => {
            return (
                <Link to="/details/grade/graresult">{text}</Link>
            )
        }
    }]
    return (
        <div>
            <Table
                columns={columns}
                dataSource={gradeData}
            />
        </div>
    )
}

export default GradeList;