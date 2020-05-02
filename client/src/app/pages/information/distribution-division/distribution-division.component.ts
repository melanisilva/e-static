import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distribution-division',
  templateUrl: './distribution-division.component.html',
  styleUrls: ['./distribution-division.component.scss']
})
export class DistributionDivisionComponent {

  public infoTitle = " distribution division";


  constructor() { }

  ngOnInit() {
  }
  
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

 

  public pass;



  division1(){
    this.infoTitle = "Deviation - 1"
    this.pass = "<table style= 'margin-left: 50px;margin-bottom: 50px;width:70%;border-collapse: collapse;'>"

      for(var i = 0;i<this.distributdiv1.length;i++){
        for(var j = 1;j<this.distributdiv1[i].length;j++){
          if(j == 1){
            this.pass += "<tr><th rowspan='"+(this.distributdiv1[i].length-1)+"' style= 'border: 1px solid #ddd; padding-top: 12px;padding-bottom: 12px;padding-left:30px;text-align: left;background-color: black;color: white;'>"+
            this.distributdiv1[i][j-1]+"</th><td  style= 'border: 1px solid #ddd;padding: 8px;'>"+this.distributdiv1[i][j]+"</td></tr>";
          }else{
            this.pass +="<tr><td style= 'border: 1px solid #ddd;padding: 8px;'>"+this.distributdiv1[i][j]+"</td></tr>";
          }
        }

    }

    this.pass+="</table>"
    document.getElementById("table1").innerHTML = this.pass;
      
  }

  division2(){
    this.infoTitle = "Deviation - 2"
    this.pass = "<table style= 'margin-left: 50px;margin-bottom: 50px;width:70%;border-collapse: collapse;'>"


      for(var i = 0;i<this.distributdiv2.length;i++){
        for(var j = 1;j<this.distributdiv2[i].length;j++){
          if(j == 1){
            this.pass += "<tr><th rowspan='"+(this.distributdiv2[i].length-1)+"'  style= 'border: 1px solid #ddd; padding-top: 12px;padding-bottom: 12px;padding-left:30px;text-align: left;background-color: black;color: white;'>"+
            this.distributdiv2[i][j-1]+"</th><td style= 'border: 1px solid #ddd;padding: 8px;'>"+this.distributdiv2[i][j]+"</td></tr>";
          }else{
            this.pass +="<tr><td style= 'border: 1px solid #ddd;padding: 8px;'>"+this.distributdiv2[i][j]+"</td></tr>";
          }
        }

    }

    this.pass+="</table>"
    document.getElementById("table1").innerHTML = this.pass;
      
  }

  division3(){
    this.infoTitle = "Deviation - 3"
    this.pass = "<table style= 'margin-left: 50px;margin-bottom: 50px;width:70%;border-collapse: collapse;'>"

    
      for(var i = 0;i<this.distributdiv3.length;i++){
        for(var j = 1;j<this.distributdiv3[i].length;j++){
          if(j == 1){
            this.pass += "<tr><th rowspan='"+(this.distributdiv3[i].length-1)+"'  style= 'border: 1px solid #ddd; padding-top: 12px;padding-bottom: 12px;padding-left:30px;text-align: left;background-color: black;color: white;'>"+
            this.distributdiv3[i][j-1]+"</th><td style= 'border: 1px solid #ddd;padding: 8px;'>"+this.distributdiv3[i][j]+"</td></tr>";
          }else{
            this.pass +="<tr><td style= 'border: 1px solid #ddd;padding: 8px;'>"+this.distributdiv3[i][j]+"</td></tr>";
          }
        }

    }

    this.pass+="</table>"
    document.getElementById("table1").innerHTML = this.pass;
      
  }
    division4(){
        this.infoTitle = "Deviation - 4"
        this.pass = "<table style= 'margin-left: 50px;margin-bottom: 50px;width:70%;border-collapse: collapse;'>"


        for(var i = 0;i<this.distributdiv4.length;i++){
          for(var j = 1;j<this.distributdiv4[i].length;j++){
            if(j == 1){
              this.pass += "<tr><th rowspan='"+(this.distributdiv4[i].length-1)+"'  style= 'border: 1px solid #ddd; padding-top: 12px;padding-bottom: 12px;padding-left:30px;text-align: left;background-color: black;color: white;'>"+
              this.distributdiv4[i][j-1]+"</th><td style= 'border: 1px solid #ddd;padding: 8px;'>"+this.distributdiv4[i][j]+"</td></tr>";
            }else{
              this.pass +="<tr><td style= 'border: 1px solid #ddd;padding: 8px;'>"+this.distributdiv4[i][j]+"</td></tr>";
            }
          }
    
      }
    
      this.pass+="</table>"
      document.getElementById("table1").innerHTML = this.pass;
    }

    displayBlock1(){
      var toggle = document.getElementById("block1");
      if(toggle.style.display === "none"){
        toggle.style.display ="block";
      }else{
        toggle.style.display = "none";
      }
    }
  
}
