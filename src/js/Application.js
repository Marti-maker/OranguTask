import EventEmitter from "eventemitter3";
const divElement=document.getElementById('emojis');

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
  }

  addBananas() {
    const newEmojies = this.emojis.map((emojy) => {
      return (`${emojy} ${this.banana}`)
    });
    newEmojies.forEach(emoji => {
      let newP=document.createElement('p');
      newP.innerHTML=emoji;
      divElement.appendChild(newP);
      
    });
    

  }
}
