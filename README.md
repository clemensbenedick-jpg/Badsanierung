# Badsanierungs-App

Eine Progressive Web App (PWA) für die Planung und Dokumentation von Badsanierungsprojekten. Funktioniert auf Desktop, Tablet und Smartphone, auch offline.

## Funktionen

- **Checkliste** mit 11 Positionen (WC-Modul, Waschbecken, Duschtasse, Duscharmatur, Montagerahmen, Badewanne, Wannenarmatur, Rohrleitungen, Bauschutt, Stunden, Fahrzeug)
- **Grundriss-Editor** mit maßstabsgetreuer Symbol-Platzierung (WC, Waschbecken, Wanne, Dusche, Bidet, Schrank, Waschmaschine, Tür)
- **Mehrere Projekte** parallel verwalten
- **PDF-Export / Drucken** mit Grundriss und allen Daten
- **JSON-Export / -Import** für Backup oder Übergabe ans Büro
- **Offline-fähig** – läuft auf der Baustelle ohne Internet
- **Installierbar** – Icon auf dem Homescreen wie eine native App
- **Daten bleiben lokal** im Browser (DSGVO-freundlich)

## Dateien in diesem Paket

| Datei | Zweck |
|---|---|
| `index.html` | Haupt-App |
| `app.js` | Anwendungslogik |
| `manifest.json` | PWA-Konfiguration |
| `sw.js` | Service Worker (Offline-Fähigkeit) |
| `icon-192.png` | App-Icon (klein) |
| `icon-512.png` | App-Icon (groß) |

Alle Dateien gehören in **denselben Ordner**.

## Installation auf einem Webspace

Du brauchst einen Ort im Internet, von dem du die App über HTTPS aufrufen kannst. Der einfachste kostenlose Weg ist GitHub Pages:

### Variante A: GitHub Pages (kostenlos, empfohlen)

1. Account auf [github.com](https://github.com) anlegen, falls noch nicht vorhanden
2. Neues Repository anlegen, z.B. `badsanierung` (Sichtbarkeit "Public")
3. Alle 6 Dateien aus diesem Ordner ins Repository hochladen (im GitHub-Web einfach per Drag-and-Drop in den Repo-Browser)
4. Im Repository auf **Settings → Pages** gehen
5. Bei **Source** "Deploy from a branch" wählen, bei **Branch** "main" und Ordner "/ (root)" – dann **Save**
6. Nach 1–2 Minuten ist die App erreichbar unter:
   `https://DEIN-USERNAME.github.io/badsanierung/`

### Variante B: Eigener Webspace

Wenn du bereits einen Webspace hast (FTP/SFTP):

1. Alle 6 Dateien per FTP in einen Ordner hochladen, z.B. `bad/`
2. Aufrufen unter `https://deine-domain.de/bad/`
3. Wichtig: Die Seite **muss über HTTPS** geladen werden, sonst funktioniert die PWA-Installation nicht.

### Variante C: Lokal auf dem Rechner

Du kannst die `index.html` auch einfach direkt vom Rechner aus öffnen (Doppelklick). Das funktioniert für die Checkliste und den Grundriss, **aber**: keine PWA-Installation, kein Offline-Modus auf dem Handy. Daher nur für schnellen Test geeignet.

## Installation auf dem Handy

1. Die URL deiner App im **Safari (iOS)** oder **Chrome (Android)** öffnen
2. **iOS:** Teilen-Symbol → "Zum Home-Bildschirm" → bestätigen
3. **Android:** Drei-Punkte-Menü → "App installieren" oder "Zum Startbildschirm hinzufügen"
4. Beim ersten Start lädt die App alle Dateien für den Offline-Betrieb herunter
5. Ab jetzt erreichbar wie eine normale App über das Icon

## Nutzung

### Checkliste

- Position antippen → klappt auf, Felder werden sichtbar
- Häkchen oben links → Position als erledigt markieren
- Bei Dropdown-Feldern entweder Standardoption wählen ODER Freitext daneben eingeben
- Notizfeld unten in jeder Position für individuelle Hinweise

### Grundriss

- Raummaße oben in cm eingeben → "Übernehmen"
- Symbol-Buttons fügen Symbole in der Raummitte ein
- **Antippen + ziehen** verschiebt das Symbol
- **Doppeltippen** rotiert um 90°
- **Rechtsklick** (Desktop) oder Lösch-Button im Panel entfernt das Symbol
- Auswahl-Panel oben: Maße in cm exakt einstellen
- Beim Loslassen nahe einer Wand: Symbol rastet an die Wand
- Pfeiltasten (Desktop) verschieben in 1-cm-Schritten, mit Shift in 10-cm

### Projekte

- 📁-Symbol oben rechts → Projekt-Übersicht
- "Neues Projekt anlegen" oder "Bearbeiten" für Name, Adresse, Datum
- Projekt-Eintrag antippen → wechselt zum Projekt
- 🗑 löscht (mit Bestätigung)

### Export

- 📄-Symbol oben rechts oder Button in der Zusammenfassung → Druckansicht (auf Handy: "In PDF speichern" auswählen)
- Zusammenfassung-Tab: Text in Zwischenablage kopieren
- "Als JSON exportieren": gesamtes Projekt als Datei sichern (für Backup oder Übergabe ans Büro)
- "JSON importieren" im Projekte-Modal: Datei wieder einlesen

## Datenschutz

Alle Eingaben werden ausschließlich lokal im Browser gespeichert (`localStorage`). Es werden keine Daten an einen Server übertragen. Bei Browserdaten-Löschung gehen die Projekte verloren – daher regelmäßig per JSON-Export sichern.

## Updates

Wenn neue Versionen der App über die URL bereitgestellt werden, lädt der Service Worker sie automatisch beim nächsten Online-Start.
