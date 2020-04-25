package com.hareen.demo.controller;

import com.hareen.demo.models.DemandForecast;
import com.hareen.demo.repository.DemandForecastRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
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

    @PostMapping("/demf")
    public DemandForecast createForecast(@Valid @RequestBody DemandForecast demandForecast) {
        return demandForecastRepository.save(demandForecast);
    }

    @GetMapping(value="/demf/{id}")
    public ResponseEntity<DemandForecast> getForecastById(@PathVariable("id") String id) {
        return demandForecastRepository.findById(id)
                .map(demandForecast -> ResponseEntity.ok().body(demandForecast))
                .orElse(ResponseEntity.notFound().build());
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

    @DeleteMapping(value="/demf/{id}")
    public ResponseEntity<?> deleteForecast(@PathVariable("id") String id) {
        return demandForecastRepository.findById(id)
                .map(demandForecast -> {
                    demandForecastRepository.deleteById(id);
                    return ResponseEntity.ok().build();
                }).orElse(ResponseEntity.notFound().build());
    }
}