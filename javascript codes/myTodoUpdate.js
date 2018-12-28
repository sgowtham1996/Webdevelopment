let myTodos = {
  day:'monday',
  meetings:0,
  meetDone:0,
  
    addMeeting : function(num){
      this.meetings += num;
    },

    donemeet : function(num){
      this.meetDone += num;
    },
    summary : function() {
      console.log(`Your meetings for today ${this.meetings}`)
      this.meetings = this.meetings - this.meetDone 
      return `You have done ${this.meetDone} still you have ${this.meetings} meetings pending`;
    },
    reset : function(){
      this.meetDone = 0
      this.meetings = 0
      return `yes done reset meetdone: ${this.meetDone} and meetings: ${this.meetings} `
    }
  }

  myTodos.addMeeting(4)
  myTodos.donemeet(2)
  console.log(myTodos.summary())
  console.log(myTodos.reset())
