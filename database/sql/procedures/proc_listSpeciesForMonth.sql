CREATE PROCEDURE proc_listSpeciesForMonth(
monthNumber INT) AS 	BEGIN

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
    (SELECT 
            COUNT(DISTINCT aou_list.id)
        FROM
            trip
                INNER JOIN
            sighting ON trip.id = sighting.trip_id
                INNER JOIN
            aou_list ON sighting.aou_list_id = aou_list.id
                INNER JOIN
            aou_order ao2 ON aou_list.`order` = ao2.order_name
        WHERE
            aou_order.order_name = ao2.order_name
                AND MONTH(trip.trip_date) = monthNumber) AS order_species_count,
    COUNT(*) AS sightings,
    MAX(trip.trip_date) AS last_seen,
    MONTHNAME(trip.trip_date) AS monthName
FROM
    trip
        INNER JOIN
    sighting ON trip.id = sighting.trip_id
        INNER JOIN
    aou_list ON sighting.aou_list_id = aou_list.id
        INNER JOIN
    aou_order ON aou_list.`order` = aou_order.order_name
WHERE
    MONTH(trip.trip_date) = monthNumber
GROUP BY aou_list.common_name , aou_list.scientific_name , aou_list.`order` , aou_list.family , aou_list.subfamily
ORDER BY aou_list.common_name ASC;

END
