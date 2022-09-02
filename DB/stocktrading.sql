-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema stocktrackerdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `stocktrackerdb` ;

-- -----------------------------------------------------
-- Schema stocktrackerdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `stocktrackerdb` DEFAULT CHARACTER SET utf8 ;
USE `stocktrackerdb` ;

-- -----------------------------------------------------
-- Table `sector`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sector` ;

CREATE TABLE IF NOT EXISTS `sector` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `stocks`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `stocks` ;

CREATE TABLE IF NOT EXISTS `stocks` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `symbol` VARCHAR(45) NULL,
  `company` VARCHAR(45) NULL,
  `pe_ratio` DECIMAL(5,2) NULL,
  `number_of_shares` VARCHAR(45) NULL,
  `date` DATE NULL,
  `close_price` DECIMAL(5,2) NULL,
  `sector_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_stocks_sector_idx` (`sector_id` ASC),
  CONSTRAINT `fk_stocks_sector`
    FOREIGN KEY (`sector_id`)
    REFERENCES `sector` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS stockuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'stockuser'@'localhost' IDENTIFIED BY 'user';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'stockuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `sector`
-- -----------------------------------------------------
START TRANSACTION;
USE `stocktrackerdb`;
INSERT INTO `sector` (`id`, `name`) VALUES (1, 'Communication Services');
INSERT INTO `sector` (`id`, `name`) VALUES (2, 'Consumer Discretionary');
INSERT INTO `sector` (`id`, `name`) VALUES (3, 'Consumer Staples');
INSERT INTO `sector` (`id`, `name`) VALUES (4, 'Energy');
INSERT INTO `sector` (`id`, `name`) VALUES (5, 'Financials');
INSERT INTO `sector` (`id`, `name`) VALUES (6, 'Health Care');
INSERT INTO `sector` (`id`, `name`) VALUES (7, 'Industrials');
INSERT INTO `sector` (`id`, `name`) VALUES (8, 'Information Technology');
INSERT INTO `sector` (`id`, `name`) VALUES (9, 'Materials');
INSERT INTO `sector` (`id`, `name`) VALUES (10, 'Real Estate');
INSERT INTO `sector` (`id`, `name`) VALUES (11, 'Utilities');

COMMIT;


-- -----------------------------------------------------
-- Data for table `stocks`
-- -----------------------------------------------------
START TRANSACTION;
USE `stocktrackerdb`;
INSERT INTO `stocks` (`id`, `symbol`, `company`, `pe_ratio`, `number_of_shares`, `date`, `close_price`, `sector_id`) VALUES (1, 'AAPL', 'Apple', 26.26, '16070M', '2022-09-01', 157.22, 8);
INSERT INTO `stocks` (`id`, `symbol`, `company`, `pe_ratio`, `number_of_shares`, `date`, `close_price`, `sector_id`) VALUES (2, 'GOOGL', 'Alphabet Inc', 20.27, '6881M', '2022-09-01', 108.22, 1);
INSERT INTO `stocks` (`id`, `symbol`, `company`, `pe_ratio`, `number_of_shares`, `date`, `close_price`, `sector_id`) VALUES (3, 'META', 'Meta Platforms Inc', 13.03, '2.7M', '2022-09-01', 162.93, 1);
INSERT INTO `stocks` (`id`, `symbol`, `company`, `pe_ratio`, `number_of_shares`, `date`, `close_price`, `sector_id`) VALUES (4, 'NFLX', 'Netflix Inc', 20.92, '444M', '2022-09-02', 221.24, 1);
INSERT INTO `stocks` (`id`, `symbol`, `company`, `pe_ratio`, `number_of_shares`, `date`, `close_price`, `sector_id`) VALUES (5, 'WFC', 'Wells Fargo & Co', 10.48, '3793M', '2022-09-02', 42.9, 5);
INSERT INTO `stocks` (`id`, `symbol`, `company`, `pe_ratio`, `number_of_shares`, `date`, `close_price`, `sector_id`) VALUES (6, 'SNOW', 'Snowflake Inc', 11, '318M', '2022-09-02', 168.33, 8);
INSERT INTO `stocks` (`id`, `symbol`, `company`, `pe_ratio`, `number_of_shares`, `date`, `close_price`, `sector_id`) VALUES (7, 'ZM', 'Zoom Video Communications Inc', 24.59, '297M', '2022-09-02', 78.26, 8);
INSERT INTO `stocks` (`id`, `symbol`, `company`, `pe_ratio`, `number_of_shares`, `date`, `close_price`, `sector_id`) VALUES (8, 'CUBE', 'Cubesmart', 43.03, '224M', '2022-09-02', 45.58, 10);
INSERT INTO `stocks` (`id`, `symbol`, `company`, `pe_ratio`, `number_of_shares`, `date`, `close_price`, `sector_id`) VALUES (9, 'EL', 'Estee Lauder Companies Inc', 38.95, '357M', '2022-09-02', 248.27, 3);
INSERT INTO `stocks` (`id`, `symbol`, `company`, `pe_ratio`, `number_of_shares`, `date`, `close_price`, `sector_id`) VALUES (10, 'WBA', 'Walgreens Boots Alliance Inc', 5.95, '864M', '2022-09-02', 34.75, 3);

COMMIT;

