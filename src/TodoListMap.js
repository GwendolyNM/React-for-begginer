import React, { useState } from 'react';

function App3() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === '') {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    //const food = [1,2,3,4]
    //[6 ...food]
    //[6, food] => 이렇게하면 배열안에 배열이 만들어져서 원하는 배열 안나옴
    setToDo('');
    console.log(toDos);
    console.log(toDos.map((item, index) => <li key={index}>{item}</li>));
  };
  return (
    <div>
      <h1>My ToDos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder='"Write your to do...'
        ></input>
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
          // map은 toDos에서 가져온 배열을 <li></li>로 변형추가해서 새로 배열을 만들어주는 역할
        ))}
      </ul>
    </div>
  );
}

export default App3;
