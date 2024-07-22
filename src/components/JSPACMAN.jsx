// Tile.js
function Tile({ type }) {
  const classes = {
    0: "blank",
    1: "wall",
    2: "sushi",
    3: "onigiri",
  };

  return <div className={classes[type]}></div>;
}

export default Tile;
