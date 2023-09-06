import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = '';
  password: string = '';

  constructor() { }

  ngOnInit() {
  }
  login() {
    // Obtén el valor del almacenamiento local
    const userDataString = localStorage.getItem('userData');
  
    // Verifica si userDataString es null antes de analizarlo
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      if (userData.username === this.username && userData.password === this.password) {
        // Credenciales válidas, puedes redirigir al usuario a la página principal u otra página de la aplicación.
        console.log('Inicio de sesión exitoso');
        // Aquí puedes agregar código para redirigir al usuario a la página deseada.
      } else {
        console.log('Credenciales incorrectas');
      }
    } else {
      console.log('No se encontraron datos de usuario');
    }
  }
}