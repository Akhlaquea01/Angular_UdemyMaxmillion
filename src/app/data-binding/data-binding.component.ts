import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  serverID: number = 10;
  serverStatus: string = 'offline';
  allowNewServer:boolean = false;
  serverCreationStatus= 'No server was created!';
  serverName2 = '';
  serverName = 'Test Server 2';
  serverCreated =false;
  constructor() {

  setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }
   getServerStatus() {
    return this.serverStatus;
  }
  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }
  onUpdateServerName(event:any) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
