import React, { useEffect, useState } from 'react';

//useEffect는 함수 useEffect에서 return을 주면 commponent가 사라질 때도 코드를 실행할 수 있다(cleanup function)
function Hello() {
  useEffect(() => {
    console.log('hi');
    return () => {
      console.log('bye');
    };
  }, []);
  return <h1>Hello</h1>;
}

function App1() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
    </div>
  );
}

export default App1;
