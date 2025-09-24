# Contador de Calorías - React + TypeScript

Una aplicación web para el seguimiento de calorías consumidas y quemadas, desarrollada con React, TypeScript y Vite.

## Descripción del Proyecto

El Contador de Calorías es una aplicación que permite a los usuarios:

- Registrar alimentos consumidos y sus calorías
- Registrar actividades físicas y calorías quemadas
- Visualizar un resumen de calorías consumidas, quemadas y balance total
- Editar y eliminar registros existentes
- Almacenar la información localmente para persistencia de datos

La aplicación está construida con un enfoque en componentes reutilizables y tipado fuerte gracias a TypeScript.

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

![Pantalla Principal](https://imgur.com/E1fVqE6)

### Formulario de Registro

![Formulario para llenar](https://imgur.com/n1nigfP)

### Resumen de Calorías

![Resumen de Calorías](https://imgur.com/WhOpLI1)

## Características

- Interfaz intuitiva y responsive
- Cálculo automático de balance calórico
- Categorización de entradas (comida/actividad)
- Persistencia de datos mediante LocalStorage
- Validación de formularios

## Contribuir

Si deseas contribuir a este proyecto, por favor:

1. Haz un fork del repositorio
2. Crea una rama para tu característica (`git checkout -b feature/nueva-caracteristica`)
3. Haz commit de tus cambios (`git commit -m 'Añadir nueva característica'`)
4. Haz push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles.
