var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
  getInitialState: function(){
    return {
      count: 0,
      countdownStatus:'stopped'
    };
  },
  componentDidUpdate: function(prevProps,prevState){
    if(this.state.countdownStatus !== prevState.countdownStatus){
      switch(this.state.countdownStatus){
        case 'started':
          this.startTimer();
          break;


      }

    }
  },
  startTimer: function(){
    // setInterval function call the function or evaluates an expression at
    // specified intervals( 1 sec in this case)
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount: 0
      });
    },1000);
  },
  handleSetCountdown: function(seconds){
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });

  },
  render: function(){
    var {count} = this.state;
   return (
    <div>
      <Clock totalSeconds={count}/>
      <CountdownForm onSetCountdown={this.handleSetCountdown}/>
    </div>
    );
  }
});

module.exports = Countdown;