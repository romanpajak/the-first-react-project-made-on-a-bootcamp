function Box({ isNew, boxName }) {
  return isNew ? (
    <div className="box">
      <div className="textContainer">
        <p>{boxName}</p>
        <p className="text-smaller">(nowość)</p>
        <div className="circle"></div>
      </div>
    </div>
  ) : (
    <div className="box">
      <p>{boxName}</p>
    </div>
  );
}
export default Box;
