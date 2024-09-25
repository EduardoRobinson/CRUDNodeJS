import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  templateUrl: './deletePage.html',
  styleUrls: ['./deletepage.scss'],
})
export class DeletePage{

  constructor(private router: Router) {}

}
