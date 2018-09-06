import styles from './gamelocal.css';
import { Table } from 'antd';
const columns = [{
  title: '赛事名称',
  dataIndex: 'name',
  width: 150,
  render: text => <a href="javascript:;">{text}</a>
}, {
  title: '举办方',
  dataIndex: 'age',
  width: 150,
}, {
  title: '时间',
  dataIndex: 'time',
  width: 150,
}, {
  title:'类型',
  dataIndex:'tags',
  width: 150,
},{
  title:'备注',
  dataIndex:'ps',
  width: 150,
}];
const data = [
{key: 1,
name: '输入赛事名称',
age: '输入举办方',
time: '输入举办时间',
tags:'地方',
ps:'地方'},
{key: 2,
name: '输入赛事名称',
age: '输入举办方',
time: '输入举办时间',
tags:'地方',
ps:'地方'},
{key: 3,
name: '输入赛事名称',
age: '输入举办方',
time: '输入举办时间',
tags:'地方',
ps:'地方'},
{key: 4,
name: '输入赛事名称',
age: '输入举办方',
time: '输入举办时间',
tags:'地方',
ps:'地方'},
{key: 5,
name: '输入赛事名称',
age: '输入举办方',
time: '输入举办时间',
tags:'地方',
ps:'地方'},
{key: 6,
name: '输入赛事名称',
age: '输入举办方',
time: '输入举办时间',
tags:'地方',
ps:'全国'},]
export default function() {
  return (
    <div className={styles.normal}>
      <h1><Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} scroll={{ y: 300 }} /></h1>
    
    </div>
  );
}
