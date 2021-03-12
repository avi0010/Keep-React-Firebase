import './App.css';
import React from 'react'
import Nav from"./components/nav.jsx"
import Input from "./components/Input.jsx"
import Card from "./components/card.jsx"
import {Grid} from "@material-ui/core";
import db from "./firebase"

function App() {
    const [todos, setTodos] = React.useState([]);

    function insert(todo, date){
        db.collection("todos").add({text: todo, created: date}).then(r => console.log(r));
    }

    React.useEffect(()=>{
        db.collection("todos").onSnapshot(snapshot => {
            setTodos(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
  return (
    <div className="App">
      <Nav />
      <Input
        input={insert}
      />
        <Grid container spacing={3}>
            {todos.map(todo => <Grid item xs={3}><Card text={todo.text} date={todo.created}/></Grid> )}
        </Grid>

    </div>
  );
}

export default App;
