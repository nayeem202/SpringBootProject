import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ad-header',
  templateUrl: './ad-header.component.html',
  styleUrls: ['./ad-header.component.css']
})
export class AdHeaderComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

    
}
