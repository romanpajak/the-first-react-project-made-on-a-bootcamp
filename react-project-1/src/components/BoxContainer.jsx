import Box from "./Box";
function BoxContainer() {
  const services = [
    "Usługa 1",
    "Usługa 2",
    "Usługa 3",
    "Usługa 4",
    "Usługa 5",
    "Usługa 6",
  ];
  let listItems = services.map((name) => {
    if (name === "Usługa 1") {
      return <Box isNew={true} boxName={name} />;
    } else {
      return <Box isNew={false} boxName={name} />;
    }
  });

  return (
    <>
      <div className="boxContainer">{listItems}</div>
    </>
  );
}
export default BoxContainer;
