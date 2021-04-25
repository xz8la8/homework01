import React from "react";
import { Form, Input, Select, Button } from "antd";
import { useHistory } from "react-router-dom";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 14 },
};

const AddTodo = (props) => {
  const history = useHistory();

  return (
    <Form {...layout} onFinish={(values) => {
      props.add(values);
      history.push('/');
    }}>
      <Form.Item
        label="待办事项"
        name="content"
        rules={[{ required: true, message: "请输入待办事项" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="类型"
        name="category"
        rules={[{ required: true, message: "请选择类型" }]}
      >
        <Select>
          <Select.Option value="工作">工作</Select.Option>
          <Select.Option value="活动">活动</Select.Option>
          <Select.Option value="其他">其他</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddTodo;
