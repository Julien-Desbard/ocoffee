

DROP TABLE IF EXISTS "cafe";

-- INstallation de unaccent pour virer les accent le cas échéant

CREATE EXTENSION IF NOT EXISTS unaccent;

-- Création des tables
CREATE TABLE "cafe" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "nom" TEXT NOT NULL,
    "describe" TEXT NOT NULL,
    "ref" INTEGER NOT NULL,
    "origine" TEXT NOT NULL,
    "prix" DECIMAL(10, 2) NOT NULL,
    "caracteristiques" TEXT NOT NULL,
    "disponible" TEXT NOT NULL
);

-- gemini

INSERT INTO cafe (nom, describe, ref, origine, prix, caracteristiques, disponible) VALUES
('Espresso','Café fort et concentré préparé en faisant passer de l''eau chaude à travers du café finement moulu.',100955890,'Italie',20.99,'Corsé','Oui' ),
('Columbian','Café moyennement corsé avec une acidité vive et une saveur riche.',100955894,'Colombie',18.75,'Acide','Oui' ),
('Ethiopian_Yirgacheffe','Réputé pour son arôme floral, son acidité vive et ses notes de saveur citronnée.',105589090,'Éthiopie',22.50,'Fruité','Oui' ),
('Brazilian_Santos','Café doux et lisse avec un profil de saveur de noisette.',134009550,'Brésil',17.80,'Doux','Oui' ),
('Guatemalan_Antigua','Café corsé avec des nuances chocolatées et une pointe d''épice.',256505890,'Guatemala',21.25,'Corsé','Oui' ),
('Kenyan_AA','Café complexe connu pour son acidité rappelant le vin et ses saveurs fruitées.',295432730,'Kenya',23.70,'Acide','Oui' ),
('Sumatra_Mandheling','Café profond et terreux avec un corps lourd et une faible acidité.',302932754,'Indonésie',19.95,'Corsé','Oui' ),
('Costa_Rican_Tarrazu','Café vif et net avec une finition propre et une acidité vive.',327302954,'Costa Rica',24.50,'Acide','Oui' ),
('Vietnamese_Robusta','Café audacieux et fort avec une saveur robuste distinctive.',549549090,'Vietnam',16.75,'Épicé','Oui' ),
('Tanzanian_Peaberry','Acidité vive avec un profil de saveur rappelant le vin et un corps moyen.',582954954,'Tanzanie',26.80,'Fruité','Oui' ),
('Jamaican_Blue_Mountain','Reconnu pour sa saveur douce, son acidité vive et son absence d''amertume.',589100954,'Jamaïque',39.25,'Doux','Oui' ),
('Rwandan_Bourbon','Café avec des notes florales prononcées, une acidité vive et un corps moyen.',650753915,'Rwanda',21.90,'Fruité','Oui' ),
('Panamanian_Geisha','Café rare aux arômes floraux complexes, une acidité brillante et un profil de saveur distinctif.',795501340,'Panama',42.00,'Fruité','Oui' ),
('Peruvian_Arabica','Café équilibré avec des notes de chocolat, une acidité modérée et un corps velouté.',954589100,'Pérou',19.40,'Chocolaté','Non' ),
('Hawaiian_Kona','Café rare au goût riche, une acidité douce et des nuances subtiles.',958090105,'Hawaï',55.75,'Doux','Non' ),
('Nicaraguan_Maragogipe','Café avec des notes de fruits, une acidité vive et un corps plein.',691550753,'Nicaragua',28.60,'Fruité','Non' );