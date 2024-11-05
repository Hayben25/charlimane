#!/bin/bash

echo "Greetings mortal, I see you want to change your theme colors\n"

echo "Which color would you like to change to(black, blue, green, grey, light-blue, light-green, orange, pink, purple, red, turquoise, white, yellow)"
read -p "Choose:: " p

cp ~/.config/charlimane/colors/$p ~/.Xresources
xrdb -merge ~/.Xresources
read -p "Choose aspect ratio(16_9 or 16_10):: " r

nitrogen --set-auto ~/backgrounds/$r/$p.png