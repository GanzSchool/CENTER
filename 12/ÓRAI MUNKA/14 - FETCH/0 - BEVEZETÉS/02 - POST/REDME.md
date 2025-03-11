
## Projekt mappa Letöltése
FONTOS, HA LINKRE KATTINTASZ, FOGD A CTRL BILLENTYŰT!

[DOWNLOAD PROJEKT FILE IN ZIP](https://download-directory.github.io/?url=https://github.com/GanzSchool/CENTER/tree/main/12/%25C3%2593RAI%2520MUNKA/14%2520-%2520FETCH/0%2520-%2520BEVEZET%25C3%2589S/02%2520-%2520POST)

## ✅ **1. Node.js telepítése a gépre**

- .msi-t töltsd le

- Menj a hivatalos oldalra:  

> https://nodejs.org/en/download
   


- Telepítés után ellenőrizd a sikerességet simán parancssorban:

```bash
node -v
npm -v
```



---

## ✅ **2. Projekt mappa létrehozása**

1. Hozz létre egy mappát. Fontos, hogy a projekt mappában ne legyen ékezet, mert az `npm` nem támogatja az ékezeteket!

- Pl.: `projektem`

2. Nyisd meg a mappádat a VS Codeban.

- Menj a projekt mappád nevére és jobb clickkel: **Open in itegrated Terminal**

3. Ellenőrizd, hogy tényleg ott vagy:

```bash
pwd  # PowerShell
```

vagy

```bash
cd  # CMD
```

---

## ✅ **3. Node.js környezet inicializálása a projekt mappában (package.json létrehozása)**

Ezzel a paranccsal létrehozod a **package.json** fájlt, ami nyilvántartja a projekt csomagjait, verzióját stb.:

```bash
npm init -y
```

> Az `-y` automatikusan elfogadja az alapértelmezett beállításokat (később szerkesztheted a fájlt).

**Eredmény:** Létrejön a `package.json` fájl a mappában.

---

## ✅ **4. Függőségek (npm csomagok) telepítése a projektbe**


```bash
npm install express
```

Ez létrehoz egy `node_modules` mappát (itt lesznek a csomagok) és a `package-lock.json` fájlt.

---

## ✅ **5. Server futtatása**


```bash
node server.js
```

**Kimenet:**

```
A szerver fut az 3000 valahanyas porton!
```

