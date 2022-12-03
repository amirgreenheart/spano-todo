const saveToLocalStorage = (todo) =>{
    localStorage.setItem('todoList',JSON.stringify(todo))
}
const getStorage = () =>{
    if(typeof window !== 'undefined'){
        return localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : []
    }else{
        return []
    }
}

export {saveToLocalStorage,getStorage};