#define MyAppName "Il Ciarnuro Round Timer"
#define MyAppVersion "1.0"
#define MyAppPublisher "Lupo Pasini Games"
#define MyAppURL "https://lupopasinigames.com"
#define MyAppExeName "Il Ciarnuro Round Timer.exe"

[Setup]
AppId={{B3C51762-0ED9-4BD0-A900-AA885087186B}
AppName={#MyAppName}
AppVersion={#MyAppVersion}
AppPublisher={#MyAppPublisher}
AppPublisherURL={#MyAppURL}
AppSupportURL={#MyAppURL}
AppUpdatesURL={#MyAppURL}
DefaultDirName={autopf}\{#MyAppName}
DisableProgramGroupPage=yes
LicenseFile=gpl.txt
OutputDir=setup
OutputBaseFilename=CiarnuroRT-win
Compression=lzma2/ultra64
CompressionThreads=1
LZMADictionarySize=262144
LZMANumFastBytes=273
SolidCompression=yes
LZMAUseSeparateProcess=yes
WizardStyle=modern

[Languages]
Name: "italian"; MessagesFile: "compiler:Languages\Italian.isl"

[Tasks]
Name: "desktopicon"; Description: "{cm:CreateDesktopIcon}"; GroupDescription: "{cm:AdditionalIcons}"; Flags: unchecked

[Files]
Source: "app\*"; DestDir: "{app}"; Flags: ignoreversion recursesubdirs createallsubdirs

[Icons]
Name: "{autoprograms}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"
Name: "{autodesktop}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"; Tasks: desktopicon

[Run]
Filename: "{app}\{#MyAppExeName}"; Description: "{cm:LaunchProgram,{#StringChange(MyAppName, '&', '&&')}}"; Flags: nowait postinstall skipifsilent

