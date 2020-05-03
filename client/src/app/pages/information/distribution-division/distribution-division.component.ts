import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distribution-division',
  templateUrl: './distribution-division.component.html',
  styleUrls: ['./distribution-division.component.scss']
})
export class DistributionDivisionComponent {

  public infoTitle = " Distribution Division";


  constructor() { }

  ngOnInit() {
  }
  

  //arrays that hold values of the tables
  public distributdiv1 = [   ["Number of CEB Distribution Areas","17/62"],
                                ["Number of Consumer Service Centres","57/221"],
                                ["Distribution Divistion 1","Anuradhapura","Vavuniya","Mannar","Mullativu","Jaffna","Kilinochchi","Puttalam","Kurunegala","Polonnaruwa"]
                            ];

  public distributdiv2 = [   ["Number of CEB Distribution Areas","22/62"],
                                ["Number of Consumer Service Centres","80/221"],
                                ["Distribution Divistion 2","Gampaha","Kandy","Matale","Nuwara Eliya","Trincomalee","Ampara","Batticaloa"]
                            ];
  public distributdiv3 = [   ["Number of CEB Distribution Areas","13/62"],
                                ["Number of Consumer Service Centres","47/221"],
                                ["Distribution Divistion 3","Ratnapura","Badulla","Moneragala","Kegalle","Colombo"]
                            ]; 
  public distributdiv4 = [   ["Number of CEB Distribution Areas","10/62"],
                                ["Number of Consumer Service Centres","37/221"],
                                ["Distribution Divistion 4","Galle","Hambantota","Matara","Kalutara"]
                            ]; 

 
// used to passs in the HTML to the divs
  public pass;



  division1(){

    //topic 
    this.infoTitle = "Division - 1"
    //assigning 
    this.pass = "<table style= 'margin-left: 10px;margin-bottom: 50px;width:99%;border-collapse: collapse;'>"

    //loops will dinamicly genarate the table
      for(var i = 0;i<this.distributdiv1.length;i++){
        for(var j = 1;j<this.distributdiv1[i].length;j++){
          if(j == 1){
            this.pass += "<tr><th rowspan='"+(this.distributdiv1[i].length-1)+"' style= 'border: 1px solid #a79fb1; padding-top: 12px;padding-bottom: 12px;padding-left:30px;text-align: left;background-color: #e4dbf3;color: #424874;'>"+
            this.distributdiv1[i][j-1]+"</th><td style= 'border: 1px solid #a79fb1;padding: 8px;'>"+this.distributdiv1[i][j]+"</td></tr>";
          }else{
            this.pass +="<tr><td style= 'border: 1px solid #a79fb1;padding: 8px;'>"+this.distributdiv1[i][j]+"</td></tr>";
          }
        }

    }

    this.pass+="</table>"
    //passing html to the div
    document.getElementById("table1").innerHTML = this.pass;
      
  }

  division2(){
    //topic 
    this.infoTitle = "Division - 2"
    //assigning 
    this.pass = "<table style= 'margin-left: 10px;margin-bottom: 50px;width:99%;border-collapse: collapse;'>"


    //loops will dinamicly genarate the table
      for(var i = 0;i<this.distributdiv2.length;i++){
        for(var j = 1;j<this.distributdiv2[i].length;j++){
          if(j == 1){
            this.pass += "<tr><th rowspan='"+(this.distributdiv2[i].length-1)+"'style= 'border: 1px solid #a79fb1; padding-top: 12px;padding-bottom: 12px;padding-left:30px;text-align: left;background-color: #e4dbf3;color: #424874;'>"+
            this.distributdiv2[i][j-1]+"</th><td style= 'border: 1px solid #a79fb1;padding: 8px;'>"+this.distributdiv2[i][j]+"</td></tr>";
          }else{
            this.pass +="<tr><td style= 'border: 1px solid #a79fb1;padding: 8px;'>"+this.distributdiv2[i][j]+"</td></tr>";
          }
        }

    }

    this.pass+="</table>"
    //passing html to the div
    document.getElementById("table1").innerHTML = this.pass;
      
  }

  division3(){
    //topic 
    this.infoTitle = "Division - 3"
    //assigning 
    this.pass = "<table style= 'margin-left: 10px;margin-bottom: 50px;width:99%;border-collapse: collapse;'>"


    //loops will dinamicly genarate the table
      for(var i = 0;i<this.distributdiv3.length;i++){
        for(var j = 1;j<this.distributdiv3[i].length;j++){
          if(j == 1){
            this.pass += "<tr><th rowspan='"+(this.distributdiv3[i].length-1)+"'  style= 'border: 1px solid #a79fb1; padding-top: 12px;padding-bottom: 12px;padding-left:30px;text-align: left;background-color: #e4dbf3;color: #424874;'>"+
            this.distributdiv3[i][j-1]+"</th><td style= 'border: 1px solid #a79fb1;padding: 8px;'>"+this.distributdiv3[i][j]+"</td></tr>";
          }else{
            this.pass +="<tr><td style= 'border: 1px solid #a79fb1;padding: 8px;'>"+this.distributdiv3[i][j]+"</td></tr>";
          }
        }

    }

    this.pass+="</table>"
    //passing html to the div
    document.getElementById("table1").innerHTML = this.pass;
      
  }
    division4(){
      //topic 
        this.infoTitle = "Division - 4"
        //assigning 
        this.pass = "<table style= 'margin-left: 10px;margin-bottom: 50px;width:99%;border-collapse: collapse;'>"


        //loops will dinamicly genarate the table
        for(var i = 0;i<this.distributdiv4.length;i++){
          for(var j = 1;j<this.distributdiv4[i].length;j++){
            if(j == 1){
              this.pass += "<tr><th rowspan='"+(this.distributdiv4[i].length-1)+"'   style= 'border: 1px solid #a79fb1; padding-top: 12px;padding-bottom: 12px;padding-left:30px;text-align: left;background-color: #e4dbf3;color: #424874;'>"+
              this.distributdiv4[i][j-1]+"</th><td style= 'border: 1px solid #a79fb1;padding: 8px;'>"+this.distributdiv4[i][j]+"</td></tr>";
            }else{
              this.pass +="<tr><td style= 'border: 1px solid #a79fb1;padding: 8px;'>"+this.distributdiv4[i][j]+"</td></tr>";
            }
          }
    
      }
    
      this.pass+="</table>"
      //passing html to the div
      document.getElementById("table1").innerHTML = this.pass;
    }
  
}
