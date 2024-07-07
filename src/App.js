import './App.css';
import { Searchbox } from './Components/Searchbox';
import Tablebody from './Components/Tablebody';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './Components/Pagination';

function App() {

  const [userdata, setUserData] = useState("");
  const [selectedData, setSelecteddata] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    fetchUserlist();
  }, []);

  const fetchUserlist = async () => {
      const data = await axios.get(`https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json`);
      setUserData(data.data);
      setOriginalData(data.data); 
  }

  const handleDelete = (id) => {
    const updatedarray = userdata.filter((item) => item.id !== id);
    setUserData(updatedarray)
  }

  const handleSelectedDeleted = () => {
      const updatedarray = userdata.filter((data) => !selectedData.includes(data.id));
      setUserData(updatedarray)
  }

  const handleSelected = (id, ischecked) => {
      if(ischecked){
        setSelecteddata([...selectedData, id])
      }
  }

  const handleSearchBox = (query) => {
    if (query === '') {
      setUserData(originalData);
    } else {
      const filteredData = originalData.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.email.toLowerCase().includes(query.toLowerCase()) ||
        item.role.toLowerCase().includes(query.toLowerCase())
      );
      setUserData(filteredData);
    }
  };

  

  // const handleCheckboxChange = (itemId) => {
  //   const updatedItems = items.map(item =>
  //     item.id === itemId ? { ...item, checked: !item.checked } : item
  //   );
  //   setItems(updatedItems);
  // }; 

  return (
    <div className="App">
      <Searchbox handleSelected={handleSelected} handleSearchBox={handleSearchBox} />
      <Tablebody checkedvalue={checked} setChecked={setChecked} handleSelected={handleSelected} handleDelete={handleDelete} userdata={userdata}/>
      <Pagination handleSelectedDeleted={handleSelectedDeleted} />
    </div>
  );
}

export default App;
