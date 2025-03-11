# === Fájl: convert-link.ps1 ===

# Bekéri a felhasználótól a GitHub mappa linket
$link = Read-Host "Illeszd be a GitHub mappa linket (commit hash-es)"

# Alapértelmezett branch
$defaultBranch = "main"

# Rákérdez, hogy más branch-et akarsz-e (Enter = main)
$branchInput = Read-Host "Add meg a branch nevét (nyomj Enter-t a main-hez)"
if ([string]::IsNullOrWhiteSpace($branchInput)) {
    $branch = $defaultBranch
} else {
    $branch = $branchInput
}

# Ellenőrzéshez kiírjuk a bemeneteket
Write-Host "Eredeti link: $link"
Write-Host "Használandó branch: $branch"

# Kivágjuk a https://github.com/ résztől a mappáig tartó részt
# Kicseréljük a commit hash részt a branch névre

# Regex, hogy megtaláljuk az elejét és a commit hash-t
if ($link -match 'https://github\.com/([^/]+/[^/]+)/tree/[^/]+/(.+)') {
    $repo = $matches[1]  # pl.: GanzSchool/CENTER
    $path = $matches[2]  # pl.: 12/ÓRAI MUNKA/...

    # URL encode a path (szóközök, ékezetek kezelése)
    $escapedPath = [System.Uri]::EscapeUriString($path)

    # Végső link
    $finalLink = "https://download-directory.github.io/?url=https://github.com/$repo/tree/$branch/$escapedPath"

    # Szép dobozkás link
    $boxLink = "[DOWNLOAD PROJEKT FILE IN ZIP]($finalLink)"

    # KIÍRÁS CSAK KÉPERNYŐRE (NEM fájlba)
    Write-Host "`n✅ Generált dobozkás link:"
    Write-Host "`n$boxLink`n"
} else {
    Write-Host "❌ Hibás link formátum! Kérlek, ellenőrizd a bemásolt linket."
}
