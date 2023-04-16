import {Container, Grid} from "@material-ui/core";
import CustomCard from " ./components/CustomCard";
import FormDialog from " ./components/FormDialog";
import Header from " ./components/Header";
import {useState} from "react";

const noteData = [ 
    {id: 1,
    title: "Class Name",
    details: "Notes go here"
    },
];

function App() {
    return (
        const [notes, setNotes] = useState(noteData);
        const handleAddNote = (title, details) => {
            console.log('Title: ', title);
        }
      <div className="App">
        <Header />
        <Container>
            <Grid container spacing = {3}>
                {noteData.map((item)) => (
                    <Grid item md={4} sm = {6} xs = {12}>
                        <CustomCard item = {item}/>
                </Grid>
                ))
            </Grid>
        </Container>
      </div>
    );
    }
  
  
  export default App;