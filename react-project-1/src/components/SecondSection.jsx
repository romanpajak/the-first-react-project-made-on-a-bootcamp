import Workers from "./Workers";

function SecondSection() {
  return (
    <section className="contents">
      <h2 id="about">Nasi specjaliści</h2>
      <Workers imageClassName={"photo firstImage"} />
      <Workers imageClassName={"photo secondImage"} />
    </section>
  );
}
export default SecondSection;
