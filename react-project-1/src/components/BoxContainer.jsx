import Box from "./Box";
import { serviceKind } from "../Data/DataOfServices";

function BoxContainer() {
  let listItems = serviceKind.map((item) => {
    return <Box isNew={item.isNew} boxName={item.name} />;
  });

  return (
    <>
      <div className="boxContainer">{listItems}</div>
    </>
  );
}
export default BoxContainer;
