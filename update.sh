#!/bin/bash
git pull

rm -r ~/.config/polybar
rm -r ~/.config/charlimane

cp -r polybar ~/.config
cp -r charlimane ~/.config

chmod +x ~/.config/charlimane/change.sh

cp config ~/.config/i3

rm -r ~/backgrounds

cp -r backgrounds ~

cp .bashrc ~

rm -r ~/.mozilla/firefox/*e/chrome
cp -r chrome ~/.mozilla/firefox/*e

cp keybinds.conf ~/.config/hypr/custom

i3-msg restart
polybar-msg cmd quit
polybar -r example | tee -a /tmp/polybar1.log & disown