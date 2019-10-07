import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class Square extends React.Component {
//   render() {
//     return(
//       <button
//         className="square"
//         onClick={this.props.onClick}
//       >
//         {this.props.value}
//       </button>
//     );
//   }
// }

function Square(props) {
  return (
    <button
      className="square"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return(
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="status">{this.props.status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      xIsNext: true,
      stepNumber: 0,
    }
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + this.currentPlayer();
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) return;

    squares[i] = this.currentPlayer();
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  currentPlayer() {
    return this.state.xIsNext ? 'X' : 'O';
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }
}

// ========================================

// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

/* ************************** */

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  tick(){
    this.setState({date: new Date()});
  }

  componentDidMount(){
    this.intervalId = setInterval(
      () => this.tick(),
      1000,
    )
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  render(){
    return(
      <div>
        <h1>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}


function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  const element = <div> test </div>;

  console.log(element);
  return (
    <a href="https://www.codewars.com/kata/how-many-numbers-iii/javascript" onClick={(e) => handleClick(e)}>
      Click me
    </a>
  );
}

/*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*/

function GuestGreating(){
  return(
    <div>Please, sign up here.</div>
  );
}

function UserGreating(props){
  const username = props.username;
  console.log(username);
  return(
    <div>{username && `${username}, `}Welcome back!</div>
  );
}

function Greating(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreating />
  }

  return(<GuestGreating />);
}

function SignInButton(props){
  return(
    <button onClick={props.onClick}>
      Sign in
    </button>
  );
}

function SignOutButton(props){
  return(
    <button onClick={props.onClick}>
      Sign out
    </button>
  );
}

class AuthenticationControl extends React.Component {
  constructor(props){
    super(props);

    this.state = {isLoggedIn: false};
  }

  handleLoginClick(){
    this.setState((prevState, props) => { return {isLoggedIn: true}; });
  }

  handleLogoutClick(){
    this.setState((prevState, props) => { return {isLoggedIn: false};});
  }

  render(){
    const button =  this.state.isLoggedIn ?
      <SignOutButton onClick={() => this.handleLogoutClick()} /> :
      <SignInButton onClick={() => this.handleLoginClick()} />

    return(
      <div>
        <div>
          <Greating isLoggedIn={this.state.isLoggedIn} />
        </div>
        {button}
      </div>
    );
  }
}

ReactDOM.render(
  <AuthenticationControl />,
  document.getElementById('root')
);
