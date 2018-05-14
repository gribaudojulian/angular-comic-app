import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe';

@Component({
  selector: 'heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe:Heroe;

  constructor( private activatedRoute:ActivatedRoute, private heroesService:HeroesService) {
    this.activatedRoute.params.subscribe( params =>{
      this.heroe = heroesService.getHeroe(params['id']);
    });
  }

  ngOnInit() {
  }
  
}
