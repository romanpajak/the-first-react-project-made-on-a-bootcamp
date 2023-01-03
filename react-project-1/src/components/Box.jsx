function Box({ isNew, boxName }) {
  return (
    <div className="box">
    <div className="textContainer">
      <p>{boxName}</p>
      {isNew && <p className="text-smaller">(nowość)</p>} 
      {isNew && <div className="circle"></div>}
    </div>
  </div>
  );
}
export default Box;
