CREATE PROCEDURE proc_listOrders() AS 	BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION RESIGNAL;
SET SESSION TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;

SELECT DISTINCT
order_name 
FROM birds
ORDER BY
1;

END