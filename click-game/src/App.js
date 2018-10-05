import React, { Component } from 'react';
import './App.css';
import Card from "./components/Card";
import Header from "./components/Header";
import blocks from "./blocks.json";

class App extends Component {

  state = {
    score: 0,
    hiScore: 0,
    IDsGuessed: [],
    allBlocks: []
  };

  componentDidMount() {
    this.fillCards();
  }

  shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  fillCards = () => {
    let blockArray = blocks.map(block => <Card src={block.image} style={block.style} key={block.id} id={block.id} onClick={this.clickHandler} />);
    blockArray = this.shuffle(blockArray);
    this.setState({ allBlocks: blockArray });
  }

  clickHandler = event => {
    const id = event.target.id;
    if (!this.state.IDsGuessed.includes(id)) {
      let hScore = this.state.score + 1 > this.state.hiScore ? this.state.score + 1 : this.state.hiScore;
      this.setState({ score: this.state.score + 1, IDsGuessed: [...this.state.IDsGuessed, id], hiScore: hScore })

      if (this.state.score > this.state.hiScore) this.setState({ hiScore: this.state.score });

    }
    else {
      this.setState({ score: 0, IDsGuessed: [] })
    }

    this.fillCards();
  }

  render() {
    return (
      <div>
        <Header score={this.state.score} hiScore={this.state.hiScore} />
        <div className="cardContainer">
          {this.state.allBlocks}
        </div>
      </div>
    );
  }
}

export default App;

//"https://i.pinimg.com/originals/ce/76/97/ce7697f4a359b8c2768074cdf24b4cd6.gif\"
