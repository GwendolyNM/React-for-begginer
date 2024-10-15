import Button from './Button';
import styles from './App.module.css';
import { useEffect, useState } from 'react';

function App2() {
  const [count, setCount] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => {
    setCount((prev) => prev + 1);
  };
  const onChange = (e) => {
    setKeyword(e.target.value);
  };
  console.log('i run all time');
  const iRunOnlyOnce = () => {
    console.log('Call THE API');
  };
  useEffect(iRunOnlyOnce, []);
  useEffect(() => {
    if (keyword !== '' && keyword.length > 5) {
      console.log('SEARCH', keyword);
    }
  }, [keyword]);
  return (
    <div>
      <input
        onChange={onChange}
        type="text"
        placeholder="Search here..."
        value={keyword}
      ></input>
      <h1 className={styles.title}>{count}</h1>
      <Button text="Click" onClick={onClick} />
    </div>
  );
}

export default App2;
