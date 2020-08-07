# vivid-entry

Angular based interview entry task.

Client generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5. and so on.

- client: `cd client`, then `npm start` for a [dev server](http://localhost:4200/).
- server: `cd server`, then `ACCESS_TOKEN=token npm start`, you can also use `server/.env` for the env var.

Original description follows.

---

## Film DB App

Az applikációval kereshetsz filmeket és összeállíthatod a saját watch list-edet.
A filmekhez sok hasznos információt is megjelenít a felhasználónak.

Használható a [MoviesDB API](https://developers.themoviedb.org/3).

### User Story-k

1. [ ] A felhasználó a főoldalon látja az összes új filmet
2. [ ] A felhasználó a főoldalon lefelé görgetve release date alapján látja a filmeket
3. [ ] A felhasználó el tud menteni “watch list”-et azokból a filmekből amelyeket meg szeretne nézni
4. [ ] A felhasználó rákattinthat bármelyik filmre és tovább navigál a film oldalára (details page)
5. [ ] Egy adott film oldalán a felhasználó látja a film részletes adatait: film leírás, rating, színészek, review-k.

### Bónusz feature-ök

1. [ ] A felhasználó létre tud hozni saját fiókot
2. [ ] A felhasználó saját watch list-et tud létrehozni
3. [ ] A felhasználó tud filmhez review-t létrehozni
