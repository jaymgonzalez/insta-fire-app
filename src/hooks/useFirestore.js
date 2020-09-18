import { useEffect, useState } from 'react'
import { projectFirestore } from '../firebase/config'

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([])

  useEffect(() => {
    const unsub = projectFirestore.collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        let _docs = []
        snap.forEach(doc => {
          _docs.push({ ...doc.data(), id: doc.id })
        })
        setDocs(_docs)
      })

    return () => unsub()

  }, [collection])

  return { docs }
}

export default useFirestore