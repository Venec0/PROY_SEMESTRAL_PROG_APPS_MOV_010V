import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  username: string = "";
  password: string = "";

  constructor() { }

  ngOnInit() {
  }
  register() {

    const userData = {
      username: this.username,
      password: this.password,
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    console.log('REGISTRO EXITOSO');
  }
}
