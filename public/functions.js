const app = new Vue({
    el: "#app",
    data: {
        selectAvatar: 0,
        avatares: [],
        selecionandoAvatar: false,
        myName: "",
        playing: false,
        myGame: {}
    },
    created(){
        this.createdAvatar()
        const myAvatar = localStorage.getItem("selectAvatar")
        if(myAvatar){
            if(myAvatar <= 26 && myAvatar >= 0){
                this.selectAvatar = myAvatar
            }
        }
        const myGame = JSON.parse(localStorage.getItem("myGame"))
        if(myGame){
            this.myName = myGame.name
            if(myGame.avatar <= 26 && myAvatar.myGame >= 0){
                this.selectAvatar = myGame.avatar
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
        },
        playGame(){
            if(this.myName !== '' && this.myName !== null){
                this.playing = true
                localStorage.setItem("myGame", JSON.stringify({
                    "name": this.myName,
                    "avatar": this.selectAvatar
                }))
            }
        }
    }
})