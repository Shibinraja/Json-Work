    var user = prompt("Enter the Number").split(" ")

    // var Get = parseInt(user)
    
  
    var assign = user.shift()
    
    var Total = user.map(function(x){
        return parseInt(x)
    })
    console.log(Total)

     var result = Total.reduce((x,y)=>{

        return eval(x+assign+y)
     })

        console.log(result)
    //  var operators = {
    //     assign : function(x,y){
    //         return x+y
    //     },

    //     assign : function(x,y){
    //         return x-y
    //     },

    //     assign : function(x,y){
    //         return x*y
    //     },

    //     assign : function(x,y){
    //         return x/y
    //     },
        
    // }

    // operators[assign](x,y)