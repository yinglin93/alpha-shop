// import './inputGroup.scss'
import { useContext } from 'react';
import { CardContext } from '../CardContext.jsx'


export function InputGroupContainer ({children}) {
  return (
      <div className="col col-12">
        {children}
      </div>
  );
}
export function InputGroup({inputLabel, width, children}){
  return (
      <div className={`${width} ${"input-group"}`} >
        <div className="input-label">{inputLabel}</div>
        {children}
      </div>
  );
}

export function InputText({placeHolder, formName}){
  const { handleChange } = useContext(CardContext)
  return (
    <input type="text" placeholder={placeHolder}  name={formName} onChange={e => handleChange(e)}/>
  );
}

export function InputSelect( {options, optionLabel} ) {
  return (
    <div className="select-container">
      <select required="">
        <option value="">{optionLabel}</option>
        {options.map(option => {
          return (
            <option key={option.id} value={option.abbreviation}>{option.name}</option>
          )
        })}
      </select>
    </div>
  );
}