import "./formInput.css";
const FormInput=function(props){
    const {label,onChange,...inputProps}=props;
    return (
        <div className="formInput">
            <label>{label}</label>
            <input {...inputProps}onChange={onChange} />
        </div>
    );
};
export default FormInput;