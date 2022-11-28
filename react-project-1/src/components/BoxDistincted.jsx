function BoxDistincted({ boxName }) {
  return (
    <div className="box">
      <div className="textContainer">
        <p>{boxName}</p>
        <p className="text-smaller">(nowość)</p>
      </div>
      <div className="circle"></div>
    </div>
  );
}
export default BoxDistincted;
