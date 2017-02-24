CREATE PROCEDURE proc_listMonthsForSpecies2(
speciesId INT) AS 	BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION RESIGNAL;
SET SESSION TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;

DROP TABLE IF EXISTS months;
CREATE TEMPORARY TABLE months (
monthNumber TINYINT UNSIGNED PRIMARY KEY,
monthName VARCHAR(25) NOT NULL,
sightingCount SMALLINT NOT NULL DEFAULT 0,
common_name VARCHAR(100) DEFAULT '')
CHARACTER SET utf8 COLLATE utf8_general_ci;

INSERT INTO months (
common_name,
monthNumber,
monthName,
sightingCount)
SELECT
    MIN(l.common_name) AS common_name,
    MONTH(t.trip_date) AS monthNumber,
    MONTHNAME(t.trip_date) AS monthName,
    COUNT(DISTINCT s.id) AS sightingCount
FROM
	trip t
		INNER JOIN
    sighting s ON s.trip_id = t.id
        INNER JOIN
    aou_list l ON s.aou_list_id = l.id
WHERE
    s.aou_list_id = speciesId
GROUP BY monthNumber;

INSERT IGNORE INTO months (
monthNumber,
monthName)
SELECT DISTINCT
MONTH(trip_date) AS monthNumber,
MONTHNAME(trip_date)
FROM
trip;

SET @common_name = (SELECT MAX(common_name) FROM months);
    
SELECT
@common_name AS common_name,
monthNumber,
monthName,
sightingCount 
FROM
months
ORDER BY
monthNumber;

END
