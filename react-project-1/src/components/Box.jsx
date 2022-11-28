function Box({ isNew, boxName }) {
  if (isNew === false) {
    return (
      <div className="box">
        <p>{boxName}</p>
      </div>
    );
  } else {
    return (
      <div className="box">
        <div className="textContainer">
          <p>{boxName}</p>
          <p className="text-smaller">(nowość)</p>
          <div className="circle"></div>
        </div>
      </div>
    );
  }
}
export default Box;
