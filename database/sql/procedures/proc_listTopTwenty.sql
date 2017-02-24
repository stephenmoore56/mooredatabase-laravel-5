CREATE PROCEDURE proc_listTopTwenty() AS 	BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION RESIGNAL;
SET SESSION TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;

SELECT * FROM (
	SELECT 
		aou_list.id, aou_list.common_name, COUNT(*) AS sightings
	FROM
		sighting
			INNER JOIN
		aou_list ON sighting.aou_list_id = aou_list.id
			INNER JOIN
		trip ON sighting.trip_id = trip.id
	GROUP BY aou_list.id
	ORDER BY sightings DESC , aou_list.common_name ASC
	LIMIT 20
) birds;

END
