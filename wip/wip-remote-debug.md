1. Instalar ADB https://dl.google.com/android/repository/platform-tools-latest-windows.zip
2. Activar el "Debugging USB o Wifi" en Android 
3.A. Conectar Android vía USB en el PC:
  "adb connect 192.168.1.X:<port>" 
3.B O por Wifi 
  "adb pair 192.168.1.X:<port>"
4. Checar con "adb devices"
5. Abrir Chrome en PC Remoto e ir a "chrome://inspect/#devices"
6. Apretar inspeccionar para el TAB deseado 
