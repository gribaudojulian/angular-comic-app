import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Heroe } from '../../interfaces/heroe';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[];
  criterio:string = "";

  constructor( private _heroesService: HeroesService,
               private router:Router,
               private activatedRoute:ActivatedRoute ) { }

  ngOnInit() {
    

    this.activatedRoute.params.subscribe( params =>{
      if(params['criterio']){
        this.heroes = this._heroesService.buscarHeroe(params['criterio']);
        this.criterio= params['criterio'];
      }else{
        this.heroes = this._heroesService.getHeroes();
        this.criterio='';
      }
    });
  }

  verHeroe (id:number){
    this.router.navigate(['/heroe',id]);
  }

}
