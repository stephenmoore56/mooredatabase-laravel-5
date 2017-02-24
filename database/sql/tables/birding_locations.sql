-- MySQL dump 10.13  Distrib 5.7.17, for Linux (x86_64)
--
-- Host: mysql57test.cd02yxrr7fxm.us-east-1.rds.amazonaws.com    Database: birding
-- ------------------------------------------------------
-- Server version	5.7.10-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Temporary view structure for view `birding_locations`
--

DROP TABLE IF EXISTS `birding_locations`;
/*!50001 DROP VIEW IF EXISTS `birding_locations`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `birding_locations` AS SELECT 
 1 AS `id`,
 1 AS `country_code`,
 1 AS `state_code`,
 1 AS `location_name`,
 1 AS `county_name`,
 1 AS `notes`,
 1 AS `latitude`,
 1 AS `longitude`,
 1 AS `ecs_subsection_id`,
 1 AS `trip_count`,
 1 AS `species_count`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `birding_locations`
--

/*!50001 DROP VIEW IF EXISTS `birding_locations`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`smoore`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `birding_locations` AS select `location`.`id` AS `id`,`location`.`country_code` AS `country_code`,`location`.`state_code` AS `state_code`,`location`.`location_name` AS `location_name`,`location`.`county_name` AS `county_name`,`location`.`notes` AS `notes`,`location`.`latitude` AS `latitude`,`location`.`longitude` AS `longitude`,`location`.`ecs_subsection_id` AS `ecs_subsection_id`,(select count(0) from `trip` where (`trip`.`location_id` = `location`.`id`)) AS `trip_count`,(select count(distinct `sighting`.`aou_list_id`) from ((`trip` join `sighting` on((`trip`.`id` = `sighting`.`trip_id`))) join `aou_list` on((`sighting`.`aou_list_id` = `aou_list`.`id`))) where (`trip`.`location_id` = `location`.`id`)) AS `species_count` from `location` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-02-23 21:42:28
