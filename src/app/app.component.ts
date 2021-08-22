import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  length = 0;
  letters = false;
  symbols = false;
  numbers = false;
  password = '';


  onChangeLength(value: string) {
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  useLetters(){
     this.letters = !this.letters;
  }

  useSymbols(){
    this.symbols = !this.symbols;
  }

  useNumbers(){
    this.numbers = !this.numbers;
  }
  buttonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if(this.letters){
       validChars += letters;
    }
    
    if(this.numbers){
       validChars += numbers;
    }

    if(this.symbols){
      validChars += symbols;
    }

    let generatePassword = '';
    for(let i = 0; i<this.length; i++){
      const index = Math.floor(Math.random()*validChars.length);
      generatePassword += validChars[index];
    }
      this.password = generatePassword;
  }

}
