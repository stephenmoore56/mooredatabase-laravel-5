CREATE PROCEDURE proc_getSpecies2(
speciesId INT
) AS 	BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION RESIGNAL;
SET SESSION TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;

SELECT 
    aou_list.id,
    aou_order.order_name,
    aou_order.notes AS order_notes,
    aou_list.common_name,
    aou_list.scientific_name,
    aou_list.family,
    aou_list.subfamily,
    COUNT(*) AS sightings,
    MAX(trip.trip_date) AS last_seen,
    MIN(RIGHT(MAKEDATE(YEAR(trip.trip_date),
                DAYOFYEAR(trip.trip_date)),
        5)) AS earliestSighting,
    MAX(RIGHT(MAKEDATE(YEAR(trip.trip_date),
                DAYOFYEAR(trip.trip_date)),
        5)) AS latestSighting
FROM
    aou_list
        INNER JOIN
    aou_order ON aou_list.`order` = aou_order.order_name
		LEFT JOIN 
    sighting ON sighting.aou_list_id = aou_list.id
        LEFT JOIN
    trip ON sighting.trip_id = trip.id
WHERE
    aou_list.id = speciesId
GROUP BY aou_list.id , aou_order.order_name , aou_order.notes , aou_list.common_name , aou_list.scientific_name , aou_list.`order`, aou_list.family , aou_list.subfamily;

END
