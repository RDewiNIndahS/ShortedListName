import { Component, OnInit } from '@angular/core';
import { ShortnameService } from '../services/shortname.service';





@Component({
  selector: 'app-short-by-name',
  templateUrl: './short-by-name.component.html',
  providers: [ShortnameService],
  styleUrls: ['./short-by-name.component.scss']
})
export class ShortByNameComponent implements OnInit {

  
  constructor(private serviceComponent : ShortnameService) { }
  dataModel = [];
  dataModelResult = [];

  ngOnInit() {
    //Call the service function to display
    this.serviceComponent.getText().subscribe(resp => {
      //Turn data into an array
      var data = resp['_body'].split("\r\n");
      this.dataModel = data;
      //To display the results of the filter
      this.dataModelResult = resp['_body'].split("\r\n").sort(this.compare);
      //console.log(resp['_body'].split("\r\n"));
    })
  }
//To shorted by lastname 
  compare(a,b) {
    var aName = a.split(" ");
    var bName = b.split(" ");
    var aLastName = aName[aName.length - 1];
    var bLastName = bName[bName.length - 1];
    if (aLastName < bLastName) return -1;
    if (aLastName > bLastName) return 1;
    return 0;
  }

}
