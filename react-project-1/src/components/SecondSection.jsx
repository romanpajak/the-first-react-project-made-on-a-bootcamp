import Workers from "./Workers";

function SecondSection({idName}){
    return(
        <section className="contents">
            <h2 id={idName}>Nasi specjaliści</h2>
            <Workers imageClassName={"photo firstImage"} />
            <Workers imageClassName={"photo secondImage"} />
        </section>
    )
}
export default SecondSection;