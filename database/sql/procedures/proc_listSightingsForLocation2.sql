CREATE PROCEDURE proc_listSightingsForLocation2(
locationId INT) AS 	BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION RESIGNAL;
SET SESSION TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;

SELECT 
    aou_list.id,
    aou_list.common_name,
    aou_list.scientific_name,
    aou_list.`order` AS order_name,
    aou_list.family,
    aou_list.subfamily,
    COUNT(DISTINCT sighting.id) AS sightings,
    MAX(trip.trip_date) AS last_seen
FROM
    trip
        INNER JOIN
    sighting ON trip.id = sighting.trip_id
        INNER JOIN
    aou_list ON sighting.aou_list_id = aou_list.id
WHERE
    trip.location_id = locationId
GROUP BY aou_list.common_name , aou_list.scientific_name , aou_list.`order` , aou_list.family , aou_list.subfamily
ORDER BY aou_list.common_name ASC;

END
