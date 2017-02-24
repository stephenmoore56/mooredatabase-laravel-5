CREATE PROCEDURE proc_listMonthsForSpecies(
speciesId INT) AS 	BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION RESIGNAL;
SET SESSION TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;

SELECT 
    MIN(l.common_name) AS common_name,
    MONTH(t.trip_date) AS monthNumber,
    MONTHNAME(t.trip_date) AS monthName,
    COUNT(DISTINCT s.id) AS sightingCount
FROM
    sighting s
        INNER JOIN
    trip t ON s.trip_id = t.id
        INNER JOIN
    aou_list l ON s.aou_list_id = l.id
WHERE
    s.aou_list_id = speciesId
GROUP BY MONTH(t.trip_date)
ORDER BY 1;

END
