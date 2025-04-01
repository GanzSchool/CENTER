## Sziasztok,  
**az erő legyen veletek!** 💪✨  

A mai órán az alábbi lesz a dolgotok — **ha András bá máshogy nem rendelkezik**, akkor így haladjatok.

---

### 🔗 Projekt linkje

A lenti linken találjátok a projektet.  
Ez már egy **combosabb feladat**, de **semmi gond**, ha elsőre nem is érted, mi történik — **közösen meg fogjuk nézni!**

A link egy **README** fájlra vezet, ami tartalmazza a projekt teljes leírását.

---

### 🗂 Projekt mappaszerkezete

A mappastruktúra bemutatja, hogy az egyes fájlok hol helyezkednek el:

- Két fájl van a **gyökérmappában**  
- Hét fájl van a **public** mappában

Azért van külön a `public` mappa, mert **a szerver innen szolgálja ki az információkat**.

---

### ✅ Első feladat

Hozzátok létre a projektet **úgy**, hogy azt később is elő tudjátok hívni — mivel **több órán keresztül** fogunk vele foglalkozni!

---

### 🔧 Funkciók és működés

- A `server.js` tartalmazza a szerver szolgáltatásait: **törlés, módosítás, létrehozás stb.**
- **A belső működésével nem kell törődnöd**, az most nem az anyag része.
- Ami viszont **igenis fontos**: **hogyan érjük el a szerver szolgáltatásait**?

👉 Ezeket **végpontoknak** (endpoint) hívjuk.

Például:  
Ha szeretnéd elérni a regisztrációs szolgáltatást, akkor a fetch hívásod végpontja így fog kinézni:  
`"/api/auth/register"`

A `POST`, `GET` stb. csak azt jelölik, hogy **milyen típusú kérést küldünk**. Erről élőben még beszélünk!

---

### 🔄 Adatforgalom (fetch hívások)

A fájlok egymással és a szerverrel **fetch** hívásokon keresztül kommunikálnak.  
Ezekről egy összefoglaló táblázat is található a dokumentációban.

---

### 📄 Projektfájlok

A lényeg, hogy a projekt fájljaiban lévő kódokat **szépen bemásolod** a saját fájljaidba, egyesével.

A közös munka a következő fájlokkal fog indulni:

- `login.js`
- `register.js`
- `dashboard.js`

Nagyon örülnék, ha **legalább a `login.js`-t meg tudnád írni**! 😎

---

### 🛠 NODE környezet kialakítása

Ez segít a szerver futtatásához szükséges környezet kialakításában.  
**Csak akkor add ki a parancsokat**, amikor már kész vagy a JavaScript fájlokkal!

Előfordulhat, hogy a szerkesztőd automatikusan beszúr import sorokat a fájlok tetejére — **ezeket nyugodtan töröld ki.**

---

## ✍️ `login.js` – HOW TO

Ez egy **barátságos szimuláció** arra, hogyan működik egy egyszerű felhasználói bejelentkezés.

💡 **Fontos:** Ez egy „butuska” változat – a való életben **jelszó-hashelés** és **tokenizálás** is lenne, de hagyjunk valamit az év végére is! 😉

### Lépések:

1. **Eseménykezelő** létrehozása → rákötjük a gombra
2. **Input értékek bekérése** → elmentjük őket egy objektumba
3. **Fetch hívás** küldése POST módszerrel → ez már ismerős

Ami újdonság:

➡️ A **szerver válasza** egy objektum lesz, aminek két kulcsa van:
- `success`: logikai érték (`true` vagy `false`)
- `message`: szöveg (pl. `"Login oké"` vagy `"Nem oké"`)

### 🎯 Feladat:

Írj egy **feltételes elágazást**:

- Ha `result.success` az igaz (ez akkor is true tud lennei ha nem így csinálod: result.success === true), akkor:
  - jelenítsd meg a `result.message` értékét
  - majd irány a dashboard oldal:  
    `window.location.href = "dashboard.html";`

---

**Ennyi lenne a mai competition** 😄  
Sok sikert, és bátran kérdezz, ha elakadsz!
