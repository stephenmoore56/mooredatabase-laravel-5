CREATE PROCEDURE proc_listLocationIds() AS 	BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION RESIGNAL;
SET SESSION TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;

SELECT DISTINCT
id
FROM location
ORDER BY
1;

END