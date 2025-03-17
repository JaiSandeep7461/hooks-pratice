import { useId } from "react";

const CheckBox = () =>{
    const id = useId();
    return (
        <div>
            <input type="checkbox" id={id} />
            <label htmlFor={id} >Accept Terms</label>

        </div>
    )
}

export default CheckBox;