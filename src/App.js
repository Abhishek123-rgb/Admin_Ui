import './App.css';
import { Searchbox } from './Components/Searchbox';
import Tablebody from './Components/Tablebody';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './Components/Pagination';

function App() {

  const [userdata, setUserData] = useState("");
  const [selectedData, setSelecteddata] = useState([]);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    fetchUserlist();
  }, []);

  const fetchUserlist = async () => {
      const data = await axios.get(`https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json`);
      setUserData(data.data);
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

  console.log("selectedData", selectedData);

  return (
    <div className="App">
      <Searchbox handleSelected={handleSelected} />
      <Tablebody checkedvalue={checked} setChecked={setChecked} handleSelected={handleSelected} handleDelete={handleDelete} userdata={userdata}/>
      <Pagination handleSelectedDeleted={handleSelectedDeleted} />
    </div>
  );
}

export default App;
