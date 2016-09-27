const app = "I don't do much.";
const React = require('react');

class Tickler extends React.Component {
  constructor() {
    super();
 
    this.tickle = this.tickle.bind(this);
  }
 
  tickle() {
    console.log('Tee hee!');
  }
 
  render() {
    return (
      <button onClick={this.tickle}>Tickle me!</button>
    );
  }
}