import loadData from './data';
import { useEffect, useState } from 'react';

export default function GameBoard({ selectedList, setSelectedList }) {
  const [data, setData] = useState([]);

  // Only place where I had to use Effect was to run the async function
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await loadData();
        setData(res);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
    // console.log(selectedList);
  }, [selectedList]);

  function handleCardSel(sel) {
    if (selectedList.includes(sel)) {
      return setSelectedList([]);
    }
    return setSelectedList((selectedList) => [...selectedList, sel]);
  }

  const cards = data.map((item) => {
    const nameDisplay =
      item.name[0].toUpperCase() +
      item.name.split('').slice(1).join('');
    return (
      <div key={item.name} onClick={() => handleCardSel(item.name)}>
        <img src={item.img} />
        <h2>{nameDisplay}</h2>
      </div>
    );
  });
  return <>{cards}</>;
}
