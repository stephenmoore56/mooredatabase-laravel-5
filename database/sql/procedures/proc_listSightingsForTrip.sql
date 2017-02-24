CREATE PROCEDURE proc_listSightingsForTrip(
p_tripId INT) AS 	BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION RESIGNAL;
SET SESSION TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;

SELECT
s.id,
s.trip_id,
b.*
FROM 
sighting s
INNER JOIN birds b
	ON s.aou_list_id = b.aou_list_id
WHERE
s.trip_id = p_tripId
ORDER BY
b.common_name ASC;

END
