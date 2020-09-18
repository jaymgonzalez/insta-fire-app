import React from 'react'
import useStorage from '../hooks/useStorage'
import { motion } from 'framer-motion'

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file)


  return (
    <motion.div className='progress-bar'
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    >
      {url && setFile(null)}
    </motion.div>
  )
}

export default ProgressBar
