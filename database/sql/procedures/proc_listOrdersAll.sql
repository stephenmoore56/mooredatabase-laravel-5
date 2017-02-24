CREATE PROCEDURE proc_listOrdersAll() AS 	BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION RESIGNAL;
SET SESSION TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;

SELECT
'-1' AS id,
'All' as order_name,
'' as notes,
0 as sortkey

UNION

SELECT
id,
order_name,
notes,
1 as sortkey 
FROM 
aou_order
ORDER BY
sortkey,
order_name;

END
