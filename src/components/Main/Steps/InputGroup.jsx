import './inputGroup.scss'

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

export function InputText({placeHolder}){
  return (
    <input type="text" placeholder={placeHolder} />
  );
}