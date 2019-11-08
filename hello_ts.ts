class BirthWhisperer {
  chirping:string;
  constructor(message:string) {
    this.chirping = message;
  }
  chirp(){
    return 'Ah~ oh~' + this.chirping;
  }
}

let birthWhisperer = new BirthWhisperer('coo-coo-coo...Hello');
document.body.innerHTML = birthWhisperer.chirp();