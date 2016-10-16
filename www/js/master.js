/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var master={
    cvs : document.getElementById("master"),
    start : function(){
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.cvs, document.body.childNodes[0]);
        this.interval = setInterval(update, 20);
        window.addEventListener('touchmove', function (e) {
            
        });
            
    },
    clear : function(){
        this.context.clearRect(0, 0, this.cvs.width, this.cvs.height);
    }
};

var update = function(){
    
};