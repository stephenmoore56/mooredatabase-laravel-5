CREATE PROCEDURE proc_listSpeciesByOrder() AS 	BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION RESIGNAL;
SET SESSION TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;

SELECT *
FROM (
    SELECT 
        aou_order.id,
        aou_order.order_name,
        aou_order.notes AS order_notes,
        (SELECT 
                COUNT(*)
            FROM
                aou_list aol2
            WHERE
                aol2.order = aou_order.order_name) AS order_species_count_all,
        COUNT(DISTINCT aou_list.id) AS speciesCount
    FROM
        sighting
            INNER JOIN
        aou_list ON sighting.aou_list_id = aou_list.id
            INNER JOIN
        aou_order ON aou_list.order = aou_order.order_name
    GROUP BY aou_order.order_name , aou_order.notes
    ORDER BY COUNT(DISTINCT aou_list.id) DESC
) `order`;

END
