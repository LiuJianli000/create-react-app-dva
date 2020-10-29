import React, { Component } from 'react';
import { Button, Input, List } from 'antd'
import { connect } from 'dva';

@connect(({ todoList }) => ({
  inputValue: todoList.inputValue,
  list: todoList.list
}))
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentDidMount() {
    this.fetchList()
  }

  fetchList = () => {
    const { dispatch } = this.props

    dispatch({
      type: 'todoList/fetch'
    })
  }

  handleValueChange = e => {
    const { dispatch } = this.props

    dispatch({
      type: 'todoList/inputChange',
      value: e.target.value
    })
  }

  handleAdd = () => {
    const { dispatch } = this.props

    dispatch({
      type: 'todoList/addItem'
    })
  }

  handleDele = index => {
    const { dispatch } = this.props

    dispatch({
      type: 'todoList/deleItem',
      index
    })
  }

  render() { 
    const { inputValue, list } = this.props

    return ( 
      <div style={{ margin: 10 }}>
        <div>
          <Input
            placeholder='Write something...'
            style={{ width: 300, marginRight: 10 }}
            onChange={this.handleValueChange}
            onPressEnter={this.handleAdd}
            allowClear
            value={inputValue}
          />
          <Button
            type="primary"
            onClick={this.handleAdd}
          >
            Add
          </Button>
        </div>
        <div style={{ marginTop: 10, width: 300 }}>
          <List
            bordered
            dataSource={list}
            renderItem={(item, index) => 
              <List.Item
                onClick={() => this.handleDele(index)}
              >
                {item}
              </List.Item>
            }
          />
        </div>
      </div>
     );
  }
}
 
export default TodoList;