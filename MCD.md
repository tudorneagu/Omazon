# Modèle Conceptuel de Données (MCD)

## Entités principales et leurs attributs :

### 1. Categories
- `id` (clé primaire)
- `title`
- `slug`
- `image`

### 2. Tags
- `id` (clé primaire)
- `type`
- `text`

### 3. Products
- `id` (clé primaire)
- `title`
- `price`
- `image`
- `description`
- `inStock`
- `category_id` (clé étrangère, référence à `Categories`)
- `tag_id` (clé étrangère, référence à `Tags`)
- `user_id` (clé étrangère, référence à `Users`)

### 4. Users
- `id` (clé primaire)
- `firstname`
- `lastname`
- `email` (unique)
- `password`
- `account_type`

### 5. User_Products (table associative pour relier les **Users** aux **Products** achetés ou vus)
- `user_id` (clé étrangère, référence à `Users`)
- `product_id` (clé étrangère, référence à `Products`)
- `created_at`

### 6. Carts (panier d’achats)
- `id` (clé primaire)
- `user_id` (clé étrangère, référence à `Users`)
- `product_id` (clé étrangère, référence à `Products`)
- `quantity`
- `created_at`
- `updated_at`

## Relations et cardinalités :
- **Categories** (1,N) ↔ **Products** : Une catégorie peut contenir plusieurs produits.
- **Tags** (1,N) ↔ **Products** : Un tag peut être associé à plusieurs produits.
- **Users** (1,N) ↔ **Carts** : Un utilisateur peut avoir plusieurs articles dans son panier.
- **Products** (N,1) ↔ **User_Products** ↔ **Users** : Un produit est créé par un utilisateur, et un utilisateur peut créer plusieurs produits.

## Modélisation textuelle :
- **Categories** (1,N) ↔ **Products**
- **Tags** (1,N) ↔ **Products**
- **Users** (1,N) ↔ **Carts**
- **Products** (N,1) ↔ **User_Products** ↔ **Users**
