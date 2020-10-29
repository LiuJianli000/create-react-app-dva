import React, { Component } from 'react';
import { Button } from 'antd'
import { Link } from 'dva/router';

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div style={{ margin: 10 }}>
        <h3>Count</h3>
        <div style={{ marginTop: 15 }}>
          <Link to="/">
            <Button>To TodoList</Button>
          </Link>
        </div>
      </div>
     );
  }
}
 
export default Count;