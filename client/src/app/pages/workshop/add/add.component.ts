import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  template:'<input [(ngModel)] ="name" type ="text"> {{name}} '
  
})
export class AddComponent implements OnInit {
  public name="";


  public mainError = '<p style= "color: red;">an error has occored</p>';
  public error = '<p style= "color: red;">an error has occored</p>';



  constructor(private service:DataServiceService) { }

  ngOnInit(): void {
  }


  errorControl(){
    var addPopulation = document.getElementById("addPopulation");
    var addGDP1 = document.getElementById("addGDP1");
    var addDom = document.getElementById("addDom");
    var addGDP2 = document.getElementById("addGDP2");
    var addGDP3 = document.getElementById("addGDP3");
    var addAvg = document.getElementById("addAvg");


    if(typeof(addPopulation) == 'number'){

       if(typeof(addGDP1) == 'number'){

        if(typeof(addDom) == 'number'){

          if(typeof(addGDP2) == 'number'){

            if(typeof(addGDP3) == 'number'){

              if(typeof(addAvg) == 'number'){
                return true;


                }else{
                  document.getElementById("error6").innerHTML = this.error;
                  return false;
                }
            


              }else{
                document.getElementById("error5").innerHTML = this.error;
                return false;
              }
            


            }else{
              document.getElementById("error4").innerHTML = this.error;
              return false;
            }
            


          }else{
            document.getElementById("error3").innerHTML = this.error;
            return false;
          }

        }else{
          document.getElementById("error2").innerHTML = this.error;
          return false;
        }

      
    }else{
      document.getElementById("error1").innerHTML = this.error;
      return false;
    }
  }



  passAdd(){

    if(this.errorControl){
      let addYear = (<HTMLInputElement>document.getElementById('addYear')).value;
      let addPopulation = (<HTMLInputElement>document.getElementById('addPopulation')).value;
      let addGDP1 = (<HTMLInputElement>document.getElementById('addGDP1')).value;
      let addDom = (<HTMLInputElement>document.getElementById('addDom')).value;
      let addGDP2 = (<HTMLInputElement>document.getElementById('addGDP2')).value;
      let addGDP3 = (<HTMLInputElement>document.getElementById('addGDP3')).value;
      let addAvg = (<HTMLInputElement>document.getElementById('addAvg')).value;
  
      var adding ={
        addYear:addYear,
        addPopulation:addPopulation,
        addGDP1:addGDP1,
        addDom:addDom,
        addGDP2:addGDP2,
        addGDP3:addGDP3,
        addAvg:addAvg
      };
  
      this.service.addData(adding).subscribe(
        (data)=>{
          console.log(data);
        }
      )
    }else{
      document.getElementById("Mainerror").innerHTML = this.mainError;
    }

    }


}
