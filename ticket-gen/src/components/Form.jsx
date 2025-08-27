import React from 'react'
import uploadIcon from '../assets/images/icon-upload.svg'

const Form = () => {
    const styles ={
        color: 'rgb(204, 203, 203)',
        fontFamily: "'inconsolata-Medium', 'sans-serif'"
    }
    const style2={
        marginRight: '297px'
    }

  return (
    <>
        <form id="customer-form">
          
          <div className="upload-container">
            <p style={style2}>Upload Avatar</p>
            <label htmlFor="file-upload" className="upload-label">
              <img src={uploadIcon} alt="Upload Icon"/>
              <span>Drag and drop or click to upload</span>
            </label>
            <input type="file" name="filename" id="file-upload"/>
            <div className="upload-info">
              <img src="./assets/images/icon-info.svg" alt=""/>
              <span style={styles}>Upload your photo (JPG or PNG, max size: 500kb)</span>
            </div>
            <div className="error"></div>
          </div>

            <div className="name-container">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name"/>
              <div className="error"></div>
            </div> 

            <div className="email-cont">
              <label htmlFor="email">Email Address</label>
              <input type="email" placeholder="example@email.com" id="email" name="email"/>
              <div className="error"></div>
            </div>

            <div className="github-info-cont">
              <label htmlFor="github">GitHub Username</label>
              <input type="text" placeholder="@yourusername" id="github" name="github"/>
              <div className="error"></div>
            </div>

             <button className="generate-btn" type="submit">Generate My Ticket</button>
           
         
        </form>
    </>
  )
}

export default Form