import React, { Component } from 'react';

export class Content1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isLoading: true
    };
    console.log('Constructor: : Content1');
  }


  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate: Content1');
    if (nextState.data !== this.state.data) {
      return true;
    }
    return false;
  }


  render() {
    console.log('render: Content1');
    return (
      <div>
        {this.state.isLoading ? (
          <p>Завантаження...</p>
        ) : (
          <p>Отримані дані: {this.state.data}</p>
        )}
      </div>
    );
  }

  
  componentDidMount() {
    console.log('componentDidMount: Content1');

    setTimeout(() => {
      this.setState({
        data: 'Дані успішно отримано',
        isLoading: false
      });
    }, 2000);
  }


  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: Content1');
    if (prevState.data !== this.state.data) {
      console.log('Дані оновлено:', this.state.data);
    }
  }


  componentWillUnmount() {
    console.log('componentWillUnmount: Content1');
    
  }
}

export default Content1;
