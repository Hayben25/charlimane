#!/bin/bash

mv ~/chrome ~/.mozilla/firefox/*e
echo "remember to go to about:config and change the toolkit.legacyUserProfileCustomizations.stylesheets to true"

mv config ~/.config/i3

mv charlimagne .config

mv polybar .config

mv Untitled.bashrc ~/.bashrc

sudo pacman -S kitty neofetch unzip net-tools polybar spotify-launcher jdk-openjdk docker

spotify-launcher

curl -fsSL https://raw.githubusercontent.com/spicetify/cli/main/install.sh | sh

cd ~

mkdir code

cd code

mkdir dots

git clone https://gist.github.com/208fe1accd2219507b07a5e250a91df0.git

cd dots

git clone https://github.com/Hayben25/dots.git

chmod +x ~/code/dots/update.sh

./update.sh

bash <(curl https://end-4.github.io/dots-hyprland-wiki/setup.sh)
