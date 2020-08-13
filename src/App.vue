<template>
    <div id="app__container" class="container mt-3 mb-3 pb-3">
        <div id="menu__container" class="d-flex pb-5 flex-column align-items-center">
            <div id="search" class="col-6 d-flex mb-3 mt-3 justify-content-center">
                <input class="w-75 text-center" type="text" id="search__input" placeholder="Поиск" v-model="search" @keyup="searchForm(search)">
            </div>
            <transition name="appear">
                <PostForm v-if="addingPost"/>
            </transition>
            <transition name="hide">
            <button id="add__btn" class="w-25" v-if="!addingPost" @click="addFormHandler(true)"><i class="fas fa-plus"></i>  Добавить</button>
            </transition>
        </div>
        <div class="container d-flex flex-wrap mt-3">
            <div v-for="(post, id) in filPosts" :key="post.id" class="message__container d-flex flex-column align-items-center justify-content-between text-center col-12 col-md-6 col-xl-4">
                <h2>{{post.title}}</h2>
                <p>{{post.body}}</p>
                <button class="delete__btn" @click="deletePost(post.id)"><i class="far fa-trash-alt"></i></button>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters,mapActions,mapMutations} from 'vuex';
    import PostForm from "./components/PostForm.vue";
    export default {
        name: 'app',
        data(){
            return{
                search:"",
            }
        },
        components: { PostForm },
        computed:mapGetters(["addingPost", "filPosts"]),
        methods:{
            ...mapActions(["fetchPosts"]),
            ...mapMutations(["removePost", "addPostForm", "searchPosts"]),
            deletePost(t){
                this.removePost(t)
            },
            addFormHandler(e){
                this.addPostForm(e)
            },
            searchForm(s){
                return this.searchPosts(s);
            },

        },
            async mounted() {
                this.fetchPosts();
            },

    }
</script>

<style>

</style>