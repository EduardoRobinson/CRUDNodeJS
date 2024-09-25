import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  templateUrl: './createPage.html',
  styleUrls: ['./createPage.scss'],
})
export class CreatePage{

  constructor(private router: Router) {}

}
