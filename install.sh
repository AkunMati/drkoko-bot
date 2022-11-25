pkg update && pkg upgrade
pkg install git -y
pkg install nodejs -y
pkg install ffmpeg -y
pkg install imagemagick -y
pkg install yarn
git clone https://github.com/MendingTuru/Bottom-MD2
cd Bottom-MD2
yarn
node .
