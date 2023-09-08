import { useEffect, useState } from "react";
import Input from "./Input";
import Table from "./Table";
import DATA from "./_data";

const Test4 = () => {
  const [dataTable, setDataTable] = useState(null);
  // const [filterText, setFilterText] = useState("");
  const getData = (filter) => {
    if(filter){
      const filterData = DATA.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()));
      setDataTable(filterData)
    }else{
      setDataTable(DATA);
    }
  };
  
  useEffect(() => {
    getData();
  }, []);

  const handleFilterData = (filterText) => {
    getData(filterText);
  };

  return(
    <div>
      <ul>
        <li>Please render data into the table</li>
        <li>Please filter the table by name search (after press enter or click search button)</li>
      </ul>
      <Input filterValue={handleFilterData} />
      <div>
        <Table data={dataTable} />
      </div>
    </div>
  )
}

export default Test4;