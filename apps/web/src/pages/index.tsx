import { useEffect, useState } from 'react'

export default function Dashboard () {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch('/api/v1/foo')
      .then(r => r.json())
      .then(d => setData(d))
  }, [])

  if (data === null) {
    return <div>Loading...</div>
  }

  return <div>{ JSON.stringify(data)}</div>
}
