import axios from 'axios'
import React from 'react'
import FileItem from './FileItem'

const FileList = ({ files, removeFile }) => {
    const deleteFileHandler = (_id) => {
        axios.delete(`http://localhost:8090/document?id=${_id}`)
            .then((res) => removeFile(_id))
            .catch((err) => console.error(err));
    }
    return (
        <ul className="file-list">
            {
                files &&
                files.map(f => (<FileItem
                    key={f.name}
                    file={f}
                    deleteFile={deleteFileHandler} />))
            }
        </ul>
    )
}

export default FileList
