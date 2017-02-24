CREATE PROCEDURE proc_searchAll(
p_searchString	VARCHAR(50),
p_orderId 		INT) AS 	BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION RESIGNAL;
SET SESSION TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;

DROP TEMPORARY TABLE IF EXISTS search_results;
CREATE TEMPORARY TABLE search_results (
id			INT PRIMARY KEY
);

-- get order name if they're using order filter
IF p_orderId != -1 THEN
	SET @order_name = (
		SELECT
			LTRIM(order_name)
		FROM aou_order
        WHERE
        id = p_orderId);
ELSE
	SET @order_name = NULL;
END IF;

IF LTRIM(RTRIM(p_searchString)) != '' THEN
    
    INSERT INTO search_results (
    id)
    SELECT
    a.id
    FROM
    aou_list a
    WHERE
    (a.common_name LIKE CONCAT('%',p_searchString,'%') OR
    a.scientific_name LIKE CONCAT('%',p_searchString,'%') OR
    a.family LIKE CONCAT('%',p_searchString,'%') OR
    a.subfamily LIKE CONCAT('%',p_searchString,'%')) AND
    a.`order` = COALESCE(@order_name, a.`order`);    

ELSE

	INSERT INTO search_results (
    id)
    SELECT
    a.id
    FROM
    aou_list a
    WHERE
    a.`order` = COALESCE(@order_name, a.`order`);

END IF;

-- final result
SELECT 
    a.id,
	a.`order` AS order_name,
	a.common_name,
	a.scientific_name,
	a.family,
	a.subfamily,
    (SELECT 
            COUNT(*)
        FROM
            sighting
                INNER JOIN
            aou_list a2 ON sighting.aou_list_id = a2.id
            WHERE
            a2.id = a.id
            ) sightings,
	(SELECT
     MAX(t.trip_date)
     FROM
     trip t
		INNER JOIN
	 sighting s ON t.id = s.trip_id
	 WHERE
     s.aou_list_id = a.id) last_seen
FROM
    aou_list a
        INNER JOIN
    search_results r ON a.id = r.id
ORDER BY a.common_name;

END
