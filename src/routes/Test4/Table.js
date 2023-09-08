// import DATA from "./_data";

const Table = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {props?.data?.map((val, key) => {
            return (
                <tr key={key}>
                    <td>{val.name}</td>
                    <td>{val.age}</td>
                    <td>{val.address}</td>
                </tr>
            )
        })}
      </tbody>
    </table>
  )
}

export default Table;
