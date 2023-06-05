
@echo off

setlocal 
cd /D %~dp0
if "%FORMS_DIR%"=="" set FORMS_DIR=%~dp0
if %FORMS_DIR:~-1%==\ set FORMS_DIR=%FORMS_DIR:~0,-1%
cd %FORMS_DIR%

npm install
