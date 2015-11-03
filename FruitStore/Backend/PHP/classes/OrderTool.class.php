<?php
require_once 'Order.class.php';
require_once 'DB.class.php';

class OrderTool {
  public function getOrders()
  {
    $returnValue = array();
    $result =  mysql_query("select t1.id, t1.sale_date, t1.total_cost, t1.creditCardNumber, t1.state, u1.id as user, u1.email, u1.delivery_address from transaction t1, user u1 where t1.user = u1.id order by sale_date desc");

    while($row =  mysql_fetch_assoc($result))
    {
      $order = new Order($row);
      array_push($returnValue,$order);

    }

    return $returnValue;

  }
}

?>
