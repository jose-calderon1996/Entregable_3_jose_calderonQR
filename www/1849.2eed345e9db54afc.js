"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1849],{1849:(F,c,o)=>{o.r(c),o.d(c,{PerfilPageModule:()=>p});var l=o(177),u=o(4341),t=o(4742),s=o(4964),f=o(467),n=o(4438),m=o(5066);const h=[{path:"",component:(()=>{class i{constructor(e,r){this.authService=e,this.router=r,this.nombre="",this.comuna="",this.direccion="",this.fechaNacimiento="",this.carrera=""}ngOnInit(){this.authService.getUserData().subscribe(e=>{this.nombre=e.nombre,this.comuna=e.comuna,this.direccion=e.direccion,this.fechaNacimiento=e.fechaNacimiento,this.carrera=e.carrera},e=>{console.error("Error al obtener datos del usuario:",e)})}navegarEscaner(){this.router.navigate(["/escaner"])}cerrarSesion(){var e=this;return(0,f.A)(function*(){try{yield e.authService.logout(),e.router.navigate(["/login"])}catch(r){console.error("Error al cerrar sesi\xf3n:",r)}})()}static{this.\u0275fac=function(r){return new(r||i)(n.rXU(m.u),n.rXU(s.Ix))}}static{this.\u0275cmp=n.VBU({type:i,selectors:[["app-perfil"]],decls:56,vars:6,consts:[["color","primary"],[1,"ion-text-center"],[1,"perfil-container"],[1,"perfil-card"],[1,"perfil-title"],[1,"perfil-item"],["slot","start","name","person"],[1,"label-title"],["slot","start","name","home"],["slot","start","name","map"],["slot","start","name","calendar"],["slot","start","name","school"],[1,"ir-asistencia"],["expand","full","color","success",3,"click"],[1,"cerrar-sesion"],["expand","full","color","danger",3,"click"],[1,"info-extra"]],template:function(r,a){1&r&&(n.j41(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-title",1),n.EFF(3,"Perfil del Estudiante"),n.k0s()()(),n.j41(4,"ion-content")(5,"div",2)(6,"ion-card",3)(7,"ion-card-header")(8,"ion-card-title",4),n.EFF(9),n.k0s()(),n.j41(10,"ion-card-content")(11,"ion-list")(12,"ion-item",5),n.nrm(13,"ion-icon",6),n.j41(14,"ion-label")(15,"h3",7),n.EFF(16,"Nombre"),n.k0s(),n.j41(17,"p"),n.EFF(18),n.k0s()()(),n.j41(19,"ion-item",5),n.nrm(20,"ion-icon",8),n.j41(21,"ion-label")(22,"h3",7),n.EFF(23,"Comuna"),n.k0s(),n.j41(24,"p"),n.EFF(25),n.k0s()()(),n.j41(26,"ion-item",5),n.nrm(27,"ion-icon",9),n.j41(28,"ion-label")(29,"h3",7),n.EFF(30,"Direcci\xf3n"),n.k0s(),n.j41(31,"p"),n.EFF(32),n.k0s()()(),n.j41(33,"ion-item",5),n.nrm(34,"ion-icon",10),n.j41(35,"ion-label")(36,"h3",7),n.EFF(37,"Fecha de Nacimiento"),n.k0s(),n.j41(38,"p"),n.EFF(39),n.k0s()()(),n.j41(40,"ion-item",5),n.nrm(41,"ion-icon",11),n.j41(42,"ion-label")(43,"h3",7),n.EFF(44,"Carrera"),n.k0s(),n.j41(45,"p"),n.EFF(46),n.k0s()()()()()(),n.j41(47,"div",12)(48,"ion-button",13),n.bIt("click",function(){return a.navegarEscaner()}),n.EFF(49," Ir a Registrar mi Asistencia "),n.k0s()(),n.j41(50,"div",14)(51,"ion-button",15),n.bIt("click",function(){return a.cerrarSesion()}),n.EFF(52," Cerrar Sesi\xf3n "),n.k0s()(),n.j41(53,"div",16)(54,"p"),n.EFF(55,"Aseg\xfarate de revisar tus datos y mantener tu informaci\xf3n actualizada. \xa1Buena suerte en tus estudios!"),n.k0s()()()()),2&r&&(n.R7$(9),n.JRh(a.nombre),n.R7$(9),n.JRh(a.nombre),n.R7$(7),n.JRh(a.comuna),n.R7$(7),n.JRh(a.direccion),n.R7$(7),n.JRh(a.fechaNacimiento),n.R7$(7),n.JRh(a.carrera))},dependencies:[t.Jm,t.b_,t.I9,t.ME,t.tN,t.W9,t.eU,t.iq,t.uz,t.he,t.nf,t.BC,t.ai],styles:[".perfil-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .perfil-title[_ngcontent-%COMP%] {\n    font-size: 24px;\n    font-weight: bold;\n    text-align: center;\n    color: #fff; \n\n  }\n  .perfil-card[_ngcontent-%COMP%] {\n    margin: 10px;\n    border-radius: 10px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); \n\n  }\n  .perfil-item[_ngcontent-%COMP%] {\n    --background: #f9f9f9;\n    --border-radius: 10px;\n    margin-bottom: 10px;\n    padding: 15px;\n  }\n  ion-icon[_ngcontent-%COMP%] {\n    font-size: 24px;\n    color: #3880ff; \n\n  }\n  .label-title[_ngcontent-%COMP%] {\n    color: #4caf50; \n\n    margin: 0; \n\n  }\n  .info-extra[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    padding: 10px;\n    background-color: #ffffff;\n    border-radius: 10px;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); \n\n    text-align: center;\n  }\n  .info-extra[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #333; \n\n    font-size: 1em; \n\n  }"]})}}return i})()}];let d=(()=>{class i{static{this.\u0275fac=function(r){return new(r||i)}}static{this.\u0275mod=n.$C({type:i})}static{this.\u0275inj=n.G2t({imports:[s.iI.forChild(h),s.iI]})}}return i})(),p=(()=>{class i{static{this.\u0275fac=function(r){return new(r||i)}}static{this.\u0275mod=n.$C({type:i})}static{this.\u0275inj=n.G2t({imports:[l.MD,u.YN,t.bv,d]})}}return i})()}}]);