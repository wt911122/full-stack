CREATE TABLE `user`(
   `id` varchar(36) NOT NULL PRIMARY KEY,
   `username` varchar(50) NOT NULL UNIQUE,
   `password` varchar(100) NOT NULL
);
CREATE TABLE `accountbook`(
   `id` varchar(36) NOT NULL PRIMARY KEY,
   `user` varchar(36) NOT NULL,
   `category` MEDIUMINT(50) NOT NULL,
   `content` varchar(100) NOT NULL,
   `cost` FLOAT NOT NULL,
   `moodgrade` FLOAT NOT NULL DEFAULT (0),
   `time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE `category`(
   `id` MEDIUMINT PRIMARY KEY AUTO_INCREMENT,
   `name` varchar(100) NOT NULL,
   `describe` varchar(100) NOT NULL
);
INSERT INTO `category` (`name`, `describe`) VALUES ('餐饮', '吃的！');
INSERT INTO `category` (`name`, `describe`) VALUES ('服饰', '穿的！');
INSERT INTO `category` (`name`, `describe`) VALUES ('服务', '你懂的！');
