wt new-tab  -d "%cd%/generator/PatternsConsole" cmd /k "dotnet watch run --no-hot-reload" ; wt new-tab  -d "%cd%/patternsSite" cmd /k "npm i & npm start"
rem wt new-tab Powershell -d generator/PatternsConsole -c "dotnet watch run --no-hot-reload" 
rem ; new-tab Powershell -d patternsSite -c npm start