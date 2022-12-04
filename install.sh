pkg update && pkg upgrade
pkg install git -y
pkg install nodejs -y
pkg install ffmpeg -y
pkg install imagemagick -y
pkg install npm
git clone https://github.com/MendingTuru/drkoko-bot
cd drkoko-bot
npm install
node .
