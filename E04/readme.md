# E04 - sécurité

## Challenges

- __Du soir__ : [lien](https://github.com/O-clock-FS-JS/okanban/blob/main/docs/challenges/C07.md)
- __De la veille__ : [lien](https://github.com/O-clock-FS-JS/okanban/blob/main/docs/challenges/C08.md)

### Correction

corriger la partie 
- modifier
- delete

### bundler vite

- installer bulma toast
- expliquer à quoi sert un bundler
- installer vite via la doc
- lancer un serveur de dev
- faire marcher bulma
- builder des fichiers de prods
- attention aux chemins, paramétrer vite config
- attention base ./ sera necessaire tantu que je passe par node

### mono repo
- faire un seul repo à partir du repo back
- retirer les .git
- retirer les docs inutiles
- laisser le back à la racine du projet
- mettre le code front dans un dossier client
- Ajouter un script (back) npm run postinstall pour automatiquement installer les dependances front lors du npm install du back : "postinstall": "npm install --prefix client"
- Ajouter un script npm run build dans le backend pour lancer le npm run build du client: "build": "npm run build --prefix client" (le script doit être présent sur le package du client)
- Ajouter le dossier dist au .gitignore et au eslint.config.js
- Servir le "code front" sur la route / du backend ! avec sendFile et le middleware static
- On rajoute une variable d'environnement VITE_API_BASE_URL dans le .env (back) afin que le client de Mme Michu qui consulte notre site puisse trouver l'adresse de l'API.
    - Lorsqu'on génère le dossier dist, Vite ira chercher la variable pour la mettre dans le bundle à condition :
   - d'utiliser import.meta.env.VITE_API_BASE_URL
   - plus besoin de base dans le fichier de config vite



