import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  templateUrl: './readPage.html',
  styleUrls: ['./readPage.scss'],
})
export class ReadPage{

  constructor(private router: Router) {}

}
