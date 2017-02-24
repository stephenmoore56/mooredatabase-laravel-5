CREATE PROCEDURE proc_extractAllSightings() AS 	BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION RESIGNAL;
SET SESSION TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;

SELECT
s.id AS sighting_id,
a.id AS aou_list_id, a.scientific_name, a.common_name, ao.order_name, ao.notes AS order_notes, a.family, a.subfamily,
t.id as trip_id, t.trip_date,
l.id AS location_id, l.country_code, l.state_code, l.location_name, l.county_name, l.notes AS location_notes, l.latitude, l.longitude,
e.subsection_id, e.subsection_name, e.subsection_url, e.section_name, e.section_url, e.province_name, e.province_url
FROM
sighting s
INNER JOIN aou_list a
	ON s.aou_list_id = a.id
INNER JOIN aou_order ao
	ON a.`order` = ao.order_name
INNER JOIN trip t
	ON s.trip_id = t.id
INNER JOIN location l
	ON t.location_id = l.id
INNER JOIN ecs e
	ON e.subsection_id = l.ecs_subsection_id
ORDER BY
s.aou_list_id,
t.trip_date,
l.id

;

END
