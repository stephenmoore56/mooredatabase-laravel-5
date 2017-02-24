CREATE PROCEDURE proc_listSpeciesByCounty() AS 	BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION RESIGNAL;
SET SESSION TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;

SELECT 
    MIN(location.county_name) AS countyName,
    COUNT(DISTINCT aou_list.id) AS speciesCount,
    COUNT(DISTINCT trip.id) AS tripCount
FROM
    trip
        INNER JOIN
    location ON trip.location_id = location.id
        INNER JOIN
    sighting ON trip.id = sighting.trip_id
        INNER JOIN
    aou_list ON sighting.aou_list_id = aou_list.id
GROUP BY location.county_name
ORDER BY 2 DESC;

END
