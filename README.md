# Contador de Calorías - React + TypeScript

Una aplicación web para el seguimiento de calorías consumidas y quemadas, desarrollada con React, TypeScript y Vite.

## Descripción del Proyecto

El Contador de Calorías es una aplicación que permite a los usuarios:

- Registrar alimentos consumidos y sus calorías
- Registrar actividades físicas y calorías quemadas
- Visualizar un resumen de calorías consumidas, quemadas y balance total
- Editar y eliminar registros existentes
- Almacenar la información localmente para persistencia de datos

Es un proyecto utilizado para aprender React, TypeScript y Vite.

## Tecnologías Utilizadas

- React 19
- TypeScript
- Vite
- TailwindCSS
- Heroicons
- LocalStorage para persistencia de datos

## Instalación y Ejecución

Para ejecutar este proyecto localmente, sigue estos pasos:

1. Clona este repositorio:

```bash
git clone https://github.com/Mattyy000/Calorie-Tracker
cd 03-CalorieTracker
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## Compilación para Producción

Para compilar el proyecto para producción:

```bash
npm run build
```

Los archivos compilados estarán disponibles en la carpeta `dist`.

## Capturas de Pantalla

### Pantalla Principal

![Pantalla Principal](https://i.imgur.com/E1fVqE6.png)

### Formulario de Registro

![Formulario para llenar](https://i.imgur.com/n1nigfP.png)

### Resumen de Calorías

![Resumen de Calorías](https://i.imgur.com/WhOpLI1.png)

## Características

- Interfaz intuitiva y responsive
- Cálculo automático de balance calórico
- Categorización de entradas (comida/actividad)
- Persistencia de datos mediante LocalStorage
- Validación de formularios
