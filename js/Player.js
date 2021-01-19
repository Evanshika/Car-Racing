class Player{
    constructor(){
        this.index=null
        this.distance=0
        this.name=null
        this.rank=null
    }

    getCount(){
    var getCountref=database.ref("playerCount")
    getCountref.on("value",function(data){
        playerCount=data.val()
    })
    }
    updateCount(count){
        database.ref("/").update({
           playerCount:count
        })
    }
    update(){
        var playerindex="players/player"+this.index
        database.ref(playerindex).update({
            name:this.name,
            distance:this.distance
         }) 
    }

    static getPlayerinfo(){
        var playerinforef=database.ref("players")
        playerinforef.on("value",(data)=>{
            allPlayers=data.val()
        })
    }

    getCarsAtEnd(){
        database.ref("carsAtEnd").on('value',(data)=>{
            this.rank=data.val()
        })
    }

    static updateCarsAtEnd(rank){
        database.ref("/").update({
            carsAtEnd:rank
        })
    }
}