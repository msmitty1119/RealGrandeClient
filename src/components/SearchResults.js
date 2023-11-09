import {useState} from 'react';
import {useParams} from 'react-router-dom';
import SearchResultsRow from './SearchResultsRow';
const SearchResults = (props) => {


    // let [] = useState([]);
    //  SearchResults component that does -
            // filter through the array of house objects and
            // get those house objects that belong to selected county
            //iterate and show details
            console.log(props);
            //get county name from params
            const paramsObj = useParams();
            console.log(paramsObj);
            //filter and get an array
            let filteredHousesArray = props.houses.filter( (elem) => elem.county == paramsObj.county );
            console.log(filteredHousesArray);


    return (
        <div className="row">
            <h4>Search results for houses in : {paramsObj.county} </h4>
            <div className="table-responsive">
                <table className="table table-primary table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Address</th>
                            <th scope="col">Price</th>
                            {/* <th scope="col">Description</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        { filteredHousesArray.map( (elem) =>{
                               return <SearchResultsRow house={elem}/>
                        }
                        )}
                     
                       
                    </tbody>
                </table>
            </div>
           
        </div>
     );
}
 
export default SearchResults