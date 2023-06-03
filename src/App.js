import React, { useState } from 'react';

function App() {
  const [object, setobject] = useState({ title: '', body: '' });
  const [array, setarray] = useState([]);
  const [boolean, setboolean] = useState();

  function onchange(e) {
    setobject((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function onclick() {
    setarray((prev) => [...prev, object]);
    setobject({ title: '', body: '' });
  }

  function onclick2(index) {
    setarray((prev) => prev.filter((val, i) => i !== index));
  }

  function onclick3() {
  	setboolean(true);
  }

  return (
    <section>
      <h1>Notes</h1>
      <div>
        { boolean ? <input 
        	name="title" 
        	onChange={onchange} 
        	value={object.title}
        	placeholder="Title"
    	/> : ''}
        <textarea 
        	name="body" 
        	onChange={onchange} 
        	value={object.body}
        	placeholder="Take a note..."
        	onClick={onclick3}
    	 />
        <button onClick={onclick}>+</button>
      </div>
      {array.map((val, index) => (
        <div>
          <h2>{val.title}</h2>
          <p>{val.body}</p>
          <button onClick={() => onclick2(index)}>-</button>
        </div>
      ))}
    </section>
  );
}

export default App;