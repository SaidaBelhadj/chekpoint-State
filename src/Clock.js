import React  from 'react';
class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {interval: null,timer :0 };
    }
  
    componentDidMount() {
      this.setState ({interval : setInterval(
        () => {this.setState({timer:this.state.timer +1 });
      },  1000),
    });
    }
  
    componentWillUnmount() {
      clearInterval(this.state.interval);
    }
  
    
    render() {
      return (
        <div>
          <h2>Time interval since the last component was mounted : {this.state.interval}</h2>
        </div>
      );
    }
  }
  

  export default Clock;