# Állítsuk be azt az elérési utat, ahol az "a.txt" fájl található.
# Ha a script és a txt file ugyanabban a mappában vannak, akkor a következő elérési út megfelelő lesz:
$txtFile = ".\a.txt"

# Ellenőrizzük, hogy létezik-e a txt file
if (-Not (Test-Path $txtFile)) {
    Write-Output "Nem található az a.txt fájl: $txtFile"
    exit
}

# Beolvassuk az a.txt fájl tartalmát, minden sort külön elemként
$lines = Get-Content -Path $txtFile

foreach ($line in $lines) {
    # Üres sorokat kihagyunk
    if ([string]::IsNullOrWhiteSpace($line)) {
        continue
    }
    
    # Sor feldarabolása a ';' karakter alapján
    $parts = $line -split ';'
    if ($parts.Count -ne 2) {
        Write-Output "Hibás formátum a következő sorban: $line"
        continue
    }
    
    # Levágjuk a szóközöket a két mezőből
    $searchFolder = $parts[0].Trim()
    $newFolderName = $parts[1].Trim()
    
    # Ha a new folder name kifejezésként van megadva a $env:USERNAME szintaxisával, értékeljük ki
    if ($newFolderName -eq '$env:USERNAME') {
        $newFolderName = $env:USERNAME
    }
    
    # Ellenőrizzük, hogy a keresendő mappa létezik-e
    if (Test-Path $searchFolder) {
        # Összeállítjuk az új mappa elérési útját
        $targetFolder = Join-Path -Path $searchFolder -ChildPath $newFolderName
        
        # Ha az adott mappa még nem létezik, létrehozzuk
        if (-not (Test-Path $targetFolder)) {
            New-Item -ItemType Directory -Path $targetFolder | Out-Null
            Write-Output "Létrehozva: $targetFolder"
        }
        else {
            Write-Output "Már létezik: $targetFolder"
        }
    }
    else {
        Write-Output "Nem található a keresendő mappa: $searchFolder"
    }
}
