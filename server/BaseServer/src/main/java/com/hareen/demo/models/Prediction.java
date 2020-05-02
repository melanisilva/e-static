package com.hareen.demo.models;

public class Prediction {
    private String value;
    private String accuracy;

    public String getAccurcy() {
        return accuracy;
    }

    public void setAccurcy(String accurcy) {
        this.accuracy = accurcy;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return "Prediction{" +
                "value='" + value + '\'' +
                ", accurcy='" + accuracy + '\'' +
                '}';
    }
}
