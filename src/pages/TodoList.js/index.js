import React, { Component } from 'react';
import Button from 'antd/lib/button/button';
import Input from 'antd/lib/input';
import { List } from 'antd/lib/form/Form';
import { connect } from 'dva';

@connect(() => ({}))
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div style={{ margin: 10 }}>
        <div>
          <Input
            placeholder='Write something...'
            style={{ width: 300, marginRight: 10 }}
            // onChange={handleValueChange}
            // onPressEnter={handleAdd}
            allowClear
            // value={inputValue}  // 如果没有 subscribe，input 输入无效
          />
          <Button
            type="primary"
            // onClick={handleAdd}
          >
            Add
          </Button>
        </div>
        <div style={{ marginTop: 10, width: 300 }}>
          <List
            bordered
            dataSource={[]}
            renderItem={(item, index) => 
              <List.Item 
                // onClick={() => handleDele(index)}
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