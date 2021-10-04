<?php
class Database extends PDO
{
    public function __construct($db_type,$db_host,$db_name,$db_user,$db_pass)
    {
        parent::construct($db_type . ':host=' .$db_host .';dbname='.$db_name,$db_user,$db_pass_;
    }
    private function handleError(){
        print_r($this->errorInfo());
    }
    public function select($sql,$params=array(),$fetchMode=PDO::FETCH_ASSOC)
    {
        $statement=$this->prepare($sql);
        //bind parameter :productId <--bind with $value['productId']
        foreach ($params as $key => $value){
            $statement->bindValue("$key",$value);
        }
        $isSuccessful=$statement->execute();
        if($isSuccessful){
            return $statement->fetchAll($fetchMode);
        }
        else{
            $this->handleError();
            return false;
}
    }
}