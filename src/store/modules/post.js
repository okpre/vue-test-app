export default {
    actions: {
        async fetchPosts(ctx) {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
            const posts = await res.json()
            ctx.commit('updatePosts',posts)
        },
    },
    mutations: {
        updatePosts(state, posts){
            state.posts = posts;
            state.filteredPosts = posts;
        },
        createPost(state, newPost){
            state.posts.unshift(newPost)
            if (!state.searchField) {
                state.filteredPosts = state.posts;
            }
            else{
                let s = state.searchField.toLowerCase();
                state.filteredPosts = state.posts.filter(p=>{
                    return p.title.toLowerCase().includes(s)||p.body.toLowerCase().includes(s)})
            }
        },
        removePost(state, id){
            state.posts = state.posts.filter(p=>{
               return  p.id !== id
            })
            state.filteredPosts = state.filteredPosts.filter(p=>{
                return  p.id !== id
            })
        },
        addPostForm(state, event){
            state.adding = event;
        },
        searchPosts(state, event){
            state.searchField = event;
            if (!event) {
                state.filteredPosts = state.posts;
            }
            else{
                let s = event.toLowerCase();
                state.filteredPosts = state.posts.filter(p=>{
                    return p.title.toLowerCase().includes(s)||p.body.toLowerCase().includes(s)})
            }
        }
    },
    state: {
        posts: [],
        filteredPosts: [],
        searchField:"",
        adding: false
    },
    getters: {
        addingPost(state){
            return state.adding
        },
        filPosts(state){
            return state.filteredPosts
        }
    }

}