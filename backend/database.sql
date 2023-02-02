DROP DATABASE IF EXISTS checkpoint4;
CREATE DATABASE checkpoint4;
USE checkpoint4;

CREATE TABLE `user` (
    `id` INT AUTO_INCREMENT NOT NULL ,
    `firstname` VARCHAR(50)  NOT NULL ,
    `lastname` VARCHAR(50)  NOT NULL ,
    `email` VARCHAR(50)  NOT NULL ,
    `city` VARCHAR(100)   NULL ,
    `postal_code` int   NULL ,
    `country` VARCHAR(100)  NULL ,
    `adress` VARCHAR(100)  NULL ,
    `phone` VARCHAR(100)  NULL,
     PRIMARY KEY (
        `id`
    )
);

CREATE TABLE `book` (
    `id` INT AUTO_INCREMENT NOT NULL ,
    `title` VARCHAR(50)  NOT NULL ,
    `author_id` INT  NOT NULL ,
    `pages` int  NULL ,
    `description` VARCHAR(500)  NULL ,
    `state_id` INT NULL ,
    `category_id` INT NULL ,
    `user_id` INT  NOT NULL,
    `image` VARCHAR(50)  NULL ,
     PRIMARY KEY (
        `id`
    )
);

CREATE TABLE `author` (
    `id` INT AUTO_INCREMENT NOT NULL ,
    `firstname` VARCHAR(50)  NOT NULL ,
    `lastname` VARCHAR(50)  NULL, 
     PRIMARY KEY (
        `id`
    )
);

CREATE TABLE `category` (
    `id` INT AUTO_INCREMENT NOT NULL ,
    `type` VARCHAR(50)  NULL,
     PRIMARY KEY (
        `id`
    )
);

CREATE TABLE `state` (
    `id` INT AUTO_INCREMENT NOT NULL ,
    `condition` VARCHAR(50)  NULL,
      PRIMARY KEY (
          `id`
      )  
);

ALTER TABLE `book` ADD CONSTRAINT `fk_book_author_id` FOREIGN KEY(`author_id`)
REFERENCES `author` (`id`);

ALTER TABLE `book` ADD CONSTRAINT `fk_book_state_id` FOREIGN KEY(`state_id`)
REFERENCES `state` (`id`);

ALTER TABLE `book` ADD CONSTRAINT `fk_book_category_id` FOREIGN KEY(`category_id`)
REFERENCES `category` (`id`);

ALTER TABLE `book` ADD CONSTRAINT `fk_book_user_id` FOREIGN KEY(`user_id`)
REFERENCES `user` (`id`);

INSERT INTO checkpoint4.`user` (firstname,lastname,email,city,postal_code,country,adress,phone) VALUES
	 ('Marc','Desideri','marc_desideri@gmail.com','Roma',56000,'Italie','1 avenue de Rome','05 65 45 34 54'),
	 ('Alexandre','Pré','alex_pre@gmail.com','Bergerac',45000,'France','1 rue de Victor Hugo','87 87 67 56 54'),
	 ('Alexandre ','Sarrazin','alex_sarrazin@gmail.com','Blaye',86000,'France','9 Impasse Sans Soucis','76 56 48 08 65'),
	 ('David','Faure','david_faure@gmail;com','Bruxelles',34000,'Belgique','2 avenue de Tintin','76 76 56 45 67'),
	 ('Amandine','Leporace','amandine_leporace@gmail.com','Poitiers',39000,'France','4 avenue d''Aquitaine','67 76 67 56 86'),
	 ('Anita','Darecka','anita_darecka@gmail.com','Cracovie',23000,'Pologne','5 avenue de Varsovie','76 76 56 56 54 89'),
	 ('Jean-Le-Grand','Bokassa','jean_bokassa@gmail.com','Paris',43000,'France','6 avenue de Tour Eiffel','56 67 87 56 54'),
	 ('Anthony','Labadie','anthony_labadie@gmail.com','Lyon',28000,'France','5 rue Jean Moulin','78 75 67 65 56 67'),
	 ('Cédric','Mounier','cedric_mounier@gmail.com','Bègles',53000,'France','6 avenue de Bordeaux','65 65 78 76 78'),
	 ('Davy ','Lebris','davy_lebris','Perouges',74000,'France','7 rue de Lyon','67 65 56 76 86'),
	 ('Grégory','Ledez','greg_ledez@gmail.com','Pau',81000,'France','6 promenades des Pyrenées','87 67 56 45 56'),
	 ('Julien','Dussart','julien_dussart@gmail.com','Cadillac',66000,'France','7 avenue de Chateau','87 67 56 45 98'),
	 ('Luc','Jaubert','luc_jaubert@gmail;com','Londres',45000,'Royaume-Uni','10 Oxford Street','67 65 65 77 87'),
	 ('Maxime','Dupin','maxime_dupin@gmail.com','Moscou',21000,'Russie','76 place Rouge','76 67 87 87 67');

   INSERT INTO checkpoint4.category (`type`) VALUES
	 ('Romance'),
	 ('Action and Adventure'),
	 ('Classics'),
	 ('Comic Book'),
	 ('Detective and Mystery'),
	 ('Fantasy'),
	 ('Historical Fiction'),
	 ('Horror'),
	 ('Short Stories'),
	 ('Suspense and Thrillers'),
	 ('Cookbooks'),
	 ('Science Fiction');

INSERT INTO checkpoint4.state (`condition`) VALUES
	 ('new'),
	 ('good condition'),
	 ('used');

   INSERT INTO checkpoint4.author (firstname,lastname) VALUES
	 ('Julia','Armfield'),
	 ('Sarah','Maclean'),
	 ('Jasmine','Guilory'),
	 ('Margaret','Antwood'),
	 ('Alexandre','Dumas'),
	 ('Harper','Lee'),
	 ('Alan','Moore'),
	 ('Michael','Connely'),
	 ('Ta-Nehisi','Coates'),
	 ('Katheryn','Stockett'),
	 ('Stephen','King'),
	 ('Junot','Diaz'),
	 ('Gillian','Flynn'),
	 ('Chrissy','Teigen');

INSERT INTO checkpoint4.book (title,author_id,pages,description,state_id,category_id,user_id, image) VALUES
	 ('Our Wives Under The Sea',1,276,'Miri thinks she has got her wife back, when Leah finally returns after a deep-sea mission that ended in catastrophe. It soon becomes clear, though, that Leah is not the same. Whatever happened in that vessel, whatever it was they were supposed to be studying before they were stranded on the ocean floor, Leah has brought part of it back with her, onto dry land and into their home.',2,1,1,'wives.jpg' ),
	 ('Brazen and the Beast',2,123,'When Lady Henrietta Sedley declares her twenty-ninth year her own, she has plans to inherit her father’s business, to make her own fortune, and to live her own life. But first, she intends to experience a taste of the pleasure she’ll forgo as a confirmed spinster. Everything is going perfectly…until she discovers the most beautiful man she’s ever seen tied up in her carriage and threatening to ruin the Year of Hattie before it’s even begun.',1,1,2, 'brazen.jpg'),
	 ('Royal Holiday',3,434,'Vivian Forest has been out of the country a grand total of one time, so when she gets the chance to tag along on her daughter Maddie’s work trip to England to style a royal family member, she can’t refuse. She’s excited to spend the holidays taking in the magnificent British sights, but what she doesn’t expect is to become instantly attracted to a certain private secretary, his charming accent, and unyielding formality.',3,1,3, 'holiday.jpg'),
	 ('La famille St. John',2,201,'Cela s’appelle tomber de Charybde en Scylla : afin d’échapper à un importun, Juliana Fiori commet l’erreur de se réfugier dans la voiture de Simon Pearson. Et, une fois de plus, l’arrogant duc la traite en gamine effrontée. Impulsive et rebelle comme toutes les Italiennes, elle incarne tout ce qu’il déteste chez une femme.',2,1,4, 'famille.jpg'),
	 ('The Sequel to The Handmaid''s Tale',4,500,'More than fifteen years after the events of The Handmaid''s Tale, the theocratic regime of the Republic of Gilead maintains its grip on power, but there are signs it is beginning to rot from within. At this crucial moment, the lives of three radically different women converge, with potentially explosive results.',1,12,5, 'handmaid.jpg'),
	 ('Captive',4,267,'1859. Grace Marks, condamnée à perpétuité, tourne lentement en rond dans la cour d''un pénitencier canadien. À l''âge de seize ans, elle a été accusée de deux meurtres horribles. Personne n''a jamais su si elle était coupable, innocente ou folle. Lors de son procès, après avoir donné trois versions des faits, elle s''est murée dans le silence : amnésie ou dissimulation ? ',3,12,6, 'captive.jpg'),
	 ('The Three Musketeers',5,304,'he Three Musketeers is a novel by Alexandre Dumas. Set in the 17th century, it recounts the adventures of a young man named d''Artagnan after he leaves home to travel to Paris, to join the Musketeers of the Guard. D''Artagnan is not one of the musketeers of the title; those being his friends Athos, Porthos and Aramis, inseparable friends who live by the motto "all for one, one for all", a motto which is first put forth by d''Artagnan.',1,2,7, 'three.jpeg'),
	 ('To Kill a Mockingbird',6,600,'One of the most cherished stories of all time, To Kill a Mockingbird has been translated into more than forty languages, sold more than forty million copies worldwide, served as the basis for an enormously popular motion picture, and was voted one of the best novels of the twentieth century by librarians across the country.',2,3,8, 'mocking.jpg'),
	 ('Watchmen',7,145,'Considered the greatest graphic novel in the history of the medium, the Hugo Award-winning story chronicles the fall from grace of a group of superheroes plagued by all-too-human failings. Along the way, the concept of the superhero is dissected as an unknown assassin stalks the erstwhile heroes.',3,4,9, 'watchmen.jpg'),
	 ('The Night Fire',8,501,'Back when Harry Bosch was just a rookie homicide detective, he had an inspiring mentor who taught him to take the work personally and light the fire of relentlessness for every case. Now that mentor, John Jack Thompson, is dead, and his widow gives Bosch a murder book, one that Thompson took with him when he left the LAPD twenty years before -- the unsolved killing of a troubled young man.',1,5,10, 'fire.jpg'),
	 ('The Water Dancer',9,334,'Young Hiram Walker was born into bondage. When his mother was sold away, Hiram was robbed of all memory of her—but was gifted with a mysterious power. Years later, when Hiram almost drowns in a river, that same power saves his life. This brush with death births an urgency in Hiram and a daring scheme: to escape from the only home he’s ever known.',2,6,11, 'dancer.jpg'),
	 ('The Help',10,301,'Aibileen is a black maid in 1962 Jackson, Mississippi, who’s always taken orders quietly, but lately she’s unable to hold her bitterness back. Her friend Minny has never held her tongue but now must somehow keep secrets about her employer that leave her speechless. White socialite Skeeter just graduated college. She’s full of ambition, but without a husband, she’s considered a failure.',3,7,12, 'help.jpg'),
	 ('Carrie',11,245,'Carrie White may be picked on by her classmates, but she has a gift. She can move things with her mind. Doors lock. Candles fall. This is her power and her problem. Then, an act of kindness, as spontaneous as the vicious taunts of her classmates, offers Carrie a chance to be a normal...until an unexpected cruelty turns her gift into a weapon of horror and destruction that no one will ever forget.',1,8,13, 'carrie.jpg'),
	 ('This Is How You Lose Her',12,209,'On a beach in the Dominican Republic, a doomed relationship flounders. In a New Jersey laundry room, a woman does her lover’s washing and thinks about his wife. In Boston, a man buys his love child, his only son, a first baseball bat and glove.',2,9,14, 'lose.jpg'),
	 ('Gone Girl: A Novel',13,156,'On a warm summer morning in North Carthage, Missouri, it is Nick and Amy Dunne’s fifth wedding anniversary. Presents are being wrapped and reservations are being made when Nick’s clever and beautiful wife disappears. ',3,10,1, 'gone.jpg'),
	 ('Cravings: Hungry for More',14,354,'It’s a life of pancakes that remind you of blueberry pie, eating onion dip with your glam squad, banana bread that breaks the internet, and a little something called Pad Thai Carbonara. After two years of parenthood, falling in love with different flavors, and relearning the healing power of comfort food, this book is like Chrissy’s new edible diary:',2,11,2, 'cravings.jpg');
