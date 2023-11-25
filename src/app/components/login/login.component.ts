import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  form!: FormGroup;
  loading = false;

  constructor(private fb:FormBuilder, private _snackBar: MatSnackBar, private router:Router){
    this.form = this.fb.nonNullable.group({
      usuario:["",Validators.required],
      contraseña:["",Validators.required]
    })
  }

ingresar(){
  const usuario = this.form.value.usuario;
  const contraseña = this.form.value.contraseña;
  
  if(usuario == 'andres' && contraseña == 'admin123'){
    // redireciones al dashboard
    this.fakeLoading();
  } else{
    // mostramos mensaje de error
    this.error();
    this.form.reset();
  }
}

error (){
  this._snackBar.open('usuario o contraseña ingresado son incorrectos', '',{
    duration: 5000,
    horizontalPosition: 'center',
    verticalPosition:'bottom'
  })
}

fakeLoading(){
this.loading = true;
setTimeout(()=>{
  this.router.navigate(['dashboard'])
},1500);
}

}
