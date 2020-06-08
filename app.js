class Media {
  constructor(title){
    this._title = title;
    this._isCheckedOut =false;
    this._ratings = [];
  }
get title(){
  return this._title;
}
get isCheckedOut(){
  return this._isCheckedOut;
}
get ratings(){
  return this._ratings;
}
set title(title){
  this._title = title;   
}
set isCheckedOut(setCheckOut){
    this._isCheckedOut = setCheckOut;
}
set ratings(setRating){
    this._ratings = setRating;
}

toggleCheckOutStatus(){
  this._isCheckedOut= !this._isCheckedOut;
}

getAverageRating(){
  let arraySum = this._ratings.reduce((currentSum, rating) => currentSum + rating,0);

  let arrayLength =this._ratings.length;
  return arraySum/arrayLength;
}

addRating(val){
  if(val >=1 && val <= 5)
  this._ratings.push(val)
}
}

class Book extends Media{
  constructor(title, author, pages){
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author(){
    return this._author;
  }
  get pages(){
    return this._pages;
  }  
}

class Movie extends Media{
  constructor(director, title, runTime){
  super(title);
  this._director = director;
  this._runtime = runTime;
  }

  get director(){
    return this._director;
  }
  
  get runTime(){
    return this._runTime;
  }

}
class CD extends Media{
  constructor(artist, title, songs){
  super(title);
  this._artist = artist;
  this._songs = songs;
  }
   get artist(){
    return this._artist;
  }
  
  get songs(){
    return this._songs;
  }
}

let historyOfEverything = new Book('A Short History of Nearly Everything','Bill Bryson', 544)

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut)
historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)

console.log(historyOfEverything.getAverageRating())

let speed = new Movie('Jan de Bont', 'Speed', 116)
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut)
speed.addRating(6)
speed.addRating(6)
speed.addRating(5)

console.log(speed.getAverageRating())

