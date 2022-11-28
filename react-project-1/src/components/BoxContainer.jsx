import Box from "./Box";
import BoxDistincted from "./BoxDistincted";
function BoxContainer(){
    const services=["Usługa","Usługa 2","Usługa 3","Usługa 4","Usługa 5","Usługa 6"];
    let listItems = services.map((name) =>{
    if (name==="Usługa"){
    return <BoxDistincted boxName={name}/>
  }else{
    return <Box distinction={true} boxName={name}/>
  }
    }
    );
   
    return(
      <>
        <div className="boxContainer">  
        {listItems}
        </div>
        </>
    )
}
export default BoxContainer;
