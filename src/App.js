import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Header from './elements/Header'
import Table from './elements/Table'
import { getUniversities } from './redux/universitiesReducer'

function App() {

  const dispatch = useDispatch()
  const universities = useSelector(state => state.universities)

  useEffect(() => {
    dispatch(getUniversities('United States'))
  }, [dispatch])

  console.log(universities)

  return (
    <div className="main-container">
      <main className="main">
        <Header />
        <Table />
      </main>
    </div>
  )
}

export default App
