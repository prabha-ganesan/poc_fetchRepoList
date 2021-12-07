import './App.css';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";


function App() {
  const content = useSelector(state => state);
  const dispatch = useDispatch(); 

//async action
  function getData() {
    return dispatch => {
      axios.get("https://api.github.com/users/prabha-ganesan/repos")
      .then(res =>
        dispatch({
          type: "FETCH_DATA",
          data: res.data
        })
      );
    };
  }

  function onFetchdata() {
      //invoking action
    dispatch(getData());
  }

  return (
    <div className="App">
      <button className="Fetch_btn" onClick={onFetchdata}>Get Repo List</button>
      {content.data && (
        <ol type="1">
          {
              content.data.map((e,index) => <li  key={index}><a href={e.clone_url}>{e.name}</a> created at <span> {e.created_at}</span> </li> )
            }
        </ol>
      )}
      
    </div>
  );
}

export default App;
