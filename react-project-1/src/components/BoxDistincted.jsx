function BoxDistincted({ boxNumber }) {
  return (
    <div className="box">
      <div className="textContainer">
        <p>Usługa {boxNumber}</p>
        <p className="text-smaller">(nowość)</p>
      </div>
      <div className="circle"></div>
    </div>
  );
}
export default BoxDistincted;
