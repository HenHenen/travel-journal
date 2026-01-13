import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'
import data from './data'

function App() {
  const entryElements = data.map((entry) => {
    return (
      <Entry
        key={key}
        entry={entry}
      />
    )
  })

  return (
    <>
      <Header />
      <main className="entries-container">
        {entryElements}
      </main>
    </>
  )
}

export default App
