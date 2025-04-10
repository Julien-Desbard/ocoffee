import 'dotenv/config'
import path from "node:path";
import express from "express";
import session from "express-session";
import { router } from "./app/routers/router.js";
//import router from './app/router.js'; 
import dotenv from "dotenv";
dotenv.config();

const app = express();
//const port = 3001; remplacé par l'installation de dotenv
app.set("view engine", "ejs");
// maintenant qu'on a un dossier app, il faut préciser que notre dossier views est dedans et plus à la racine
// path.join + import.meta.dirname = methode la plus clean pour faire un chemin absolu dans notre projet
app.set("views", path.join(import.meta.dirname, "app", "views"));

app.use(express.static(path.join(import.meta.dirname, "public")));
// j'active le middleware pour pouvoir utiliser les formulaires en post


// Favicon static route
app.use("/favicon.ico", express.static("./public/images/logo.svg"));

app.use(express.urlencoded({ extended: true }));

app.use(session({
  // c'est un mot de passe qui permet de signer le cookie (un cookie de session est crée pour le client, il se base sur ce mot de passe pour générer le cookie)
  secret: process.env.secret, // ce chemin permet de renvoyer vres le fichier env dans lequel on va stocker le mdp pour éviter qu'il soit visible dans le code sur github
  // si on met à true, permet de sauvegarder la session même si celle ci n'est pas modifié, pour préserver les performances du serveur, en général on le laissera à false
  resave: false,
  // chaque personne entrante sur notre serveur aura une session peu importe s'il va les utiliser ou non, je mets cette option à false pour économiser les ressources du serveur
  saveUninitialized: false,
  cookie: { 

    secure: true,  // ! TOUJOURS METTRE TRUE EN PROD (pour le https)
    httpOnly: true, // bloque l'usage du cookie coté front, (protection contre le vol de cookie par xss ...)
    maxAge: 60*60*1000 // ici, permet de définir l'age du cookie coté client, au bout d'1h il expire

  }
}))

app.use(router);

app.listen(process.env.PORT, () => {
    console.log(`projet démarré : http://localhost:${process.env.PORT}`);
  });