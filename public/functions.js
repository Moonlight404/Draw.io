const app = new Vue({
    el: "#app",
    data: {
        selectAvatar: 0,
        avatares: [],
        selecionandoAvatar: false,
        myName: ""
    },
    created(){
        this.createdAvatar()
        const myAvatar = localStorage.getItem("selectAvatar")
        if(myAvatar){
            if(myAvatar <= 26 && myAvatar >= 0){
                this.selectAvatar = myAvatar
            }
        }
    },
    methods: {
        createdAvatar(){
            for(let i = 0; i <= 26; i++){
                this.avatares.push(i)
            }
        },
        selectAvatarT(i){
            this.selectAvatar = i
            localStorage.setItem("selectAvatar", i)
        }
    }
})