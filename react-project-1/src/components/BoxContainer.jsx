import Box from "./Box";
import { serviceKind } from "../Data/DataOfServices";

function BoxContainer() {
  let listItems = serviceKind.map((item) => {
    return item.isNew ? (
      <Box isNew={true} boxName={item.name} />
    ) : (
      <Box isNew={false} boxName={item.name} />
    );
  });

  return (
    <>
      <div className="boxContainer">{listItems}</div>
    </>
  );
}
export default BoxContainer;
