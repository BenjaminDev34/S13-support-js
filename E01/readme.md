# E01 - sécurité

## Challenges

- __Du soir__ : pas de Challenges
- __De la veille__ : début de saison

### BRIEF sur la saison à venir

- fetch / ajax
- connecter le front et le back
- bulma
- ...

### déroulé les slides sécu 

**Durée** : 1h30  

**Slides** : [Sécurité](https://docs.google.com/presentation/d/1NWHEuBUtKVWrtsNYiooMfpLsecnJEhhElEw7UoKLX_c/edit#slide=id.g12c98aa60a6_0_135)

### XSS - game jusqu'au lvl 2

[lien](https://xss-game.appspot.com/level1)
- montrer un exemple sur okanban en faisant un post malveillant
- tester sur un front avec un simple fetch
- parler des **cors**
- XSS sur okanban
  - ATTENTION innerHTML bloque les balises scripts
  - passer par img onerror
  - SOLUTION
    - XSS = front
    - SANITIZE pour éviter que nimporte quoi parte en bdd

### injection SQL

[exemple](https://www.hacksplaining.com/lessons)

### Odomac EXERCICE

**Laisser du temps pour leur faire faire un audit des différentes failles** 
- audit des problemes
- OWASP correspondance

### Les soucis 

**deprecated + vulnérabilités modules + poweredBy** *A05*
- npm audit 
- npm audit fix
- on a toujours un deprecated dans la console via sqlite -> copier coller l'erreur dans google et corriger via la syntaxe trouver dans une issue (dialect)

- ne pas donner d'informations techniques : ajouter `app.disable('x-powered-by');` dans `index.ts` pour désactive l'info sur le serveur

- la sécurity key des sessions est en clair, à déplacer dans le fichier .env et installer dotenv


**Accès à des pages avec privilèges sans connexion** *A01*

Les pages protégés ne le sont pas vraiment, middleware à coder : 

```js
module.exports.isAuthed = (req, res, next) => {
    if(req.session.user) {
        next();
    } else {
        res.redirect('/login');
    }
};
```

**Erreur de cryptographie** *A02*

La partie hashage utilise le md5, on a vu tout à l'heure que c'était vraiment pas ouf

- changer md5 par argon2
- désinstaller le module qui ne sert à rien (important owasp)
- mettre en place l'auth avec argon2
- vérifier que tout marche bien
  
**XSS sur le form du golden-book** *A03*

- ajouter simplement un = à la place du - dans le ejs

**CSRF** *A07*

- montrer ce qu'est le csrf en faisant un form qui utilise l'url du goldenBook en post et les droits d'un user connecté
- comment s'en prémunir ? 
- mettre en place un token csrf avec le module csrf

**AUTRE possibilités ?** 

On pourrait par exemple limité le nombre de requêtes -> rate-limit-express
...