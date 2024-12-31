import { useContext, useState } from "react"
import { PostContext } from "../contexts/PostContext";

export const Header = ()=>{
    const postCtx = useContext(PostContext)
    const [titleInput, setTitleInput] = useState('');
    const [bodyInput, setBodyInput] = useState('');

    const handleAddButton = ()=>{
        if(titleInput && bodyInput){
            postCtx?.dispatch({
                type: 'add',
                payload: {
                    title: titleInput,
                    body: bodyInput
                }
            })
            setTitleInput('');
            setBodyInput('');
        }
    }


    return (
        <header>
            <h1 className="text-3xl">Título da página</h1>

            <div className="flex flex-col gap-3 max-w-xl border border-dotted border-gray-400 my-4">
                <input 
                    type="text"
                    placeholder="Digite um título"
                    className="border border-gray-300 p-2 text-xl"
                    value={titleInput}
                    onChange={e=> setTitleInput(e.target.value)}
                />
                <textarea 
                    className="h-24 border border-gray-300 p-2 text-xl"
                    placeholder="Digite um corpo"
                    value={bodyInput}
                    onChange={e=>setBodyInput(e.target.value)}
                >

                </textarea>
                <button 
                    className="bg-blue-500 p-3 rounded-md"
                    onClickCapture={handleAddButton}
                >Adicionar</button>
            </div>
        </header>
    )
}