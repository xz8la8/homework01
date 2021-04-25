import React from "react";
import { Table, Typography, Tag, Button } from "antd";
import { Link } from "react-router-dom";

const { Text } = Typography;

export default class TodoList extends React.Component {
  render() {
    const { db } = this.props;
    return (
      <Table
        title={() => {
          return (
            <div style={{textAlign: 'right'}}>
            <Button type="primary">
              <Link to="/add">新增待办事项</Link>
            </Button>
            </div>
          );
        }}
        columns={[
          {
            key: "no",
            dataIndex: "no",
            title: "编号",
          },
          {
            key: "content",
            dataIndex: "content",
            title: "内容",
            render: (text, record) => {
              return <Text delete={record.finished}>{text}</Text>;
            },
          },
          {
            key: "category",
            dataIndex: "category",
            title: "类型",
            render: (text) => {
              return <Tag>{text}</Tag>;
            },
          },
          {
            key: "operation",
            title: "操作",
            render: (_, record) => {
              if (record.finished) {
                return (
                  <Button
                    size="small"
                    onClick={() => this.props.reopen(record.no)}
                  >
                    重新开始
                  </Button>
                );
              } else {
                return (
                  <Button
                    size="small"
                    type="primary"
                    onClick={() => this.props.finish(record.no)}
                  >
                    完成
                  </Button>
                );
              }
            },
          },
        ]}
        rowKey="no"
        dataSource={db}
        pagination={false}
      />
    );
  }
}
