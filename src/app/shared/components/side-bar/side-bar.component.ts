import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  mainMenu: { 
    defaultOptions: Array<any>, accessLink: Array<any>
  } = {defaultOptions: [], accessLink: [] }

  customOptions: Array<any> = []

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [  
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/', 'auth']
      },
      {
        name: 'Find',
        icon: 'uil uil-search',
        router: ['/', 'history']
      },
      {
        name: 'Your history',
        icon: 'uil uil-chart',
        router: ['/', 'favorites']
      }
    ]

    this.mainMenu.accessLink = [  
      {
        name: 'Create Playlist',
        icon: 'uil-plus',
        router: ['/']
      },
      {
        name: 'Songs you love',
        icon: 'uil-heartbeat',
        router: ['/', 'history']
      }
    ]

    this.customOptions = [  
      {
        name: 'Driving list',
        icon: 'uil uil-car-sideview',
        router: ['/']
      },
      {
        name: 'Gym list',
        icon: 'uil uil-dumbbell',
        router: ['/']
      },
      {
        name: 'Working list',
        icon: 'uil uil-desktop',
        router: ['/']
      },
      {
        name: 'Low battery charge list',
        icon: 'uil-battery-bolt',
        router: ['/']
      }
    ]

  }

  goTo($event: any):void {
    this.router.navigate(['/', 'favorites'],{
      queryParams:{
        key1:'value1',
        key2:'value2',
        key3:'value3'
      }
    })
    console.log($event)
  }
  
}
