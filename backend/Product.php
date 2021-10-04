<?php
class Product{
    public $productTitle;
    public $productSubTitle;
    private $productPrice;
    private $productImage;
    public function __construct($title,$subTitle,$price,$image)
    {
        $this->productTitle=$title;
        $this->productSubTitle=$subTitle;
        $this->productPrice=$price;
        $this->productImage=$image;
    }
    public function __get($property)
    {
        if(property_exists($this,$property)){
            return $this->$property;
        }
    }
    public function __set($property,$value){
        if(property_exists($this,$property)){
            $this->$property=$value;
        }
        return $this;
        }
    }