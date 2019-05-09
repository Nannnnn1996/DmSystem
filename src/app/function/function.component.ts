import { Component, OnInit } from '@angular/core';
import {ListService} from '../service/list.service'
@Component({
  selector: 'app-function',
  templateUrl: './function.component.html',
  styleUrls: ['./function.component.css']
})
export class FunctionComponent implements OnInit {
  menus:any;
  constructor(private dataService: ListService) { }

  ngOnInit() {
    this.menus=this.dataService.getMenus();

  }

}
