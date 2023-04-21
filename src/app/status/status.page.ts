import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {

  myStatus:String = " ";

  constructor(private storage: Storage, private navCtrl: NavController) {}

  ngOnInit() {
  }

  async onSave() {
    await this.storage.create();
    await this.storage.set("status", this.myStatus);
    await this.navCtrl.navigateBack('/home');
  }

  async ionViewDidEnter() {
    await this.storage.create();
    this.myStatus = await this.storage.get('status');
  }

}
