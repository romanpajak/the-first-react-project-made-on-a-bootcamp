import Box from "./Box";
import BoxDistincted from "./BoxDistincted";
function BoxContainer(){
    const numbers=[1,2,3,4,5,6];
    let listItems = numbers.map((number) =>{
    if (number===1){
    return <BoxDistincted />
  }else{
    return <Box distinction={true} boxNumber={number}/>
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
