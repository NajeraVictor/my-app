import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserResponse } from './server.models.type';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() :void{
    this.getData();

  }

  getData(): void {
    var token = "dmljdG9yLnJlc3NlcjpVMkZzZEdWa1gxOW5pR1dma0xwVkppaFhHQVYyN2owbmNzL1VkMzVUMUtNPQ==";
  
    //this.http.get<UserResponse>('https://api.github.com/users/seeschweiler', {headers : {'Authorization': 'Basic ' + token}}).subscribe(data => {
    this.http.get<UserResponse>('http://rastreo.resser.com/api/lastpositionreport?_dc=1524265959040&id=3031&timezone=-5',
    {headers : {'Authorization': 'Basic ' + token}}).subscribe(data => {
      var div = document.getElementsByClassName("pochinki")[0];
      div.innerHTML += " <br>" + data.login + " <br>" + data.bio + " <br>" + data.company + " <br>" + data.success + " <br>";
      for (var i = 0; data.items.length > i; i++){
        div.innerHTML += data.items[i].id + " " + data.items[i].status + " " + data.items[i].date + " <br>";
      }
      console.log("User Login: " + data.login);
      console.log("Bio: " + data.bio);
      console.log("Company: " + data.company);
    },
    (err) => {
      if (err.error instanceof Error){
        console.log("Error del cliente en GET")
      } else {
        console.log("Error en el Servidor en GET")
      }
    });
  }
}
