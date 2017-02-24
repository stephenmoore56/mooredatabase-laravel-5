CREATE PROCEDURE proc_listAll() AS 	BEGIN

	DECLARE EXIT HANDLER FOR SQLEXCEPTION RESIGNAL;
	SET SESSION TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;       

	SELECT
	
	b.*,

	
    t.trip_date,
    t.notes AS trip_notes,
    
	
	l.country_code,
	l.state_code,
	l.location_name,
	l.county_name,
	l.notes AS location_notes,
	l.latitude,
	l.longitude,
    
    
    ecs.*

	FROM
	birds b
	INNER JOIN sighting s
		ON b.aou_list_id = s.aou_list_id
	INNER JOIN trip t
		ON s.trip_id = t.id
	INNER JOIN location l
		ON t.location_id = l.id
	INNER JOIN ecs
		ON l.ecs_subsection_id = ecs.subsection_id;
    
END
