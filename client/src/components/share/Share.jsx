import { Cancel, EmojiEmotions, Label, PermMedia, Room } from "@material-ui/icons"
import { useContext, useRef, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { publicRequest } from "../../requestMethod"
import "./share.css"

const Share = () => {
    const {user} = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const desc = useRef()
    const [file,setFile] = useState(null)

    const submitHandler = async (e) => {
        e.preventDefault()
        const newPost = {
            userId: user._id,
            desc: desc.current.value
        }
        if(file) {
            const data = new FormData()
            const fileName = "posts/" + file.name
            data.append("name", fileName)
            data.append("file", file)
            newPost.img = fileName
            try{
                await publicRequest.post("/upload", data)
                window.location.reload()
            } catch(err){
                console.log(err)
            }
        }

        try{
            await publicRequest.post("posts", newPost)
        }catch(err){

        }
    }

  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img src={user.profilePicture ? PF+user.profilePicture : PF+"persons/noAvater.jpg"} alt="" className="shareProfileImg" />
                <input placeholder={"What's on your mind "+user.username+"?"} className="shareInput" ref={desc} />
            </div>
            <hr className="shareHr" />
            {file && (
                <div className="shareImgContainer">
                    <img src={URL.createObjectURL(file)} alt="" className="shareImg" />
                    <Cancel className="shareCancelImg" onClick={ ()=>setFile(null) }/>
                </div>
            )}
            <form className="shareButtom" onSubmit={submitHandler}>
                <div className="shareOptions">
                    <label htmlFor="file" className="shareOption">
                        <PermMedia htmlColor="tomato" className="shareIcon" />
                        <span className="shareOptionText">Photo or Video</span>
                        <input style={{display:"none"}} type="file" id="file" accept=".png,.jpg,.jpeg" onChange={(e)=>setFile(e.target.files[0])} />
                    </label>
                    <div className="shareOption">
                        <Label htmlColor="blue" className="shareIcon" />
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor="green" className="shareIcon" />
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                <button className="shareutton" type="submit">Share</button>
            </form>
        </div>
    </div>
  )
}

export default Share