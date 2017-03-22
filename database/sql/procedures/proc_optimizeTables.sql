CREATE PROCEDURE proc_optimizeTables() AS 	BEGIN

OPTIMIZE TABLE aou_list;
OPTIMIZE TABLE aou_order;
OPTIMIZE TABLE county;
OPTIMIZE TABLE ecs_province;
OPTIMIZE TABLE ecs_section;
OPTIMIZE TABLE ecs_subsection;
OPTIMIZE TABLE location;
OPTIMIZE TABLE month;
OPTIMIZE TABLE monthly_averages;
OPTIMIZE TABLE sighting;
OPTIMIZE TABLE trip;

END
