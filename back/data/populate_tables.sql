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


INSERT INTO tags (type, text) VALUES
('choice', 'Choix d''Omazon'),
('new', 'Nouveauté'),
('best-seller', 'N°1 des ventes'),
('flash', 'Vente flash');


INSERT INTO products (title, price, image, description, inStock, category_id, tag_id) VALUES
('Trixie Frisbee Caoutchouc Naturel 22 cm pour Chien, Coloris aléatoire', 8.99, 'frisbee.webp', '<p>Le Trixie Frisbee est un jouet d''extérieur idéal pour votre chien. Fabriqué en caoutchouc naturel durable, il est doux pour les dents et les gencives de votre animal tout en garantissant des heures de plaisir. Avec son diamètre de 22 cm, il convient aux chiens de taille moyenne à grande, et son design léger facilite les lancers. Les coloris sont aléatoires, ajoutant une touche de surprise à chaque achat.</p>', false, 1, 3),
('PETKIT Pura Max Litiere Chat Autonettoyante', 599.99, 'litiere.webp', '<p>La litière autonettoyante PETKIT Pura Max offre une solution hygiénique et sans effort pour les propriétaires de chats. Son système XSecure garantit la sécurité de votre chat pendant l''utilisation, tandis que la conception autonettoyante permet de maintenir la propreté de la litière sans intervention manuelle. Idéale pour les foyers multi-chats ou les propriétaires à la recherche de commodité.</p>', false, 1, NULL),
('Omazon Basics sacs à déjections canines', 6.29, 'sacs-caca.webp', '<p>Les sacs à déjections Omazon Basics sont conçus pour offrir une solution simple et écologique pour ramasser les déjections canines. Fabriqués avec des matériaux résistants, ils sont faciles à détacher et se ferment en toute sécurité pour une élimination hygiénique. Idéal pour les promenades quotidiennes de votre chien.</p>', true, 1, 1),
('LUXÉOL - Sérum Barbe Pousse - Densité & Epaisseur', 22.49, 'barbe.webp', '<p>Le sérum barbe LUXÉOL est spécialement formulé pour favoriser la pousse des poils et améliorer la densité et l''épaisseur de la barbe. Il nourrit les follicules pileux en profondeur, laissant votre barbe plus épaisse et plus robuste avec un usage régulier. Idéal pour ceux qui cherchent à obtenir une barbe plus fournie.</p>', true, 2, 2),
('ESSIE nail polish - Vernis à ongles 13.5 ml color Strut Your Stuff', 9.11, 'vernis.webp', '<p>Le vernis à ongles ESSIE offre une couvrance impeccable avec une finition professionnelle. Sa formule longue tenue et son large choix de couleurs permettent de répondre à toutes vos envies. "Strut Your Stuff" est une teinte vibrante, idéale pour les personnes qui aiment se démarquer avec des couleurs audacieuses.</p>', true, 2, NULL),
('Palette Lancôme Hypnôse 5 teintes roses', 51.64, 'maquillage.webp', '<p>La palette Hypnôse de Lancôme présente une sélection de cinq nuances de rose, idéales pour créer des looks subtils et élégants. Les couleurs sont faciles à mélanger, offrant des options allant des tons doux aux plus vibrants. Sa texture lisse et sa longue tenue en font un incontournable pour toute collection de maquillage.</p>', false, 2, 4),
('Loctite Super Glue-3 | Précision', 3.59, 'glue.webp', '<p>La Super Glue-3 de Loctite est conçue pour les travaux de précision. Son embout fin permet d''atteindre facilement les endroits difficiles d''accès, et sa formule rapide assure une adhérence solide en quelques secondes. Parfaite pour les réparations domestiques, les projets de bricolage ou les travaux nécessitant une colle résistante.</p>', true, 3, 3),
('Multimètre Numérique KAIWEETS', 16.97, 'multimetre.webp', '<p>Le multimètre numérique KAIWEETS est conçu pour les professionnels comme pour les amateurs de bricolage. Il permet de mesurer la tension, le courant, la résistance et bien plus encore avec précision. Avec ses fonctions de sécurité avancées et son écran rétroéclairé, ce multimètre est un outil essentiel pour tout travail électrique.</p>', false, 3, NULL),
('FACOM Monture de Scie à Métaux - Poignée Ergonomique', 24.90, 'scie.webp', '<p>La monture de scie à métaux FACOM est conçue pour offrir un confort maximal grâce à sa poignée ergonomique. Sa lame de 300 mm permet des découpes précises et efficaces, même dans les matériaux les plus durs. Un outil robuste et indispensable pour tous les projets de bricolage ou de construction.</p>', true, 3, NULL),
('Scie sauteuse 720W avec 6 lames dans coffret Makpac - MAKITA 4351FCTJ', 146.00, 'scie-sauteuse.webp', '<p>La scie sauteuse MAKITA 4351FCTJ est un outil puissant de 720W, livré avec 6 lames dans un coffret Makpac pratique. Elle est conçue pour offrir des découpes précises et rapides dans divers matériaux. Son système de contrôle des vibrations assure une utilisation confortable, tandis que ses lames interchangeables garantissent une polyvalence maximale.</p>', true, 3, 2),
('Facom Coffret de tournevis, Multi, 5 Pièces', 28.78, 'tournevis.webp', '<p>Le coffret de tournevis FACOM est composé de 5 pièces isolées, idéales pour les travaux électriques. Leur conception ergonomique assure une prise en main confortable, tandis que les matériaux de haute qualité garantissent une longue durée de vie. Parfait pour les bricoleurs et les professionnels.</p>', true, 3, NULL),
('Vans Sk8-Hi rose léopard Slim VQG369O', 59.57, 'vans.webp', '<p>Les Vans Sk8-Hi dans leur coloris rose léopard sont des baskets emblématiques combinant style et confort. Leur design montant offre un soutien optimal, tandis que la semelle en caoutchouc vulcanisée assure une adhérence parfaite. Un choix idéal pour ceux qui recherchent une chaussure audacieuse avec une touche d''originalité.</p>', true, 4, 2),
('Pantoufles Mignon Furry Alpaga Rose Peluche', 18.99, 'chaussons.webp', '<p>Ces pantoufles en peluche en forme d''alpaga sont parfaites pour garder vos pieds au chaud pendant les mois froids. Leur intérieur moelleux et doux offre un confort incomparable, tandis que leur design mignon et amusant mettra un sourire sur votre visage chaque fois que vous les porterez.</p>', false, 8, NULL),
('LA SPORTIVA Jackal II - Chaussures Trail Femme', 138.90, 'sportiva.webp', '<p>Les chaussures de trail LA SPORTIVA Jackal II sont conçues pour offrir un confort et une performance maximale sur les terrains accidentés. Leur semelle extérieure en caoutchouc assure une adhérence optimale, tandis que leur construction légère et respirante permet de longues sessions de trail sans fatigue. Un choix parfait pour les amateurs de sport en plein air.</p>', true, 8, NULL),
('DC Shoes Homme Pure High-Top WC Winter Basket', 71.95, 'dc-shoes.webp', '<p>Les baskets DC Shoes Pure High-Top WC Winter sont parfaites pour affronter les conditions hivernales. Leur design montant offre une protection supplémentaire contre le froid, tandis que la doublure en textile garde vos pieds bien au chaud. Un choix de style et de performance pour les amateurs de streetwear.</p>', true, 8, NULL),
('Tommy Hilfiger Femme Chaussures Semelles Compensées', 64.95, 'espadrilles.webp', '<p>Ces chaussures Tommy Hilfiger à semelles compensées ajoutent une touche d''élégance à votre garde-robe. Leur design raffiné et leur confort exceptionnel les rendent idéales pour les occasions décontractées ou formelles. Un accessoire de mode incontournable pour toute femme soucieuse de son style.</p>', true, 8, 1),
('Weber Barbecue à Charbon Compact Kettle 47cm', 70.95, 'bbq.webp', '<p>Le barbecue à charbon Weber Compact Kettle de 47 cm vous permet de profiter de délicieuses grillades avec un goût authentique. Sa conception compacte le rend parfait pour les petits espaces, tandis que sa grille en acier permet une cuisson uniforme. Un incontournable pour les amateurs de barbecue.</p>', false, 5, 2),
('Edihome, Kit Barbecue, Ustensiles Barbecue', 29.99, 'bbq-kit.webp', '<p>Le kit de barbecue professionnel Edihome comprend tous les ustensiles dont vous avez besoin pour réussir vos grillades. Fabriqué à partir de matériaux de haute qualité, il est conçu pour durer et résister à la chaleur intense. Idéal pour les barbecues en famille ou entre amis.</p>', true, 5, NULL),
('Kärcher Nettoyeur Haute Pression K 2 Universal Edition', 63.95, 'karcher.webp', '<p>Le nettoyeur haute pression Kärcher K 2 Universal Edition est l''outil parfait pour nettoyer les surfaces extérieures telles que les terrasses, les allées et les voitures. Sa pression puissante permet d''éliminer la saleté tenace rapidement et efficacement, tandis que sa conception compacte le rend facile à ranger.</p>', true, 5, NULL),
('BLACK+DECKER Tondeuse Filaire 1000W', 69.99, 'tondeuse.webp', '<p>La tondeuse filaire BLACK+DECKER de 1000W est équipée d''un puissant moteur et d''un bac de ramassage spacieux, offrant une solution pratique pour entretenir votre pelouse. Sa conception ergonomique et son faible poids facilitent sa maniabilité, même sur des terrains irréguliers.</p>', true, 5, NULL),
('BTFL Cody Surfskate 2024 Skateboard', 208.89, 'surfskate.webp', '<p>Le surfskate BTFL Cody 2024 combine les sensations du surf, du skateboard et du longboard. Idéal pour les riders en quête de fluidité et de maniabilité, ce surfskate permet de simuler les mouvements du surf sur le bitume. Parfait pour les amateurs de glisse urbaine ou de skateparks.</p>', false, 6, NULL),
('LEGO Star Wars Millennium Falcon', 69.99, 'lego.webp', '<p>Le LEGO Star Wars Millennium Falcon est un incontournable pour les fans de la saga Star Wars. Ce modèle détaillé permet de recréer le célèbre vaisseau de Han Solo avec des personnages emblématiques et des fonctionnalités interactives. Parfait pour les enfants et les collectionneurs.</p>', true, 6, NULL),
('WDK Partner- QUILLES Nordiques', 14.50, 'molki.webp', '<p>Le jeu de quilles nordiques est un jeu traditionnel en bois qui se joue en plein air. Ce jeu familial est parfait pour passer du temps à l''extérieur tout en développant vos compétences en précision et en stratégie. Facile à transporter et à installer, il convient à toutes les occasions.</p>', false, 6, NULL),
('Nerf Elite 2.0, Blaster motorisé Double Punch', 19.99, 'nerf.webp', '<p>Le blaster motorisé Nerf Elite 2.0 Double Punch offre une expérience de tir rapide et dynamique. Avec sa capacité de tir rapide et ses fléchettes en mousse, ce jouet garantit des heures de divertissement en toute sécurité. Idéal pour les batailles Nerf en intérieur ou en extérieur.</p>', true, 6, NULL),
('ZENAGAME Le Traquenard, Le Jeu Alcool', 19.99, 'traquenard.webp', '<p>Le Traquenard est un jeu d''alcool hilarant qui mettra à l''épreuve vos compétences sociales et votre endurance. Avec plus de 300 cartes variées, ce jeu est parfait pour animer vos soirées et créer des souvenirs inoubliables avec vos amis. Attention, ce jeu peut devenir extrêmement drôle et imprévisible.</p>', true, 6, NULL),
('Stellar Blade, Édition Standard, PlayStation 5', 60.90, 'blade.webp', '<p>Stellar Blade est un jeu d''action intense disponible sur PlayStation 5. Plongez dans une aventure épique où l''avenir de l''humanité repose sur le fil d''une épée. Avec ses graphismes époustouflants et ses combats dynamiques, Stellar Blade est une expérience incontournable pour tous les joueurs passionnés.</p>', true, 7, NULL),
('Sony, Manette sans fil DualSense™, PlayStation 5', 64.00, 'manette.webp', '<p>La manette sans fil DualSense™ de Sony pour PlayStation 5 offre une immersion inégalée grâce à son retour haptique et ses gâchettes adaptatives. Vivez une expérience de jeu plus riche et plus interactive avec des fonctionnalités qui répondent à chaque action dans vos jeux préférés.</p>', true, 7, 1),
('Nintendo Console Switch avec Joy-Con bleu néon', 266.09, 'switch.webp', '<p>La console Nintendo Switch est un incontournable pour les amateurs de jeux vidéo. Sa flexibilité unique permet de jouer en mode portable ou sur votre téléviseur. Livrée avec un Joy-Con bleu néon, elle vous offre une expérience de jeu fluide et captivante, que vous soyez seul ou entre amis.</p>', false, 7, NULL),
('The Legend of Zelda : Tears of the Kingdom', 51.49, 'zelda-totk.webp', '<p>The Legend of Zelda : Tears of the Kingdom est la suite tant attendue de l''aventure en monde ouvert de Breath of the Wild. Explorez de nouveaux royaumes, résolvez des énigmes et combattez des ennemis redoutables dans ce jeu qui repousse les limites de l''exploration et de l''aventure sur la Nintendo Switch.</p>', true, 7, NULL),
('Voice Content and Usability (English Edition)', 25.12, 'accessibilite.webp', '<p>"Voice Content and Usability" de Preston So est un guide essentiel pour les professionnels du design et du développement numérique. Ce livre couvre les meilleures pratiques pour créer des interfaces vocales accessibles et efficaces. Une ressource précieuse pour les développeurs et les designers UX/UI qui veulent maîtriser la conception vocale.</p>', false, 8, NULL),
('H2G2: L''intégrale de la trilogie en cinq volumes', 32.90, 'h2g2.webp', '<p>Découvrez l''intégrale de la série culte H2G2, écrite par Douglas Adams. Cette trilogie en cinq volumes est une œuvre de science-fiction humoristique incontournable, pleine de réflexions absurdes et de moments inoubliables. Idéal pour les fans de science-fiction et d''humour décalé.</p>', false, 8, NULL),
('Learning React: Modern Patterns for Developing React Apps', 55.77, 'react.webp', '<p>"Learning React" est un livre complet pour les développeurs souhaitant maîtriser les concepts modernes de React. De la création d''interfaces utilisateur réactives aux dernières nouveautés de l''écosystème React, ce livre est une référence indispensable pour tout développeur voulant devenir un expert en développement d''applications React.</p>', true, 8, 2);

INSERT INTO users (firstname, lastname, email, password, account_type) VALUES
('Bob', 'Dupont', 'j.dupont@example.com', 'password123', 'entreprise'),
('Marie', 'Leblanc', 'm.leblanc@example.com', 'securepass456', 'private'),
('Charles', 'Pierre', 'c.pierre@example.com', 'mypassword789', 'private');

INSERT INTO user_products (user_id, product_id, created_at) VALUES
(1, 1, CURRENT_TIMESTAMP),
(1, 4, CURRENT_TIMESTAMP), 
(1, 5, CURRENT_TIMESTAMP); 

INSERT INTO carts (user_id, product_id, quantity, created_at, updated_at) VALUES
(1, 1, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP), 
(2, 3, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP), 
(3, 4, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP); 

COMMIT;
