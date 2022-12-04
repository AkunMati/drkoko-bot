apt update && pkg upgrade
apt install git -y
apt install nodejs -y
apt install ffmpeg -y
apt install imagemagick -y
apt install npm
git clone https://github.com/MendingTuru/drkoko-bot
cd drkoko-bot
npm install
node .
