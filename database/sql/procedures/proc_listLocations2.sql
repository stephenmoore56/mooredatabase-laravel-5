CREATE PROCEDURE proc_listLocations2() AS 	BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION RESIGNAL;
SET SESSION TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;

SELECT
bl.*,
ecs.*,
(SELECT COUNT(*) FROM trip t WHERE t.location_id = bl.id) trips
FROM
birding_locations bl
INNER JOIN ecs
	ON bl.ecs_subsection_id = ecs.subsection_id
ORDER BY
bl.location_name;

END
