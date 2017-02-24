CREATE PROCEDURE proc_listSpeciesByYear() AS 	BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION RESIGNAL;
SET SESSION TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;

SELECT 
    YEAR(t.trip_date) AS yearNumber,
    COUNT(DISTINCT l.id) AS speciesCount,
    COUNT(DISTINCT t.id) AS tripCount
FROM
    aou_list l
        INNER JOIN
    sighting s ON l.id = s.aou_list_id
        INNER JOIN
    trip t ON s.trip_id = t.id
WHERE
    YEAR(t.trip_date) >= 2010
GROUP BY YEAR(t.trip_date)
ORDER BY 1;

END
