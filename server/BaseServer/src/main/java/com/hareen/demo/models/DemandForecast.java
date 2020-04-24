package com.hareen.demo.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;

@Document(collection = "demand_forecast")
@JsonIgnoreProperties(value = {"createdAt"}, allowGetters = true)
public class DemandForecast {
    @Id
    private String id;

    @Field
    private int year;
    @Field
    private String population;
    private String GDPAgri;
    private String GDPPerCap;
    private String domesticConsumer;


    private String avgElectricity;
    private String eSales;
    private String eClass;
    private String GDPService;

    public DemandForecast(String id, int year, String population, String GDPAgri, String GDPPerCap, String domesticConsumer, String avgElectricity, String eSales, String eClass, String GDPService) {
        this.id = id;
        this.year = year;
        this.population = population;
        this.GDPAgri = GDPAgri;
        this.GDPPerCap = GDPPerCap;
        this.domesticConsumer = domesticConsumer;
        this.avgElectricity = avgElectricity;
        this.eSales = eSales;
        this.eClass = eClass;
        this.GDPService = GDPService;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getPopulation() {
        return population;
    }

    public void setPopulation(String population) {
        this.population = population;
    }

    public String getGDPAgri() {
        return GDPAgri;
    }

    public void setGDPAgri(String GDPAgri) {
        this.GDPAgri = GDPAgri;
    }

    public String getGDPPerCap() {
        return GDPPerCap;
    }

    public void setGDPPerCap(String GDPPerCap) {
        this.GDPPerCap = GDPPerCap;
    }

    public String getDomesticConsumer() {
        return domesticConsumer;
    }

    public void setDomesticConsumer(String domesticConsumer) {
        this.domesticConsumer = domesticConsumer;
    }

    public String getAvgElectricity() {
        return avgElectricity;
    }

    public void setAvgElectricity(String avgElectricity) {
        this.avgElectricity = avgElectricity;
    }

    public String geteSales() {
        return eSales;
    }

    public void seteSales(String eSales) {
        this.eSales = eSales;
    }

    public String geteClass() {
        return eClass;
    }

    public void seteClass(String eClass) {
        this.eClass = eClass;
    }

    public String getGDPService() {
        return GDPService;
    }

    public void setGDPService(String GDPService) {
        this.GDPService = GDPService;
    }

    @Override
    public String toString() {
        return "DemandForecast{" +
                "id='" + id + '\'' +
                ", year='" + year + '\'' +
                ", population='" + population + '\'' +
                ", GDPAgri='" + GDPAgri + '\'' +
                ", GDPPerCap='" + GDPPerCap + '\'' +
                ", domesticConsumer='" + domesticConsumer + '\'' +
                ", avgElectricity='" + avgElectricity + '\'' +
                ", eSales='" + eSales + '\'' +
                ", eClass='" + eClass + '\'' +
                ", GDPService='" + GDPService + '\'' +
                '}';
    }
}
