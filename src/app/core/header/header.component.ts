
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Response } from '@angular/http';
// import { HttpEvent, HttpEventType } from '@angular/common/http';

import { AuthService } from './../../auth/auth.service';
import { DataStorageService } from './../../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor (private dataStorageService: DataStorageService,
               public authService: AuthService ) {}

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response) => {
          console.log(response);
        }
      );

  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }

}
