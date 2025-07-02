import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-layout',
  imports: [],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {


  router = inject(Router);
  onLogoff() {
    this.router.navigate(['/login']);
  }

}
