import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { UsuariosService } from '../service/usuarios.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-usuario',
  templateUrl: './delete-usuario.component.html',
  styleUrls: ['./delete-usuario.component.css']
})
export class DeleteUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario;
  deletarOk:boolean =false;

<<<<<<< HEAD
  constructor(private usuarioService: UsuariosService, private router: Router, private route: ActivatedRoute) { }
 
=======
  constructor(private) { }
>>>>>>> 444a60ff7c8bd293feb39cf61cb30ff2e90ee10a

  ngOnInit(){
    let id : number = this.route.snapshot.params['id']
    this.findByIdUsuario(id)
  }

  findByIdUsuario(id:number){
    this.usuarioService.getByIdUsuario(id).subscribe((resp: Usuario)=>{
      this.usuario = resp
    }, err=>{
      console.log(`Erro ao passar o id: ${err.status}`)
    })
  }

  btnSim(){
    this.usuarioService.deleteUsuario(this.usuario.id).subscribe(()=>{
      this.deletarOk = true
      this.router.navigate(['/users'])
      localStorage.setItem("deletarOk", this.deletarOk.toString())
    })
  }

}
