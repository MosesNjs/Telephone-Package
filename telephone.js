// this is the telephone class
class Telephone {
    constructor (){
      this.contacts = new Set()
      this.observers = new Set()
    }

    // the method to add a phone number
    addphonenumber(numberToAdd){
     this.contacts.add(numberToAdd)
    }

    // method to remove phone number
   removePhoneNumber(numberToRemove){
     this.contacts.delete(numberToRemove)
   } 

    // method to dial a phone number
   dialPhoneNumber(numberToDial){
     if(this.contacts.has(numberToDial)){
      this.notifyObserver(`Dialing ${numberToDial}`)
     } else {
      this.notifyObserver(`${numberToDial} is not in your contacts list`) 
       }
   }

   // method to add an observer
    addObserver(observerToAdd){
      this.observers.add(observerToAdd)
    }

   // method to remove an observer
   removeObserver(observersToRemove){
    this.observers.delete(observersToRemove)
   }

   // method to notify observers
   notifyObserver(messageForEachObserver){
      this.observers.forEach(observer=> {
        observer.update(messageForEachObserver)
      })
   }
  }

  // the observer class
  class Observer{
      constructor(name){
          this.name = name
      }
  
      update(messageForEachObserver){
          console.log(`${this.name}: ${messageForEachObserver}`)
      }
  }
  
    // Creates an Instance of the telephone class 
  const phone = new Telephone()

    // Ceates 2 Observers 
  const moses = new Observer('moses')
  const njoku = new Observer('njoku')
  
  phone.addObserver(moses)
  phone.addObserver(njoku)
  
  let number1 = 2347023444
  let number2 = 2347023232
  
  phone.addphonenumber(number2)
  phone.notifyObserver(`${number2} was added successfully`)
  
  phone.dialPhoneNumber(number1)
  phone.dialPhoneNumber(number2)