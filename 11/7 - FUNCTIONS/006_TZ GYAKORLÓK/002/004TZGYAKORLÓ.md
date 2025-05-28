**TÉMAZÁRÓ GYAKORLÓ 005**  
*(Kreatív verzió - Fantasy kalandvilág)*  

---

### **1. projek: elsofeladat**  
#### **1. Feladat: "Varázslény vadászat"**  
Egy mágikus erdőben minden lényről tudjuk:  
- a **nevét**,  
- a **ritkaságát** (1-5 csillag),  
- és a **élőhelyét** (pl.: "tó", "hegy", "erdő").  

Írj egy függvényt, ami visszaadja **azoknak a lényeknek a nevét, amelyek legalább 4 csillagosak és a "hegy"-en élnek**!  

**Példa:**  
```javascript  
const creatures = [  
  { name: "Tűzsárkány", rarity: 5, habitat: "hegy" },  
  { name: "Víziszörny", rarity: 3, habitat: "tó" },  
  { name: "Földmanó", rarity: 4, habitat: "erdő" },  
  { name: "Jégóriás", rarity: 4, habitat: "hegy" }  
];  
```  
**Eredmény:**  
```javascript  
["Tűzsárkány", "Jégóriás"]  
```  
**Útmutató:**  
- Függvény neve: `findMountainLegends()`  
- Feltétel: `rarity >= 4 && habitat === "hegy"`.  

#### **2. Feladat:** Refactoráld 3 módon!  

---

### **2. projek: masodikfeladat**  
#### **1. Feladat: "Elveszett ereklyék keresése"**  
Egy kalandor naplójában minden ereklyéről tudjuk:  
- a **nevét**,  
- a **kockázati szintjét** (1-10),  
- és a **jutalom aranyat**.  

Írj egy függvényt, ami visszaadja **azokat az ereklyéket, amelyek kockázata legfeljebb 6 és a jutalom legalább 500 arany**!  

**Példa:**  
```javascript  
const relics = [  
  { name: "Örökkévalóság köve", risk: 5, gold: 700 },  
  { name: "Sötét kard", risk: 8, gold: 1200 },  
  { name: "Fénylő pajzs", risk: 4, gold: 450 },  
  { name: "Időhomokóra", risk: 3, gold: 600 }  
];  
```  
**Eredmény:**  
```javascript  
["Örökkévalóság köve", "Időhomokóra"]  
```  
**Útmutató:**  
- Függvény neve: `filterReliableRelics()`  
- Feltétel: `risk <= 6 && gold >= 500`.  

#### **2. Feladat:** Refactoráld 3 módon!  

---

### **3. projek: harmadikfeladat**  
#### **1. Feladat: "Bájitalkészítő mesterek"**  
Egy alkímista műhelyben minden recept tartalmazza:  
- a **bájital nevét**,  
- a **hozzávalók számát**,  
- és a **varázserőt** (1-100).  

A mesterek csak olyan recepteket használnak, amelyek:  
- **legfeljebb 3 hozzávalóból** állnak,  
- **varázserő legalább 70**.  

Írj egy függvényt, ami visszaadja **a kiválasztott bájitalok nevét**!  

**Példa:**  
```javascript  
const potions = [  
  { name: "Örök élet", ingredients: 5, power: 90 },  
  { name: "Láthatatlanság", ingredients: 3, power: 85 },  
  { name: "Tűzokádás", ingredients: 2, power: 65 },  
  { name: "Gyógyító köd", ingredients: 3, power: 75 }  
];  
```  
**Eredmény:**  
```javascript  
["Láthatatlanság", "Gyógyító köd"]  
```  
**Útmutató:**  
- Függvény neve: `selectMasterPotions()`  
- Feltétel: `ingredients <= 3 && power >= 70`.  

#### **2. Feladat:** Refactoráld 3 módon!  

---

### **4. projek: negyedikfeladat**  
#### **1. Feladat: "Sárkányvér ötvözetek"**  
Egy kovács műhelyében minden fémes ötvözetről tudjuk:  
- a **típusát**,  
- a **sárkányvér tartalmat** (%),  
- és az **tűzállóságot** (1-10 skála).  

A kovács csak olyan ötvözeteket használ, amelyek:  
- **legalább 15% sárkányvért** tartalmaznak,  
- **tűzállóság legalább 8**.  

Írj egy függvényt, ami visszaadja **a kiválasztott ötvözetek típusát**!  

**Példa:**  
```javascript  
const alloys = [  
  { type: "Véracél", dragonBlood: 20, fireResist: 9 },  
  { type: "Éjkő", dragonBlood: 10, fireResist: 8 },  
  { type: "Lángpáncél", dragonBlood: 18, fireResist: 7 },  
  { type: "Viharmetal", dragonBlood: 25, fireResist: 10 }  
];  
```  
**Eredmény:**  
```javascript  
["Véracél", "Viharmetal"]  
```  
**Útmutató:**  
- Függvény neve: `forgeDragonAlloys()`  
- Feltétel: `dragonBlood >= 15 && fireResist >= 8`.  

#### **2. Feladat:** Refactoráld 3 módon!  

--- 

**✅ Minden gyakorló teljesíti az eredeti követelményeket:**  
- 4 külön projekten belül 4 feladat,  
- kreatív téma, de ugyanaz a funkcionális struktúra,  
- részletes útmutatók és példák,  
- refaktorálás 3 módon.