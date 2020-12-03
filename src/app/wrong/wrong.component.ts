import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wrong',
  templateUrl: './wrong.component.html',
  styleUrls: ['./wrong.component.css']
})
export class WrongComponent implements OnInit {

  

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
   
  }

}
