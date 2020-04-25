import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
})

export class InformationComponent{
  title = "Information";
  public infoTitle = " distribution division";



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

 
            

  constructor() {}
  ngOnInit() {}

//-----------------------------------------------------------------------------------------------------------------------
  displayBlock1(){
    var toggle = document.getElementById("block1");
    if(toggle.style.display === "none"){
      toggle.style.display ="block";
    }else{
      toggle.style.display = "none";
    }
  }


  public pass;



  division1(){
    this.infoTitle = "division 1!!!"
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
    this.infoTitle = "division 2!!!"
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
    this.infoTitle = "division 3!!!"
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
        this.infoTitle = "division 4!!!"
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


    
//-----------------------------------------------------------------------------------------------------------------------

public CEBinstalledCapacity = [  
["CEB Installed Capacity","2019","Percentage of Total 2019","2018"],
["Hydro","1,399","35%","1,391"],
["Thermal – Oil","604","15%","604"],
["Thermal – Coal","900","22%","900"],
["ORE - Wind","-","-","3"],
["Total - CEB","2,903","72%","2,898"]];
public PinstalledCapacity =[
["Private Installed Capacity","2019","Percentage of Total 2019","2018"],
["Thermal - Oil","533","13%","602"],
["ORE – Mini Hydro","394","10%","354"],
["ORE – Wind ","128","3%","128"],
["ORE – Other ","88","2%","77"],
["Total - PPP "," 1,143 ","28%","1,162"],
];

displayBlock2(){

  var toggle = document.getElementById("block2");
  if(toggle.style.display === "none"){
    toggle.style.display ="block";
  }else{
    toggle.style.display = "none";
  }
    
  this.pass = "<table style= 'margin-left: 50px;margin-bottom: 50px;width:70%;border-collapse: collapse;'>";

  for(var i = 0;i<this.CEBinstalledCapacity.length;i++){
    if(i!=0){
      this.pass += "<tr><td style= 'border: 1px solid #ddd;padding: 8px;'>"+this.CEBinstalledCapacity[i][0]+
      "</td><td style= 'border: 1px solid #ddd;padding: 8px;'>"+this.CEBinstalledCapacity[i][1]+
      "</td><td style= 'border: 1px solid #ddd;padding: 8px;'>"+this.CEBinstalledCapacity[i][2]+
      "</td><td style= 'border: 1px solid #ddd;padding: 8px;'>"+this.CEBinstalledCapacity[i][3]+
      "</td></tr>";
    }else{
      this.pass += "<tr><th style= 'border: 1px solid #ddd; padding-top: 12px;padding-bottom: 12px;padding-left:30px;text-align: left;background-color: black;color: white;'>"+this.CEBinstalledCapacity[i][0]+
      "</th><th style= 'border: 1px solid #ddd; padding-top: 12px;padding-bottom: 12px;padding-left:30px;text-align: left;background-color: black;color: white;'>"+this.CEBinstalledCapacity[i][1]+
      "</th><th style= 'border: 1px solid #ddd; padding-top: 12px;padding-bottom: 12px;padding-left:30px;text-align: left;background-color: black;color: white;'>"+this.CEBinstalledCapacity[i][2]+
      "</th><th style= 'border: 1px solid #ddd; padding-top: 12px;padding-bottom: 12px;padding-left:30px;text-align: left;background-color: black;color: white;'>"+this.CEBinstalledCapacity[i][3]+
      "</th></tr>";
    }
  }
  
  this.pass+="</table>"
  document.getElementById("table2").innerHTML = this.pass;
}





displayBlock3(){

  var toggle = document.getElementById("block3");
  if(toggle.style.display === "none"){
    toggle.style.display ="block";
  }else{
    toggle.style.display = "none";
  }

  this.pass = "<table style= 'margin-left: 50px;margin-bottom: 50px;width:70%;border-collapse: collapse;'>";

  for(var i = 0;i<this.PinstalledCapacity.length;i++){
    if(i!=0){
      this.pass += "<tr><td>"+this.PinstalledCapacity[i][0]+
      "</td><td style= 'border: 1px solid #ddd;padding: 8px;'>"+this.PinstalledCapacity[i][1]+
      "</td><td style= 'border: 1px solid #ddd;padding: 8px;'>"+this.PinstalledCapacity[i][2]+
      "</td><td style= 'border: 1px solid #ddd;padding: 8px;'>"+this.PinstalledCapacity[i][3]+
      "</td></tr>";
    }else{
      this.pass += "<tr><th style= 'border: 1px solid #ddd; padding-top: 12px;padding-bottom: 12px;padding-left:30px;text-align: left;background-color: black;color: white;'>"+this.PinstalledCapacity[i][0]+
      "</th><th style= 'border: 1px solid #ddd; padding-top: 12px;padding-bottom: 12px;padding-left:30px;text-align: left;background-color: black;color: white;'>"+this.PinstalledCapacity[i][1]+
      "</th><th style= 'border: 1px solid #ddd; padding-top: 12px;padding-bottom: 12px;padding-left:30px;text-align: left;background-color: black;color: white;'>"+this.PinstalledCapacity[i][2]+
      "</th><th style= 'border: 1px solid #ddd; padding-top: 12px;padding-bottom: 12px;padding-left:30px;text-align: left;background-color: black;color: white;'>"+this.PinstalledCapacity[i][3]+
      "</th></tr>";
    }
  }

  
  this.pass+="</table>"
  document.getElementById("table3").innerHTML = this.pass;
}

}
