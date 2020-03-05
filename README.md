# Il Ciarnuro Round Timer - Desktop (Currently in italian only)

Desktop version of [Il Ciarnuro Round Timer](https://github.com/LupoPasiniGames/CiarnuroTimer-Web) based on Electron.

## How to build
- `git clone` this repo
- `npm install` inside the repo directory
- `npm start` to test the app (remember to update the assets with the command specified below before running the app)
- `npm run buildwin`, `npm run buildlinux` and `npm run buildmac` to build the app for the corresponding operating systems inside the `out` directory **(these three commands will automatically fetch the latest assets from the [webapp repo](https://github.com/LupoPasiniGames/CiarnuroTimer-Web))**
- `npm run update` to manually update the assets from the webapp repo

On macOS/Linux, the unzip program is required. On Windows, both .NET Framework 4.5 or higher and Powershell 3 or higher are required.

For instructions on how to build the Windows installer package, see the README file inside _SETUP folder.

## License
Copyright (C) 2020 Lupo Pasini Games

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
