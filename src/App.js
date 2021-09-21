import { useState, useEffect } from 'react';
import './App.css';
import Books from './components/Books/Books';
import Device from './components/Device/Device';
import booksCollection from './booksCollection'; // booksCollection Array of objects
import notesCollection from './notesCollection'; // notesCollection Array of objects

// Via props price data was sent to Device component then from Device that price was send to Config component
function App() {
  const [steps, setSteps] = useState(0);
  const handleIncreaseSteps = () => setSteps(steps + 1);

  useEffect(() => console.log(steps), [steps]); // explantion has been given in 32 no. line

  return (
    <div className="App">
      <div className="global-stage">
        <h1 className="h1"><span className="cyan">Steps (Global)</span>: {steps}</h1>
        <button onClick={handleIncreaseSteps} className="btn-custom btn-cyan">Walk</button>
        <Device name="Samsung Galaxy A2" price="25000" steps={steps} />
        <Books books={booksCollection} />
      </div>
      <NoteArray />
    </div>
  );
}

// here via props... search result has beem sent to SearchResult component and properties from notesCollection object has been sent to Notes Component
function NoteArray() {
  const [search, setSearch] = useState([]);

  // search functionality
  const searchHandler = () => {
    const searchField = document.querySelector('#search-field');
    const searchText = searchField.value;
    if (!searchText) {
      return alert('Hey what are you doing retard! Search properly otherwise get the fuck outta here');
    }
    else {
      // one way (not recommended)
      /*     notesCollection.map(note => {
            if (note.desc.indexOf(searchText) !== -1) {
              return setSearch(note.desc);
            }
          }) */
      // another way (Accurate way)
      const searchResult = notesCollection.filter(note => note.desc.indexOf(searchText) !== -1)
      setSearch(searchResult);
      // searchResult.map(result => setSearch(result.desc));
    }
  }
  console.log(search);

  return (
    <div className="container">

      <h3 className="search-heading">Search Result</h3>
      <h4 className="search-result-main">
        {search.map((s, i) => <SearchResult result={s.desc} key={i} />)}
      </h4>

      <input id="search-field" type="text" placeholder="Search your note" />
      <button onClick={searchHandler} className="btn-custom btn-red">Search</button>

      {/* {
        notesCollection.map(note => console.log(note))
      } */}
      <div className="notes">
        {
          notesCollection.map(note => <Notes note={note} key={note.no} />)
        }
      </div>

    </div>
  );
}
// NotesArray Ends

function SearchResult(props) {
  const { result } = props;
  return (
    <div className="search-result">
      {result}
    </div>
  );
}

function Notes(props) {
  const { no, desc } = props.note;
  return (
    <div title={'This is a useful note (' + no + ') for React beginners'} className="note" >
      <p>
        {no}. {desc}
      </p>
    </div >
  );
}

export default App;
