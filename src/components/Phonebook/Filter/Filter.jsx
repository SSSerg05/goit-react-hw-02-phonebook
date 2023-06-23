

export const Filter = ({ value, onFilter }) => { 

  return (
    <div>
      <label>Filter name
        <input type="text" value={ value } onChange={ onFilter }></input>
      </label>
    </div>
  );
  
}