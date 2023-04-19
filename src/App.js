import './App.css';
import React from 'react';
import Result from './components/Result';
import Buttons from './components/Buttons';

class App extends React.Component {

  state = {
    firstSpanResult: '',
    secondSpanResult: '',
  }

  handleClick = (button) => {

    const {firstSpanResult, secondSpanResult} = this.state;

    let newSpanResult = '';

    if (button === 'AC') {
      this.setState({
        firstSpanResult: '',
        secondSpanResult: '',
      })
      
    } else if (button === 'DEL') {
      if (!firstSpanResult) return
      newSpanResult = firstSpanResult.substring(0, firstSpanResult.length - 1);

      this.setState({
        firstSpanResult: newSpanResult,
      })


    } else if (button === '=') {
      if (!firstSpanResult) return
      const sum = secondSpanResult + firstSpanResult
      console.log(eval(sum))
      newSpanResult = eval(sum);

      this.setState({
        firstSpanResult: newSpanResult,
        secondSpanResult: ''
      })


    } else {
      const lastMark = secondSpanResult.substring(secondSpanResult.length - 1);
      if (button === '/' || button === '*' || button === '-' || button === '+') {
        if (lastMark.includes('/') || lastMark.includes('*') || lastMark.includes('-') || lastMark.includes('+') || !firstSpanResult) return;
        this.setState({
          secondSpanResult: secondSpanResult + firstSpanResult + button,
          firstSpanResult: '',
        })
      } else {
        if (firstSpanResult.substring(firstSpanResult.length - 1  && button === '.') === '.' || (button === '.' && !firstSpanResult)) return;
        this.setState({
          firstSpanResult: firstSpanResult + button
        })
      }

      
    }
  }


  render () {
  return (
    <div className="App">
      <div className="calculator">
        <Result firstSpanResult={this.state.firstSpanResult} secondSpanResult={this.state.secondSpanResult}/>
        <div className="buttons-container">
          <Buttons click={this.handleClick}/>
        </div>
      </div>
    </div>
  );
}
}

export default App;
