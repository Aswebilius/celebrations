import * as api from "../api";

const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        
        dispatch({ type: "FETCH_ALL", payload: data});
    }catch(error) {
        console.log(error.message);
    }
    
   
    
    dispatch (action);
}

export const createPost = () => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        distpatch ({type: "CREATE", payload: data });
    }catch (error){
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try{
        await api.deletePost(id);
        dispatch({ type: "DELETE", payload: id});
    } catch (error) {
        console.log(error);
    }
}