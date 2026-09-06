import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../navbar/navbar';
import { HomePage } from '../home-page/home-page';

@Component({
  selector: 'app-layout',
  imports: [CommonModule, Navbar, HomePage],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {}
