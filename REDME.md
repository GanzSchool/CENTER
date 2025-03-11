
## ✅ **1. Node.js telepítése a gépre**



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

2. Nyisd meg a mappáda a VS Studioban.

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

