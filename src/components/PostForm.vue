<template>
    <div id="add__container" class="d-flex w-100 flex-column align-items-center">
        <button id="close__btn" class="align-self-end mr-5" @click="closeForm(false)"><i class="fas fa-times-circle"></i></button>
        <div class="add__title__container d-flex flex-column align-items-center mb-3 align-items-center col-10 col-lg-7">
            <label for="add__title"><b>Заголовок</b></label>
            <textarea class="w-75" id="add__title" v-model="title"></textarea>
        </div>
        <div class="add__body__container d-flex flex-column align-items-center mb-3 align-items-center col-10 col-lg-7">
            <label for="add__body"><b>Текст</b></label>
            <textarea class="w-75" id="add__body" v-model="body"></textarea>
        </div>
        <button id="add__btn" class="w-25" @click="submit()"><i class="fas fa-plus"></i>  Добавить</button>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex'
    export default {
        name: "PostForm",
        data(){
            return{
                title:"",
                body:""
            };
        },
        computed:mapGetters(["addingPost"]),
        methods: {
            ...mapMutations(["createPost","addPostForm"]),
            submit() {
                if (this.title !== "" && this.body !== ""){
                this.createPost({
                    title: this.title,
                    body: this.body,
                    id: Date.now()
                });
                this.title = this.body = "";
            }
            else alert("Заполните обе строки!");
            },
            closeForm(e){
                this.addPostForm(e)
            }
        }
    }
</script>

<style scoped>

</style>