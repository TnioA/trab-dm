import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ParedesPage } from '../paredes/paredes.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl : NavController) {}

  altura : number;
  largura : number;
  area : number;
  info : string;
  tinta : string;


  Calcular(){
    if(this.altura == 0 || this.largura == 0 || isNaN(this.altura) || isNaN(this.largura)){
      alert("Dados incorretos, Preencha corretamente os dois campos");
    }else{
      this.area = this.altura * this.largura;
      this.info = "As medidas sao "+ this.altura +" x "+ this.largura +" e a Area da sua parede e: " + this.area + "m²";
      this.tinta = "Para pintar a parede serao necessarios " + this.area / 2 + " litros de tinta";
    }
  }

  Salvar(){
    if(this.altura == 0 || this.largura == 0 || isNaN(this.altura) || isNaN(this.largura)){
      alert("Dados incorretos, Preencha corretamente os dois campos");
    }else{
      this.navCtrl.push(ParedesPage);
    }
  }
}
