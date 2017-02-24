CREATE PROCEDURE proc_listSpeciesByMonth() AS 	BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION RESIGNAL;
SET SESSION TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;

SELECT 
    MONTH(t.trip_date) AS monthNumber,
    MONTHNAME(t.trip_date) AS monthName,
    LEFT(MONTHNAME(t.trip_date), 1) AS monthLetter,
    COUNT(DISTINCT l.id) AS speciesCount,
    COUNT(DISTINCT t.id) AS tripCount
FROM
    aou_list l
        INNER JOIN
    sighting s ON l.id = s.aou_list_id
        INNER JOIN
    trip t ON s.trip_id = t.id
GROUP BY MONTH(t.trip_date)
ORDER BY 1;

END
