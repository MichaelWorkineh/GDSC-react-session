import './DisplayList.css'
import img1 from "./assets/Aurora.jpg"
export default function DisplayList({name, imageURL}){
    return(
        <div className="comp">
            <img src = {img1} height="100"  width="100"/>
           <h2>{name}</h2>
        </div>
    );
}
