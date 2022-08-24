const DATA = [
    { id: 1, name: '하나', age: 26, sleep: true },
    { id: 1, name: '둘', age: 26, sleep: true },
    { id: 1, name: '셋', age: 26, sleep: false }
  ]

  const detail = () => {
    return(
        <h2>DATA[0].title</h2>
    )
  }
  
  const ListTest = () => {
    return (
      <ul>
        {
          DATA.map(
            (it, idx) =>
            <li key={it.id}>
              {idx + 1}번 {it.name}은 {it.age}살 {it.sleep ? '잠' : '놈'}
            </li>
          )
        }
      </ul>
    )
  }

  export default ListTest;