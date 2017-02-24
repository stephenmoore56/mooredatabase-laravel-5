CREATE PROCEDURE proc_listTwoSpeciesByMonth() AS 	BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION RESIGNAL;
SET SESSION TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;

SELECT 
    MONTH(t.trip_date) AS monthNumber,
    MONTHNAME(t.trip_date) AS monthName,
    LEFT(MONTHNAME(t.trip_date), 1) AS monthLetter,
    COUNT(DISTINCT (CASE
            WHEN l.family = 'Anatidae' THEN l.id
            ELSE NULL
        END)) AS speciesCountAnseriformes,
    COUNT(DISTINCT (CASE
            WHEN l.family = 'Parulidae' THEN l.id
            ELSE NULL
        END)) AS speciesCountPasseriformes
FROM
    aou_list l
        INNER JOIN
    sighting s ON l.id = s.aou_list_id
        INNER JOIN
    trip t ON s.trip_id = t.id
WHERE
    (l.`order` = 'Anseriformes'
        AND l.family = 'Anatidae')
        OR (l.`order` = 'Passeriformes'
        AND l.family = 'Parulidae')
GROUP BY MONTH(t.trip_date)
ORDER BY 1;

END
