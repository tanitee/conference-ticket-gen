import {useState , useEffect } from 'react'
import uploadIcon from '../assets/images/icon-upload.svg'
import {useForm} from 'react-hook-form'
import iconInfo from '../assets/images/icon-info.svg'

const Form = () => {
    const { register, handleSubmit, formState: { errors }} = useForm();

    //console.log(register)

    const validateForm = (data)=>{
      console.log(data);
    }

    const styles ={
        color: 'rgb(204, 203, 203)',
        fontFamily: "'inconsolata-Medium', 'sans-serif'"
    }
    const style2={
        marginRight: '297px'
    }

  return (
    <>
        <form id="customer-form" onSubmit={handleSubmit(validateForm)}>
          
          <div className="upload-container">
            <p style={style2}>Upload Avatar</p>
            <label htmlFor="file-upload" className="upload-label">
              <img src={uploadIcon} alt="Upload Icon"/>
              <span>Drag and drop or click to upload</span>
            </label>
            <input type="file" name="filename" id="file-upload"
              {...register("file",{
                required:"Please upload a file",
                validate:(files)=>{
                  return files && files[0]?.size <= 500 * 1024 || "File too large. Please upload a photo less than 500kb"
                }
              })}
            />
            <div className="upload-info">
              <img src="./assets/images/icon-info.svg" alt=""/>
              <span style={styles}>Upload your photo (JPG or PNG, max size: 500kb)</span>
            </div>
            {errors.file && <div className="error-message">
                <img src={iconInfo} className='icon-img' alt=""/>  {errors.file.message} 
                </div> }
          </div>

            <div className="name-container">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name"
                className={errors.name ? "error-border" : " " }
                {...register("name", {
                  required: "Full name is required",
                  minLength: {value: 3 , message: "must be atleast 3 characters"},
                  validate: (value) => value.trim() !== "" || "Full name cannot be just spaces"
                })}
              />

              {errors.name && <div className="error-message">
                <img src={iconInfo} className='icon-img' alt=""/>  {errors.name.message} 
                </div>
              }
            </div> 

            <div className="email-cont">
              <label htmlFor="email">Email Address</label>
              <input type="email" placeholder="example@email.com" id="email" name="email"
                className={errors.name ? "error-border" : " " }
                {...register("email", {
                  required: "Please enter your email",
                  pattern:{
                    value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message:"Please enter a valid email address"
                  }
                })}
              />
              {errors.email && <div className="error-message">
                <img src={iconInfo} className='icon-img' alt=""/>  {errors.email.message} 
                </div> 
              }
            </div>

            <div className="github-info-cont">
              <label htmlFor="github">GitHub Username</label>
              <input type="text" placeholder="@yourUsername" id="github" name="github"
                className={errors.name ? "error-border" : " " }
                {...register("github",{
                  required:"Please enter your github username",
                  minLength:{value:3, message:"must be atleast 3 characters"}
                })}
              />
              {errors.github && <div className="error-message">
                <img src={iconInfo} className='icon-img' alt=""/>  {errors.github.message} 
                </div>  }
            </div>

            <button className="generate-btn" type="submit">Generate My Ticket</button>
           
         
        </form>
    </>
  )
}

export default Form