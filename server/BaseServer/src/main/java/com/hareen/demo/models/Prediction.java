package com.hareen.demo.models;

public class Prediction {
    private String value;
    private String accurcy;

    public String getAccurcy() {
        return accurcy;
    }

    public void setAccurcy(String accurcy) {
        this.accurcy = accurcy;
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
                ", accurcy='" + accurcy + '\'' +
                '}';
    }
}
