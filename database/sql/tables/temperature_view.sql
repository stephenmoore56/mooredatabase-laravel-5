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
-- Temporary view structure for view `temperature_view`
--

DROP TABLE IF EXISTS `temperature_view`;
/*!50001 DROP VIEW IF EXISTS `temperature_view`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `temperature_view` AS SELECT 
 1 AS `monthNumber`,
 1 AS `avg_low_temp`,
 1 AS `avg_high_temp`,
 1 AS `record_low_temp`,
 1 AS `record_high_temp`,
 1 AS `avg_precipitation`,
 1 AS `avg_snowfall`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `temperature_view`
--

/*!50001 DROP VIEW IF EXISTS `temperature_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`smoore`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `temperature_view` AS select `monthly_averages`.`month_number` AS `monthNumber`,`monthly_averages`.`avg_low_temp` AS `avg_low_temp`,`monthly_averages`.`avg_high_temp` AS `avg_high_temp`,`monthly_averages`.`record_low_temp` AS `record_low_temp`,`monthly_averages`.`record_high_temp` AS `record_high_temp`,`monthly_averages`.`avg_precipitation` AS `avg_precipitation`,`monthly_averages`.`avg_snowfall` AS `avg_snowfall` from `monthly_averages` */;
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

-- Dump completed on 2017-03-22 13:30:08
