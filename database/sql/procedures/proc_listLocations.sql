CREATE PROCEDURE proc_listLocations() AS 	BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION RESIGNAL;
SET SESSION TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;

SELECT * 
FROM birding_locations
ORDER BY
location_name;

END
