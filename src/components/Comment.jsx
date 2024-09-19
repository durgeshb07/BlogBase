import axios from "axios"
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { URL } from "../url"
import { useContext } from "react"
import { UserContext } from "../context/UserContext"

const Comment = ({c,post}) => {


  const {user}=useContext(UserContext)
  const deleteComment=async(id)=>{
    try{
      await axios.delete(URL+"/api/comments/"+id,{withCredentials:true})
      window.location.reload(true)
    }
    catch(err){
      console.log(err)
    }
  }
  // console.log(post.userId)
  // console.log(user._id)
  // console.log(post)
  // console.log(user)

  return (
    <div className="px-2 py-2 bg-gray-200 rounded-lg mt-2 my-2">
          <div className="flex items-center justify-between">
                <h3 className="font-bold text-gray-600">@{c.author}</h3>
                <div className="flex justify-between items-center space-x-4">
                <p>{new Date(c.updatedAt).toString().slice(0,15)}</p>
                <p>{new Date(c.updatedAt).toString().slice(16,24)}</p>
                {user?._id===c?.userId ?
              <div className="flex items-center justify-center space-x-2">
                    <p className="cursor-pointer" onClick={()=>deleteComment(c._id)}><MdDeleteOutline /></p>
                </div>:""}
                   
                 </div>                    
            </div>
         <div>
          <p className="px-4 mt-2">{c.comment} </p>
        </div>
    </div>
  )
}

export default Comment
