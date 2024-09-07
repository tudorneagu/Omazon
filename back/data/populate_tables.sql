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
('Trixie Frisbee Caoutchouc Naturel 22 cm pour Chien, Coloris aléatoire', 8.99, 'frisbee.webp', '<p>Fait de caoutchouc naturel, ce frisbee est parfait pour divertir votre chien tout en prenant soin de ses dents. Résistant et souple, il convient à toutes les races de chiens. Couleur aléatoire selon disponibilité.</p>', false, 1, 3),
('PETKIT Pura Max Litiere Chat Autonettoyante', 599.99, 'litiere.webp', '<ul><li><strong>Système de sécurité XSecure</strong> pour une utilisation sans danger pour les chats.</li><li>Contrôle intelligent via application pour suivre les habitudes de votre chat.</li><li>Entretien facile avec système autonettoyant intégré.</li></ul>', false, 1, NULL),
('Omazon Basics sacs à déjections canines', 6.29, 'sacs-caca.webp', '<p>Omazon Basics vous offre des produits essentiels pour le quotidien de votre animal. Ces sacs à déjections canines sont solides et faciles à détacher, idéaux pour les promenades avec votre chien. 300 sacs inclus.</p>', true, 1, 1),
('LUXÉOL - Sérum Barbe Pousse - Densité & Epaisseur', 22.49, 'barbe.webp', '<p>Spécialiste du cheveu, Luxéol propose un sérum pour favoriser la pousse et renforcer la densité de votre barbe. Formulé à base d''ingrédients naturels pour nourrir et fortifier votre barbe.</p>', true, 2, 2),
('ESSIE nail polish - Vernis à ongles 13.5 ml color Strut Your Stuff', 9.11, 'vernis.webp', '<p>Avec plus d’un millier de teintes créées, ESSIE est l''une des marques les plus populaires dans le monde de la beauté. Ce vernis Strut Your Stuff est parfait pour une manucure éclatante et durable.</p>', true, 2, NULL),
('Palette Lancôme Hypnôse 5 teintes roses', 51.64, 'maquillage.webp', '<p>Créez des looks de maquillage personnalisés avec cette palette Lancôme Hypnôse, offrant cinq nuances de rose idéales pour des maquillages subtils ou audacieux. Compacte et pratique, parfaite pour emporter partout.</p>', false, 2, 4),
('Loctite Super Glue-3 | Précision', 3.59, 'glue.webp', '<p>Vous recherchez une colle pour des endroits difficiles d''accès ? La Loctite Super Glue-3 Précision est dotée d''un embout fin qui permet d''appliquer la colle avec précision, même dans les plus petits recoins. Sèche rapidement et offre une résistance exceptionnelle.</p>', true, 3, 3),
('Multimètre Numérique KAIWEETS', 16.97, 'multimetre.webp', '<p>Le multimètre numérique est conçu pour être sûr et précis. Idéal pour mesurer la tension, le courant et la résistance dans vos projets de bricolage ou professionnels. Écran rétroéclairé pour une lecture facile même en faible luminosité.</p>', false, 3, NULL),
('FACOM Monture de Scie à Métaux - Poignée Ergonomique', 24.90, 'scie.webp', '<p>La monture de scie à métaux 300 mm 601PB FACOM est conçue pour un confort d''utilisation optimal. Sa poignée ergonomique offre une excellente prise en main pour découper avec précision dans les matériaux les plus résistants.</p>', true, 3, NULL),
('Scie sauteuse 720W avec 6 lames dans coffret Makpac - MAKITA 4351FCTJ', 146.00, 'scie-sauteuse.webp', '<p>Cette scie sauteuse puissante de 720W est idéale pour les découpes rapides et précises. Livrée avec 6 lames et un coffret de transport Makpac, elle est parfaite pour les travaux de menuiserie, même les plus complexes.</p>', true, 3, 2),
('Facom Coffret de tournevis, Multi, 5 Pièces', 28.78, 'tournevis.webp', '<p>FACOM Jeu de 5 Tournevis Isolés Slim 1000V est indispensable pour tous vos travaux électriques et de bricolage. Ces tournevis ergonomiques offrent une prise en main confortable et une sécurité maximale.</p>', true, 3, NULL),
('Vans Sk8-Hi rose léopard Slim VQG369O', 59.57, 'vans.webp', '<p>Ces baskets montantes Vans Sk8-Hi combinent confort et style avec un motif léopard rose audacieux. Parfaites pour un look décontracté tout en restant à la pointe de la mode.</p>', true, 4, 2),
('Pantoufles Mignon Furry Alpaga Rose Peluche', 18.99, 'chaussons.webp', '<p>Les pantoufles sont conçues avec une jolie image d''alpaga pour un confort ultime. Douces et chaudes, elles sont parfaites pour les journées de détente à la maison.</p>', false, 8, NULL),
('LA SPORTIVA Jackal II - Chaussures Trail Femme', 138.90, 'sportiva.webp', '<p>Chaussures de trail running de camping et de randonnée pour femme. La Sportiva Jackal II offre une adhérence maximale et un amorti optimal pour vos courses en montagne ou en pleine nature.</p>', true, 8, NULL),
('DC Shoes Homme Pure High-Top WC Winter Basket', 71.95, 'dc-shoes.webp', '<p>Ne faites aucun faux pas avec une paire de chaussures DC Shoes. Idéales pour l''hiver, ces baskets montantes offrent une protection optimale contre le froid tout en restant stylées et confortables.</p>', true, 8, NULL),
('Tommy Hilfiger Femme Chaussures Semelles Compensées', 64.95, 'espadrilles.webp', '<p>Faites une déclaration de style cette saison avec les chaussures Tommy Hilfiger à semelles compensées. Parfaites pour ajouter une touche d''élégance à vos tenues décontractées.</p>', true, 8, 1),
('Weber Barbecue à Charbon Compact Kettle 47cm', 70.95, 'bbq.webp', '<p>Ajoutez un goût unique à vos préparations avec le Barbecue à Charbon Weber. Compact et facile à utiliser, ce barbecue est parfait pour les petits espaces extérieurs.</p>', false, 5, 2),
('Edihome, Kit Barbecue, Ustensiles Barbecue', 29.99, 'bbq-kit.webp', '<p><strong>Kit professionnel d''ustensiles de barbecue en acier inoxydable</strong>, incluant une pince, une spatule et une fourchette. Idéal pour toutes vos grillades.</p>', true, 5, NULL),
('Kärcher Nettoyeur Haute Pression K 2 Universal Edition', 63.95, 'karcher.webp', '<p>Le Kärcher K 2 Universal Edition est un nettoyeur haute pression compact et léger, idéal pour les petits travaux de nettoyage autour de la maison, comme les patios, les voitures ou les meubles de jardin.</p>', true, 5, NULL),
('BLACK+DECKER Tondeuse Filaire 1000W', 69.99, 'tondeuse.webp', '<p>Grâce au puissant moteur de 1000 W et à son bac de ramassage d''une capacité de 35 litres, la tondeuse BLACK+DECKER est idéale pour l''entretien de votre pelouse.</p>', true, 5, NULL),
('BTFL Cody Surfskate 2024 Skateboard', 208.89, 'surfskate.webp', '<p>Le BTFL Cody est un surfskate polyvalent qui combine les avantages d''un skateboard, d''un longboard et d''un surfskate. Conçu pour les amateurs de glisse, il est idéal pour s''entraîner aux mouvements de surf sur le bitume.</p>', false, 6, NULL),
('LEGO Star Wars Millennium Falcon', 69.99, 'lego.webp', '<p><strong>Description du produit</strong>: Construisez l''emblématique vaisseau spatial Millennium Falcon avec cette maquette LEGO Star Wars. Parfait pour les amateurs de la saga et les collectionneurs.</p>', true, 6, NULL),
('WDK Partner- QUILLES Nordiques', 14.50, 'molki.webp', '<p><strong>Description du produit</strong>: Jeu de quilles traditionnel nordique, idéal pour les moments en famille ou entre amis. Facile à apprendre et amusant pour tous les âges.</p>', false, 6, NULL),
('Nerf Elite 2.0, Blaster motorisé Double Punch', 19.99, 'nerf.webp', '<p><strong>Description du produit</strong>: Avec ce blaster motorisé Nerf Elite 2.0, préparez-vous à des batailles intenses avec vos amis. Double puissance, double précision !</p>', true, 6, NULL),
('ZENAGAME Le Traquenard, Le Jeu Alcool', 19.99, 'traquenard.webp', '<ul><li>300 CARTES VARIÉES ET TOUJOURS DRÔLES, parfaites pour animer vos soirées entre amis.</li><li>Jeu d''alcool avec des défis et des gages hilarants.</li></ul>', true, 6, NULL),
('Stellar Blade, Édition Standard, PlayStation 5', 60.90, 'blade.webp', '<p>L’avenir de l’humanité repose sur le fil d’une épée dans Stellar Blade. Explorez des environnements futuristes dans cette aventure épique exclusivement sur PlayStation 5.</p>', true, 7, NULL),
('Sony, Manette sans fil DualSense™, PlayStation 5', 64.00, 'manette.webp', '<p>Vivez une expérience de jeu incroyablement immersive avec la manette sans fil DualSense pour PlayStation 5. Ressentez chaque action avec les vibrations et les gâchettes adaptatives.</p>', true, 7, 1),
('Nintendo Console Switch avec Joy-Con bleu néon', 266.09, 'switch.webp', '<p>Console Nintendo Switch + 1 manette Joy-Con bleu néon. Jouez à vos jeux préférés où que vous soyez, seul ou à plusieurs.</p>', false, 7, NULL),
('The Legend of Zelda : Tears of the Kingdom', 51.49, 'zelda-totk.webp', '<p>Faites le grand saut : la suite de l’aventure en monde ouvert The Legend of Zelda : Tears of the Kingdom est enfin disponible. Explorez des paysages immenses et résolvez des énigmes fascinantes.</p>', true, 7, NULL),
('Voice Content and Usability (English Edition)', 25.12, 'accessibilite.webp', '<p>Preston So (he/they) est un architecte numérique et stratège qui explore l''accessibilité et l''utilisation des contenus vocaux dans ce guide essentiel pour les concepteurs et développeurs.</p>', false, 8, NULL),
('H2G2: L''intégrale de la trilogie en cinq volumes', 32.90, 'h2g2.webp', '<p>Comment garder tout son flegme quand on apprend dans la même journée que la Terre va être détruite pour faire place à une autoroute intergalactique? Découvrez l''intégrale de cette saga culte de la science-fiction humoristique.</p>', false, 8, NULL),
('Learning React: Modern Patterns for Developing React Apps', 55.77, 'react.webp', '<p>If you want to learn how to build efficient React applications, this book offers modern patterns and best practices for developing with React. Perfect for developers looking to deepen their knowledge.</p>', true, 8, 2);

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
