import React from "react";
import PropTypes from "prop-types";



const KindOfAnimals = [
  {
    id:1,
    name : "penguin",
    image:"https://c.files.bbci.co.uk/CF3C/production/_111925035_penguino.jpg"
  },
  {
    id:2,
    name : "cat",
    image:"https://img.kyodonews.net/english/public/images/posts/999dc7ea8c73f32baa5361320e39c19a/photo_l.jpg"
  }
]

function Animals({ name, picture }){
  return (
    <div>
      <div>
        <h2>I like {name} </h2>
        <img src={picture} alt="this is animals"/>
      </div>
    </div>);
}

Animals.propTypes = {
  name:PropTypes.string.isRequired,
  picture:PropTypes.string.isRequired
};

function renderAnimals(KindOfAnimals){
  return <Animals key={KindOfAnimals.id} name={KindOfAnimals.name} picture={KindOfAnimals.image}/>
}

function App() {
  return (
    <div>
      {KindOfAnimals.map(renderAnimals)}
    </div>
  );
}

export default App;
