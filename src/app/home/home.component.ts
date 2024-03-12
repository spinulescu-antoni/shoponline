import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardModule, } from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ItemService} from "../services/item.service";
import {ListItemsComponent} from "../list-items/list-items.component";
import {MatToolbar} from "@angular/material/toolbar";
import {MatDrawer, MatDrawerContainer} from "@angular/material/sidenav";
import {Router} from "@angular/router";
import {CartButtonComponent} from "../cart-button/cart-button.component";

@Component({
  selector: 'java64-home',
  standalone: true,
  imports: [
    // MatCard,
    // MatCardContent
    MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButton, ReactiveFormsModule, ListItemsComponent, MatIconButton, MatToolbar, MatDrawer, MatDrawerContainer, CartButtonComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private  itemService: ItemService, private router: Router) {
    this.itemService.read();
  }

  onDashnoard(){
    this.router.navigate(["/", "admin"])
  }

  onLogout(){
    this.router.navigate(["/" ,"auth"])
  }

  onHome(){
    this.router.navigate(["/" ,"home"])

  }

}

