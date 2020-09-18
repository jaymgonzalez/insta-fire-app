import React, { useState } from 'react'
import ProgressBar from './ProgressBar'

const UploadForm = () => {

  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)

  const changeHandler = function (e) {
    const selected = e.target.files[0]
    const validTypes = ['image/png', 'image/jpeg']

    if (selected && validTypes.includes(selected.type)) {
      setFile(selected)
      setError(null)
    } else {
      setFile(null)
      setError('Select a valid type for uploading. PNG or JPEG')
    }

  }

  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  )
}

export default UploadForm
