import { useParams } from "react-router-dom";
import House from "./House";
import Enquiry from "./Enquiry";


const SearchedHouse = (props) => {
     
    //hooks have to be at the top
     let paramsObj = useParams();
     console.log(paramsObj);
     console.log(props);
 
     //find will return the first element in the iterable object that meets the parameters
     let findHouseObj = props.houses.find((house) => house._id == paramsObj.id);
     console.log(findHouseObj);
 
 
     if (!props.houses) {
         return <p>Loading...</p>;
     }
 
     return (<>
     <h1>Searched House</h1>


    <div className="row">
        <div className="col-sm-6">
            <b>{findHouseObj.address}</b>  
            </div>
        <div className="col-sm-6">
           <b>Price: USD {findHouseObj.price}</b>
        </div>
    </div>


    <div className="row">
        <div className="col-sm-6">
           <img className="img-fluid" src={'/imgs/'+ findHouseObj.photo} alt="house"/>
       </div>
        <div className="col-sm-6">
           <p>{findHouseObj.description}</p>  
           <Enquiry/>
        </div>
    </div>
         
     </>);
}
 
export default SearchedHouse;
