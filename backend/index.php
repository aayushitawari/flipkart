<php?
require('Database.php');
require('Product.php');
$db=new Database('mysql','localhost','flipkart','dbuser','dbpass');
$sql="SELECT * FROM Product";
$result=$db->select($sql);
$products=array();
if($result !=false){
    foreach($result as $row){
        $product=new Product($row['productTitle'],$row['productSubTitle'],$row['productPrice'],$row['productImage']);
        array_push($products,$product);
 }
}
header('Content-Type:application/json; charset=utf-8');
echo json_encode($products);
