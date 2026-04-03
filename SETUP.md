# 🔥 Dalyn's Content Engine — Setup Guide

Follow these steps ONE TIME and you're set forever.

---

## STEP 1 — Install Node.js (takes 2 minutes)

1. Go to: **https://nodejs.org**
2. Click the big green **"LTS"** download button
3. Open the downloaded file and click through the installer (just keep clicking Next/Continue)
4. When it's done, you're good.

---

## STEP 2 — Get your Anthropic API Key (free to start)

1. Go to: **https://console.anthropic.com**
2. Sign up for a free account
3. Click **"API Keys"** in the left sidebar
4. Click **"Create Key"**, give it a name like "Content Engine"
5. Copy the key — it looks like: `sk-ant-api03-...`
6. Save it somewhere (a notes app is fine) — you'll only need to paste it once per session

---

## STEP 3 — Run the app

**On Mac:**
1. Open the **Terminal** app (search for it with Cmd+Space)
2. Type this and hit Enter:
   ```
   cd ~/Downloads/dalyn-content-engine
   ```
3. Type this and hit Enter (only need to do this once ever):
   ```
   npm install
   ```
4. Type this and hit Enter to start the app:
   ```
   npm start
   ```
5. Open your browser and go to: **http://localhost:3000**

**On Windows:**
1. Open **Command Prompt** (search for "cmd" in the Start menu)
2. Type this and hit Enter:
   ```
   cd %USERPROFILE%\Downloads\dalyn-content-engine
   ```
3. Type this and hit Enter (only need to do this once ever):
   ```
   npm install
   ```
4. Type this and hit Enter to start the app:
   ```
   npm start
   ```
5. Open your browser and go to: **http://localhost:3000**

---

## STEP 4 — Use it

1. Paste your API key in the field at the top, hit **Save Key**
2. Pick your topic, style, and how many ideas you want
3. Hit **⚡ GENERATE**
4. Save the ideas you like

---

## Every time after this

Just open Terminal/Command Prompt, navigate to the folder, type `npm start`, and go to http://localhost:3000. That's it.

To stop the server: press **Ctrl+C** in the terminal.

---

Questions? You've got this. 💪
