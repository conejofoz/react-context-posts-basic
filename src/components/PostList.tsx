import { useContext } from "react"
import { PostContext } from "../contexts/PostContext"

export const PostList = ()=>{
    const postCtx = useContext(PostContext)

    const handleRemove = (id:number)=>{
        postCtx?.dispatch({
            type: 'remove',
            payload: {id}
        })
    }
    return (
        <div>
            {postCtx?.posts.map(item=>(
                <div key={item.id} className="p-3 border-b border-gray-500">
                    <div className="text-xl font-bold mb-2">{item.title}</div>
                    <div className="text-sm">{item.body}</div>
                    <button
                     className="bg-blue-500 p-1 rounded-md text-white font-bold"
                     onClick={()=> handleRemove(item.id)}
                    >Remover
                    </button>
                </div>
            ))}
        </div>
    )
}