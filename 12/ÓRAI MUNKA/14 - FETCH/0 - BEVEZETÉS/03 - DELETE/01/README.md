
## 1. Projekt létrehozása

> Töltsd le egyenként a kódokat és helyezd el az alábbiak szerint:

```pgsql
projekt mappád neve/
├── pizza.json
├── server.js
└── public/
    ├── index.html
    ├── script.js
    └── style.css
```



---


## ✅ **2. Node.js környezet inicializálása a projekt mappában (package.json létrehozása)**

**FONTOS**
> hogy véletlenül se a public-ba csináld, mindenképp a györkében legyél és onnan add ki a parancsokat!

```pgsql
projekt mappád neve/  < ---- EZ A GYÖKÉR MAPPA
├── pizza.json    
├── server.js   
└── public/
    ├── index.html
    ├── script.js
    └── style.css
```

Ezzel a paranccsal létrehozod a **package.json** fájlt, ami nyilvántartja a projekt csomagjait, verzióját stb.:

```bash
npm init -y
```

> Az `-y` automatikusan elfogadja az alapértelmezett beállításokat (később szerkesztheted a fájlt).

**Eredmény:** Létrejön a `package.json` fájl a mappában.

---

## ✅ **3. Függőségek (npm csomagok) telepítése a projektbe**


```bash
npm install express
```

Ez létrehoz egy `node_modules` mappát (itt lesznek a csomagok) és a `package-lock.json` fájlt.

---

## ✅ **4. Server futtatása**


```bash
node server.js
```

**Kimenet:**

```
A szerver fut az valahanyas porton!
```

