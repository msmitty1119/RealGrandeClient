const House = (props) => {
    if (!props.houseinfo) {
        return <p>Loading...</p>;
      }


    // console.log(props);
    return (
        <>
        <div className="row">
            <div className="col-sm-6">
                <b> {props.houseinfo.address}</b>
            </div>        
            <div className="col-sm-6">
                <b> Price: USD {props.houseinfo.price}</b>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-6 ">
                <img className='img-fluid' src="/imgs/1.jpg" alt="house"/>
            </div>
            <div className="col-sm-6">
                <p> {props.houseinfo.description} </p>
            </div>
        </div>
    </>);
}
export default House ;