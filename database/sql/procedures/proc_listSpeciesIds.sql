CREATE PROCEDURE proc_listSpeciesIds() AS 	BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION RESIGNAL;
SET SESSION TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;

SELECT DISTINCT
b.aou_list_id
FROM birds b
INNER JOIN sighting s ON b.aou_list_id = s.aou_list_id
ORDER BY
1;

END
