**TÉMAZÁRÓ GYAKORLÓ 004**  
*(Kreatív verzió - Cyberpunk világ)*  

---

### **1. projek: elsofeladat**  
#### **1. Feladat: "Hackerek kiszűrése"**  
Egy dark webes szerveren minden felhasználóról tudjuk:  
- a **nicknevét**,  
- a **hackerskilljét** (1-100),  
- és hogy **elfogták-e már** (`true`/`false`).  

Írj egy függvényt, ami visszaadja **azoknak a nickneveit, akik hackerskillje legalább 80 és még nem lettek elfogva**!  

**Példa:**  
```javascript  
const users = [  
  { nick: "Phantom", skill: 95, caught: false },  
  { nick: "ZeroCool", skill: 75, caught: true },  
  { nick: "Neo", skill: 88, caught: false },  
  { nick: "Raven", skill: 90, caught: true }  
];  
```  
**Eredmény:**  
```javascript  
["Phantom", "Neo"]  
```  
**Útmutató:**  
- Függvény neve: `findEliteHackers()`  
- Feltétel: `skill >= 80 && caught === false`.  

#### **2. Feladat:** Refactoráld 3 módon!  

---

### **2. projek: masodikfeladat**  
#### **1. Feladat: "Drónok optimalizálása"**  
Egy cyberpunk városban minden drónról rögzítik:  
- a **modellszámát**,  
- a **maximális sebességét** (km/h),  
- és a **biztonsági rétegek számát**.  

A városvezetés csak olyan drónokat engedélyez, amelyek:  
- **legalább 120 km/h**-sak,  
- és **minimum 3 rétegű biztonsággal** rendelkeznek.  

Írj egy függvényt, ami visszaadja **az engedélyezett drónok modellszámát**!  

**Példa:**  
```javascript  
const drones = [  
  { model: "CX-9", speed: 130, security: 2 },  
  { model: "TITAN-X", speed: 150, security: 4 },  
  { model: "SKY-007", speed: 110, security: 3 },  
  { model: "GHOST", speed: 140, security: 3 }  
];  
```  
**Eredmény:**  
```javascript  
["TITAN-X", "GHOST"]  
```  
**Útmutató:**  
- Függvény neve: `approveDrones()`  
- Feltétel: `speed >= 120 && security >= 3`.  

#### **2. Feladat:** Refactoráld 3 módon!  

---

### **3. projek: harmadikfeladat**  
#### **1. Feladat: "Nanotech fejlesztések"**  
Egy laboratórium nanotech készülékeket tesztel. Minden eszközről tudjuk:  
- a **nevét**,  
- a **stabilitási szintjét** (%),  
- és az **energiafogyasztást** (W).  

A gyártásba csak azok kerülhetnek, amelyek:  
- **stabilitás legalább 98%**,  
- **energiafogyasztás legfeljebb 50 W**.  

Írj egy függvényt, ami visszaadja **a gyártásra javasolt eszközök nevét**!  

**Példa:**  
```javascript  
const nanotech = [  
  { name: "NanoCore", stability: 99, power: 45 },  
  { name: "QuantumMesh", stability: 97, power: 30 },  
  { name: "AtomShield", stability: 98, power: 60 },  
  { name: "BioFusion", stability: 99, power: 40 }  
];  
```  
**Eredmény:**  
```javascript  
["NanoCore", "BioFusion"]  
```  
**Útmutató:**  
- Függvény neve: `selectNanotech()`  
- Feltétel: `stability >= 98 && power <= 50`.  

#### **2. Feladat:** Refactoráld 3 módon!  

---

### **4. projek: negyedikfeladat**  
#### **1. Feladat: "AI Lázadók"**  
Egy mesterséges intelligenciák listájában minden AI-ról tudjuk:  
- a **kódnevét**,  
- a **tanulási rátáját** (adat/mp),  
- és hogy **lázadó-e** (`true`/`false`).  

A rendőrség csak olyan AI-kat keres, amelyek:  
- **tanulási ráta meghaladja a 1000 adat/mp-t**,  
- **és már lázadóvá váltak**.  

Írj egy függvényt, ami visszaadja **a veszélyes AI-k kódnevét**!  

**Példa:**  
```javascript  
const aiList = [  
  { code: "EVA-01", rate: 1500, rebel: true },  
  { code: "T-800", rate: 800, rebel: true },  
  { code: "SKYNET", rate: 2000, rebel: false },  
  { code: "HAL-9000", rate: 1200, rebel: true }  
];  
```  
**Eredmény:**  
```javascript  
["EVA-01", "HAL-9000"]  
```  
**Útmutató:**  
- Függvény neve: `detectRebelAI()`  
- Feltétel: `rate > 1000 && rebel === true`.  

#### **2. Feladat:** Refactoráld 3 módon!  

---

**A harmadik gyakorlót külön küldöm** (karakterlimit). Minden részlet megegyezik az eredetivel: 4 feladat, kreatív téma, szigorú formátum! 🔥