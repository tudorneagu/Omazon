BEGIN;

INSERT INTO categories (id, title, slug, image) VALUES
(1, 'Animalerie', 'animalerie', 'animalerie.webp'),
(2, 'Beauté et parfum', 'beaute-et-parfum', 'beaute-et-parfum.webp'),
(3, 'Bricolage', 'bricolage', 'bricolage.webp'),
(4, 'Chaussures', 'chaussures', 'chaussures.webp'),
(5, 'Jardin', 'jardin', 'jardin.webp'),
(6, 'Jeux et jouets', 'jeux', 'jeux.webp'),
(7, 'Jeux vidéos', 'jeux-videos', 'jeux-videos.webp'),
(8, 'Livres', 'livres', 'livres.webp');


INSERT INTO tags (id, type, text) VALUES
(1, 'choice', 'Choix d''Omazon'),
(2, 'new', 'Nouveauté'),
(3, 'best-seller', 'N°1 des ventes'),
(4, 'flash', 'Vente flash');


INSERT INTO products (id, title, price, image, category_id, tag_id) VALUES
(1, 'Trixie Frisbee Caoutchouc Naturel 22 cm pour Chien, Coloris aléatoire', 8.99, 'frisbee.webp', 1, 3),
(2, 'PETKIT Pura Max Litiere Chat Autonettoyante, Bac à Litière Autonettoyante', 599.99, 'litiere.webp', 1, NULL),
(3, 'Omazon Basics sacs à déjections canines avec distributeur et clip pou', 6.29, 'sacs-caca.webp', 1, 1),
(4, 'LUXÉOL - Sérum Barbe Pousse', 22.49, 'barbe.webp', 2, 2),
(5, 'ESSIE nail polish - Vernis à ongles 13.5 ml color Strut Your Stuff', 9.11, 'vernis.webp', 2, NULL),
(6, 'Palette Lancôme Hypnôse 5 teintes roses', 51.64, 'maquillage.webp', 2, 4),
(7, 'Loctite Super Glue-3', 3.59, 'glue.webp', 3, 3),
(8, 'Multimètre Numérique KAIWEETS', 16.97, 'multimetre.webp', 3, NULL),
(9, 'FACOM Monture de Scie à Métaux', 24.9, 'scie.webp', 3, NULL),
(10, 'Scie sauteuse 720W avec 6 lames', 146.0, 'scie-sauteuse.webp', 3, 2),
(11, 'Facom Coffret de tournevis', 28.78, 'tournevis.webp', 3, NULL),
(12, 'Vans Sk8-Hi rose léopard Slim', 59.57, 'vans.webp', 4, 2),
(13, 'Pantoufles Mignon Furry Alpaga Rose', 18.99, 'chaussons.webp', 4, NULL),
(14, 'LA SPORTIVA Jackal II - Chaussures Trail Femme', 138.9, 'sportiva.webp', 4, NULL),
(15, 'DC Shoes Homme Pure High-Top WC Winter Basket', 71.95, 'dc-shoes.webp', 4, NULL),
(16, 'Tommy Hilfiger Femme Chaussures Semelles Compensées', 64.95, 'espadrilles.webp', 4, 1),
(17, 'Weber Barbecue à Charbon Compact Kettle', 70.95, 'bbq.webp', 5, 2),
(18, 'Edihome, Kit Barbecue, Ustensiles Barbecue', 29.99, 'bbq-kit.webp', 5, NULL),
(19, 'Kärcher Nettoyeur Haute Pression K 2 Universal Edition', 63.95, 'karcher.webp', 5, NULL),
(20, 'BLACK+DECKER Tondeuse Filaire 1000W', 69.99, 'tondeuse.webp', 5, NULL),
(21, 'BTFL Cody Surfskate 2024 Skateboard', 208.89, 'surfskate.webp', 6, NULL),
(22, 'LEGO Star Wars Millennium Falcon', 69.99, 'lego.webp', 6, NULL),
(23, 'Wdk Partner- QUILLES Nordiques', 14.5, 'molki.webp', 6, NULL),
(24, 'Nerf Elite 2.0, Blaster motorisé Double Punch', 19.99, 'nerf.webp', 6, NULL),
(25, 'ZENAGAME Le Traquenard', 19.99, 'traquenard.webp', 6, NULL),
(26, 'Stellar Blade, Édition Standard, PlayStation 5', 60.9, 'blade.webp', 7, NULL),
(27, 'Sony, Manette sans fil DualSense™', 64.0, 'manette.webp', 7, 1),
(28, 'Nintendo Console Switch avec Joy-Con', 266.09, 'switch.webp', 7, NULL),
(29, 'The Legend of Zelda : Tears of the Kingdom', 51.49, 'zelda-totk.webp', 7, NULL),
(30, 'Voice Content and Usability (English Edition)', 25.12, 'accessibilite.webp', 8, NULL),
(31, 'H2G2: L''intégrale de la trilogie en cinq volumes', 32.9, 'h2g2.webp', 8, NULL),
(32, 'Learning React: Modern Patterns for Developing React Apps', 55.77, 'react.webp', 8, 2);

INSERT INTO users (username, email, password) VALUES
('jdupont', 'j.dupont@example.com', 'password123'),
('mleblanc', 'm.leblanc@example.com', 'securepass456'),
('cpierre', 'c.pierre@example.com', 'mypassword789');

COMMIT;
