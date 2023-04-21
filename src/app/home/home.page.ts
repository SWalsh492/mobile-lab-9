import { Component } from '@angular/core';
import {Storage} from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
stories:any[]=[];
  constructor(private storage:Storage) {}
  

  myStatus:string=" ";

  async ionViewDidEnter() {
    await this.storage.create();
    this.myStatus = await this.storage.get('status');
  }
}
