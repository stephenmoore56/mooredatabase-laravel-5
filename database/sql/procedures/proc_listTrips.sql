CREATE PROCEDURE proc_listTrips() AS 	BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION RESIGNAL;
SET SESSION TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;

SELECT
t.id,
l.location_name,
t.trip_date,
(SELECT COUNT(*) FROM sighting s WHERE s.trip_id = t.id) sightings
FROM 
trip t
INNER JOIN location l
	ON t.location_id = l.id
ORDER BY
t.trip_date DESC;

END
