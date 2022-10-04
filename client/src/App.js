import React, {useEffect, useState} from 'react'

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/getGrades").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div>
        {(typeof backendData.data == 'undefined') ? (
          <p>Loading ...</p>
        ) : (
          backendData.data.map((data, i) => (
            <p key={i}>{data}</p>
          ))
        )}
    </div>
  )
}

export default App