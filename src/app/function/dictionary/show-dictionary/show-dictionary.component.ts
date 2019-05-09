import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpClientJsonpModule} from '@angular/common/http';
import{DictionaryOpService} from '../../../service/dictionary-op.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-show-dictionary',
  templateUrl: './show-dictionary.component.html',
  styleUrls: ['./show-dictionary.component.css']
})
export class ShowDictionaryComponent implements OnInit {
  listOfParentData: any[] = [];
  listOfChildrenData: any[] = [];
  dictionary_data:any;
  all_data :any[] = [];
  constructor(public http: HttpClient,private dataService: DictionaryOpService) { 
    
  }
  ngOnInit() {
    this.getdata();

    
  }

  show(){
    
  }

  getdata():void{
    this.dataService.get_dictionary().then(data=>{
      this.all_data=data.body;
      for (let i=0;i<this.all_data.length;i++){
        this.all_data[i]['expend']=false;
      }
  
    }

      );

  }
  private handleError(error:any):Promise<any>{
    console.error('An error occurred',error);
    return Promise.reject(error.message||error);
  }
}
