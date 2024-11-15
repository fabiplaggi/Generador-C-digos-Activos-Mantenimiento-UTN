-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: generarcodigos
-- ------------------------------------------------------
-- Server version	8.4.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `activo_codigos`
--

DROP TABLE IF EXISTS `activo_codigos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `activo_codigos` (
  `id_activo_codigo` int NOT NULL AUTO_INCREMENT,
  `id_edificio` char(3) DEFAULT NULL,
  `id_piso` char(3) DEFAULT NULL,
  `id_sector` char(3) DEFAULT NULL,
  `id_activo` char(3) DEFAULT NULL,
  `id_ubicacion` char(3) DEFAULT NULL,
  `contador` int NOT NULL,
  `codigo` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_activo_codigo`),
  UNIQUE KEY `codigo` (`codigo`),
  KEY `id_edificio` (`id_edificio`),
  KEY `id_piso` (`id_piso`),
  KEY `id_sector` (`id_sector`),
  KEY `id_activo` (`id_activo`),
  KEY `id_ubicacion` (`id_ubicacion`),
  CONSTRAINT `activo_codigos_ibfk_1` FOREIGN KEY (`id_edificio`) REFERENCES `edificios` (`id_edificio`),
  CONSTRAINT `activo_codigos_ibfk_2` FOREIGN KEY (`id_piso`) REFERENCES `pisos` (`id_piso`),
  CONSTRAINT `activo_codigos_ibfk_3` FOREIGN KEY (`id_sector`) REFERENCES `sectores` (`id_sector`),
  CONSTRAINT `activo_codigos_ibfk_4` FOREIGN KEY (`id_activo`) REFERENCES `activos` (`id_activo`),
  CONSTRAINT `activo_codigos_ibfk_5` FOREIGN KEY (`id_ubicacion`) REFERENCES `ubicaciones` (`id_ubicacion`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activo_codigos`
--

LOCK TABLES `activo_codigos` WRITE;
/*!40000 ALTER TABLE `activo_codigos` DISABLE KEYS */;
INSERT INTO `activo_codigos` VALUES (1,'001','001','001','001','001',1,'ILUM - 001001001001001 - 001'),(2,'001','004','008','001','001',2,'ILUM - 001004008001001 - 002'),(3,'001','004','008','002','001',1,'AACO - 001004008002001 - 001'),(4,'001','003','006','001','001',3,'ILUM - 001003006001001 - 003'),(5,'001','002','006','002','001',2,'AACO - 001002006002001 - 002'),(6,'001','002','005','001','001',4,'ILUM - 001002005001001 - 004'),(7,'001','003','001','005','001',1,'VENT - 001003001005001 - 001');
/*!40000 ALTER TABLE `activo_codigos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-14 23:43:49
