CREATE PROCEDURE proc_getLocation2(
locationId INT
) AS 	BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION RESIGNAL;
SET SESSION TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;

SELECT
bl.id, 
bl.country_code,
bl.state_code,
bl.location_name,
bl.county_name,
bl.notes,
bl.latitude,
bl.longitude,
bl.ecs_subsection_id,
ecss.name AS ecs_subsection_name,
ecss.url AS ecs_subsection_url,
bl.trip_count,
bl.species_count
FROM
birding_locations bl
INNER JOIN ecs_subsection ecss ON bl.ecs_subsection_id = ecss.id
WHERE
bl.id = locationId;

END
