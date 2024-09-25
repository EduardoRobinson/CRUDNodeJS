import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  templateUrl: './homePage.html',
  styleUrls: ['./homePage.scss'],
})
export class HomePage{

  constructor(private router: Router) {}

}
