package com.hareen.demo.repository;

import java.util.List;

import com.hareen.demo.models.DemandForecast;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Repository
public interface DemandForecastRepository extends MongoRepository <DemandForecast,String> {
    
    public boolean deleteByYear();
    List<DemandForecast> findByYear(String year);
	public void deleteByYear(String year);
}