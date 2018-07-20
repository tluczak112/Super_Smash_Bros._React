import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import ImageCard from "./components/ImageCard";
import characters from "./characters.json";


class App extends Component {

  state = {
    characters
  };

  score = 0;

  Selected = id => {
    const characters = this.state.characters.map(character => {
      if (character.id===id){
        if (character.selected===false){  
          character.selected=true;
          this.score++;
        } else {
          alert("You have been smashed");
          this.resetGame(); 
        }
      } else {
        if (this.score === 12) {
            alert("Again!");
            this.resetGame();
        }
      }
      return character;
    });
    this.setState({characters});
  };


  shuffle = (array)=> {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  resetGame = () => {
    this.score = 0;
    const characters = this.state.characters.map(character => {
      character.selected = false;
      return character;
    })
  }

  
  render() {
    return(
      <div>
    <Title>Super Smash Brothers React! Stock: {this.score}</Title>
      <Wrapper>     
        {this.shuffle(this.state.characters).map(character => (
          
          <ImageCard
            Selected={this.Selected}
            id={character.id}
            Key={character.id}
            image={character.image}
          />
            
        ))}
      </Wrapper>
      </div>
    );
  }

}

export default App;
