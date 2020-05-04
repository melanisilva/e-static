package com.hareen.demo.repository;

import java.util.List;
import java.util.Optional;

import com.hareen.demo.models.DemandForecast;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Repository
public interface DemandForecastRepository extends MongoRepository <DemandForecast,String> {
    
    public boolean deleteByYear();
    Optional<DemandForecast> findByYear(String year);
	public void deleteByYear(String year);
}