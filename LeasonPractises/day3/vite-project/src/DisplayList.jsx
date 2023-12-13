import './DisplayList.css'
export default function DisplayList({name, imageURL}){
    return(
        <div className="comp">
            <img src = {imageURL} height="100"  width="100"/>
           <h2>{name}</h2>
        </div>
    );
}
