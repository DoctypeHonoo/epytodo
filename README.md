<p align="center">
  <img src="https://user-images.githubusercontent.com/91092610/174886469-da089e92-588e-46c5-b7cc-76bd9b7e769a.png"/>
</p>
<h1 align="center">
   EpyTodo
</h1>

---

## Motivation : 

L'**EpyTodo** est un projet web de fin d'année à Epitech, devant se réaliser en duo. L'objectif du projet est de réalisé une TODO Liste en créant une api. Le projet se base uniquement sur le backend, le frontend étant considéré comme un bonus.

---

## Description :

Le projet se sépare en deux principales parties : 
- Créer une base de données MySQL
- Créer un serveur web utilisant Node.js

La première étape va donc être de créer une base de données "epytodo" qui va elle même contenir 2 tables qui vont petre utile par la suite, à savoir, une table *user*, et une table *todo*.
La table user contiendra les fields suivants : id, email, password, name, firstname et created_at.
La table todo quand à elle disposera des fields : id, title, description, created_at, due_time, status et user_id.
---

## Fonctions Autorisées : 

- Toutes, il s'agit d'un projets en javascript.

---

## Installer & Lancer le Projet :

Ouvrez un terminal et dirigez vous ou vous souhaitez que le projet soit installé, puis exécutez les commandes suivantes : 
```bash
$ git clone git@github.com:DoctypeHonoo/epytodo.git
$ cd epytodo
```
Etant donné que le projet n'est pas en C, le lancement du programme se fera comme ceci :
```bash
$ node src/index.js
```

---

## Comment l'utiliser ? : 

