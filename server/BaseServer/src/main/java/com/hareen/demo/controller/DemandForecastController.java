package com.hareen.demo.controller;

import com.hareen.demo.models.DemandForecast;
import com.hareen.demo.models.Prediction;
import com.hareen.demo.repository.DemandForecastRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@RestController // im saying this is my rest controller
@RequestMapping("/api") // the url to comeinto the controller
@CrossOrigin("*")
public class DemandForecastController {

    //the objects in instantiated when the class runs
    @Autowired
    DemandForecastRepository demandForecastRepository;


    @GetMapping("/demf")
    public List<DemandForecast> getAllForecasts() {
        Sort sortByCreatedAtDesc = Sort.by(Sort.Direction.DESC, "Year");
        return demandForecastRepository.findAll(sortByCreatedAtDesc);
    }




    @GetMapping(value="/demf/{id}")
    public ResponseEntity<DemandForecast> getForecastById(@PathVariable("id") String id) {
        return demandForecastRepository.findById(id)
                .map(demandForecast -> ResponseEntity.ok().body(demandForecast))
                .orElse(ResponseEntity.notFound().build());
    }
    @CrossOrigin("*")
    @GetMapping(value="/predict")
    public ResponseEntity<Prediction> getPrediction() throws Exception{
        Prediction p = new Prediction();
        BigDecimal prediction1 = DatabaseController.predict();
        String prediction = prediction1.toString();
        p.setValue(prediction);
        return new ResponseEntity<Prediction>(p, HttpStatus.OK);
    }

    @CrossOrigin("*")
    @GetMapping(value="/predict50")
    public ResponseEntity<Prediction> getPrediction50() throws Exception{
        Prediction p = new Prediction();
        BigDecimal prediction1 = DatabaseController.predict50();
        String prediction = prediction1.toString();
        p.setValue(prediction);
        return new ResponseEntity<Prediction>(p, HttpStatus.OK);
    }

//    @PutMapping(value="/demf/{id}")
//    public ResponseEntity<DemandForecast> updateForecast(@PathVariable("id") String id,
//                                                     @Valid @RequestBody DemandForecast demandForecast) {
////        return demandForecastRepository.findById(id)
////                .map(demandForecastData -> {
////                    demandForecastData.setTitle(demandForecast.getTitle());
////                    demandForecastData.setCompleted(demandForecast.getCompleted());
////                    DemandForecast updatedDemandForecast = demandForecastRepository.save(demandForecastData);
////                    return ResponseEntity.ok().body(updatedDemandForecast);
////                }).orElse(ResponseEntity.notFound().build());
//    }

 //   @DeleteMapping(value="/demf/{year}")
   // public ResponseEntity<?> deleteForecast(@PathVariable("year") String year) {
     //  return demandForecastRepository.findById(year)
       //       .map(demandForecast -> {
         //          demandForecastRepository.deleteById(year);
           //        return ResponseEntity.ok().build();
            //   }).orElse(ResponseEntity.notFound().build());
   // }

    @RequestMapping(value = "/demf/{year}", method = RequestMethod.DELETE)
    public boolean deleteData(@PathVariable("year") String year) {
       demandForecastRepository.deleteByYear(year);
        return true;
    }
//
//    @RequestMapping(value = "/demf/{add}",method = RequsetMethod.POST)
//    public add add(@RequestBody add addData){
//        DemandForecast demandForecast = new DemandForecast();
//        demandForecastController.
//        return addData;
//    }

}