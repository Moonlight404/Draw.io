const app = new Vue({
    el: "#app",
    data: {
        selectAvatar: 0,
        avatares: [],
        selecionandoAvatar: false
    },
    created(){
        this.createdAvatar()
    },
    methods: {
        createdAvatar(){
            for(let i = 0; i <= 26; i++){
                this.avatares.push(i)
            }
        },
        selectAvatarT(i){
            this.selectAvatar = i
        }
    }
})