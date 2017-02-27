CREATE PROCEDURE proc_getLocation(
locationId INT
) AS 	BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION RESIGNAL;
SET SESSION TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;

SELECT * FROM location WHERE id = locationId;

END