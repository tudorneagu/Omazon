BEGIN;



TRUNCATE TABLE categories, tags, products, users, user_products, carts RESTART IDENTITY CASCADE;


INSERT INTO categories (id, title, slug, image) VALUES
(1, 'Animalerie', 'animalerie', 'animalerie.webp'),
(2, 'Beauté et parfum', 'beaute-et-parfum', 'beaute-et-parfum.webp'),
(3, 'Bricolage', 'bricolage', 'bricolage.webp'),
(4, 'Chaussures', 'chaussures', 'chaussures.webp'),
(5, 'Jardin', 'jardin', 'jardin.webp'),
(6, 'Jeux et jouets', 'jeux', 'jeux.webp'),
(7, 'Jeux vidéos', 'jeux-videos', 'jeux-videos.webp'),
(8, 'Livres', 'livres', 'livres.webp');


INSERT INTO tags (type, text) VALUES
('choice', 'Choix d''Omazon'),
('new', 'Nouveauté'),
('best-seller', 'N°1 des ventes'),
('flash', 'Vente flash');

INSERT INTO products (title, price, image, description, inStock, category_id, tag_id) VALUES
('Trixie Frisbee Caoutchouc Naturel 22 cm pour Chien, Coloris aléatoire', 8.99, 'frisbee.webp', '<p>Fait de caoutchouc naturel...</p>', false, 1, 3),
('PETKIT Pura Max Litiere Chat Autonettoyante', 599.99, 'litiere.webp', '<ul><li><strong>Système de sécurité XSecure...</li></ul>', false, 1, NULL),
('Omazon Basics sacs à déjections canines', 6.29, 'sacs-caca.webp', '<p>Omazon Basics vous offre des produits...</p>', true, 1, 1),
('LUXÉOL - Sérum Barbe Pousse - Densité & Epaisseur', 22.49, 'barbe.webp', '<p>Spécialiste du cheveu...</p>', true, 2, 2),
('ESSIE nail polish - Vernis à ongles 13.5 ml color Strut Your Stuff', 9.11, 'vernis.webp', '<p>Avec plus d’un millier de teintes créées...</p>', true, 2, NULL),
('Palette Lancôme Hypnôse 5 teintes roses', 51.64, 'maquillage.webp', '<p><em>Pas de description pour le moment</em></p>', false, 2, 4),
('Loctite Super Glue-3 | Précision', 3.59, 'glue.webp', '<p>Vous recherchez une colle pour des endroits difficiles d''accès...</p>', true, 3, 3),
('Multimètre Numérique KAIWEETS', 16.97, 'multimetre.webp', '<p>Le multimètre numérique est conçu pour être sûr...</p>', false, 3, NULL),
('FACOM Monture de Scie à Métaux - Poignée Ergonomique', 24.90, 'scie.webp', '<p>La monture de scie à métaux 300 mm 601PB FACOM...</p>', true, 3, NULL),
('Scie sauteuse 720W avec 6 lames dans coffret Makpac - MAKITA 4351FCTJ', 146.00, 'scie-sauteuse.webp', '<p>OPTIONS</p><p>ATTENTION:</p><ul><li>Les accessoires ou périphériques suivants...</li></ul>', true, 3, 2),
('Facom Coffret de tournevis, Multi, 5 Pièces', 28.78, 'tournevis.webp', '<p>FACOM Jeu de 5 Tournevis Isolés Slim 1000V...</p>', true, 3, NULL),
('Vans Sk8-Hi rose léopard Slim VQG369O', 59.57, 'vans.webp', '<p><em>Pas de description pour le moment</em></p>', true, 8, 2),
('Pantoufles Mignon Furry Alpaga Rose Peluche', 18.99, 'chaussons.webp', '<p>Les pantoufles sont conçues avec une jolie image d''alpaga...</p>', false, 8, NULL),
('LA SPORTIVA Jackal II - Chaussures Trail Femme', 138.90, 'sportiva.webp', '<p>Chaussures de trail running de camping et de randonnée...</p>', true, 8, NULL),
('DC Shoes Homme Pure High-Top WC Winter Basket', 71.95, 'dc-shoes.webp', '<p>Ne faites aucun faux pas avec une paire de chaussures DC Shoes...</p>', true, 8, NULL),
('Tommy Hilfiger Femme Chaussures Semelles Compensées', 64.95, 'espadrilles.webp', '<p>Faites une déclaration de style cette saison avec les chaussures Tommy Hilfiger...</p>', true, 8, 1),
('Weber Barbecue à Charbon Compact Kettle 47cm', 70.95, 'bbq.webp', '<p>Ajoutez un goût unique à vos préparations avec le Barbecue à Charbon Weber...</p>', false, 5, 2),
('Edihome, Kit Barbecue, Ustensiles Barbecue', 29.99, 'bbq-kit.webp', '<p><strong>Kit professionnel d''ustensiles de barbecue...</strong></p>', true, 5, NULL),
('Kärcher Nettoyeur Haute Pression K 2 Universal Edition', 63.95, 'karcher.webp', '<p>Le Kärcher K 2 Universal Edition est un nettoyeur haute pression...</p>', true, 5, NULL),
('BLACK+DECKER Tondeuse Filaire 1000W', 69.99, 'tondeuse.webp', '<p>Grâce au puissant moteur de 1000 W et à son bac de ramassage d''une capacité...</p>', true, 5, NULL),
('BTFL Cody Surfskate 2024 Skateboard', 208.89, 'surfskate.webp', '<p>Skateboard, Longboard oder Surfskate - Warum nicht einfach alles...</p>', false, 6, NULL),
('LEGO Star Wars Millennium Falcon', 69.99, 'lego.webp', '<p><strong>Description du produit</strong>...</p>', true, 6, NULL),
('WDK Partner- QUILLES Nordiques', 14.50, 'molki.webp', '<p><strong>Description du produit</strong>...</p>', false, 6, NULL),
('Nerf Elite 2.0, Blaster motorisé Double Punch', 19.99, 'nerf.webp', '<p><strong>Description du produit</strong>...</p>', true, 6, NULL),
('ZENAGAME Le Traquenard, Le Jeu Alcool', 19.99, 'traquenard.webp', '<ul><li>300 CARTES VARIEES ET TOUJOURS DROLES...</li></ul>', true, 6, NULL),
('Stellar Blade, Édition Standard, PlayStation 5', 60.90, 'blade.webp', '<p>L’avenir de l’humanité repose sur le fil d’une épée...</p>', true, 7, NULL),
('Sony, Manette sans fil DualSense™, PlayStation 5', 64.00, 'manette.webp', '<p>Vivez une expérience de jeu incroyablement immersive...</p>', true, 7, 1),
('Nintendo Console Switch avec Joy-Con bleu néon', 266.09, 'switch.webp', '<p>Console Nintendo Switch + 1 manette Joy-Con...</p>', false, 7, NULL),
('The Legend of Zelda : Tears of the Kingdom', 51.49, 'zelda-totk.webp', '<p>Faites le grand saut : la suite de l’aventure en monde ouvert...</p>', true, 7, NULL),
('Voice Content and Usability (English Edition)', 25.12, 'accessibilite.webp', '<p>Preston So (he/they) is a digital architect and strategist...</p>', false, 8, NULL),
('H2G2: L''intégrale de la trilogie en cinq volumes', 32.90, 'h2g2.webp', '<p>Comment garder tout son flegme quand on apprend dans la même journée...</p>', false, 8, NULL),
('Learning React: Modern Patterns for Developing React Apps', 55.77, 'react.webp', '<p>If you want to learn how to build efficient React applications...</p>', true, 8, 2);

INSERT INTO users (firstname, lastname, email, password) VALUES
('Bob', 'Dupont', 'j.dupont@example.com', 'password123'),
('Marie', 'Leblanc', 'm.leblanc@example.com', 'securepass456'),
('Charles', 'Pierre', 'c.pierre@example.com', 'mypassword789');



INSERT INTO user_products (user_id, product_id, created_at) VALUES
(1, 1, CURRENT_TIMESTAMP),
(2, 4, CURRENT_TIMESTAMP), 
(3, 5, CURRENT_TIMESTAMP); 


INSERT INTO carts (user_id, product_id, quantity, created_at, updated_at) VALUES
(1, 1, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP), 
(2, 3, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP), 
(3, 4, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP); 



COMMIT;
