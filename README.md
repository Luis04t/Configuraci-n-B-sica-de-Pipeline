# Simple Web App

Aplicación web simple con pipeline CI/CD usando GitHub Actions.

## Requisitos

- Node.js instalado
- Cuenta de GitHub

## Estructura

- `public/`: archivos estáticos para despliegue
- `src/`: código fuente JS
- `tests/`: pruebas unitarias con Jest

## Scripts

- `npm test`: ejecuta pruebas y genera cobertura

## Pipeline CI/CD

- Automatiza instalación, pruebas y despliegue a GitHub Pages
- Workflow definido en `.github/work /workflows/ci-cd.yml`

## Contribución

1. Haz fork del repositorio.
2. Crea una rama con tu feature: `git checkout -b feature/nueva-funcionalidad`
3. Realiza commits con mensajes claros.
4. Envía un pull request.

## Despliegue

El despliegue es automático al hacer push en la rama `main`. La aplicación estará disponible en:
