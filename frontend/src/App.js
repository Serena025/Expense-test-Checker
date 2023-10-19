import React, {useEffect, useState} from 'react'

function App() {

  const [backendData, setBackendData] = useState([{}])


  //fetching forward slash api in the backend, sending index.js arry here
  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    // checking if we have recieved users or if api has been fetched
    <div>
      {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p>
      ) : (
      // if we have then load
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
    ))
    )}
      </div>
    )
    }

export default App