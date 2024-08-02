
# PT-Genesis

Este es un proyecto creado utilizando Astro, TypeScript, Tailwind CSS, React y Shadcn. El proyecto incluye funcionalidades de formularios de reserva que permiten enviar correos electrónicos utilizando EmailJS.

## Tecnologías Utilizadas

- **Astro**: Framework para construir sitios web rápidos.
- **TypeScript**: Lenguaje de programación que extiende JavaScript añadiendo tipos.
- **Tailwind CSS**: Framework de CSS para un diseño rápido y flexible.
- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Shadcn**: Biblioteca para componentes de UI.

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

```
/pt-genesis
│
├── .astro/
├── .github/
├── .vscode/
├── dist/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── AttorneyCards.tsx
│   │   │   ├── BookAppointment.astro
│   │   │   ├── BookingForm.tsx
│   │   │   ├── BookingFormLast.tsx
│   │   │   ├── Card.astro
│   │   │   ├── ContactUs.astro
│   │   │   ├── Footer.astro
│   │   │   ├── navBar.tsx
│   │   │   ├── OurAttorneys.astro
│   │   │   ├── PracticeAdvice.astro
│   │   │   ├── ReviewCards.tsx
│   │   │   ├── WhatClientsSay.astro
│   │   │   ├── WhoAreWe.astro
│   │   ├── images/
│   │   │   ├── grandpas.png
│   │   │   ├── stars.png
│   │   ├── layouts/
│   │   │   ├── Layout.astro
│   │   ├── lib/
│   │   │   ├── utils.ts
│   ├── pages/
│   │   ├── index.astro
│   ├── env.d.ts
│   ├── input.css
│   ├── output.css
│
├── .gitignore
├── astro.config.mjs
├── components.json
├── package-lock.json
├── package.json
├── README.md
├── tailwind.config.js
├── tsconfig.json
```

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto:

1. Clona el repositorio:
   ```sh
   git clone https://github.com/JorgeCab2711/pt-genesis.git
   ```

2. Dirígete al directorio del proyecto:
   ```sh
   cd pt-genesis
   ```

3. Instala las dependencias:
   ```sh
   npm install
   ```

4. Inicia el servidor de desarrollo:
   ```sh
   npm run dev
   ```

## Funcionalidades de los Formularios de Reserva

Este proyecto incluye formularios de reserva que permiten enviar correos electrónicos utilizando EmailJS. Las funcionalidades incluyen:

- **Formulario vacío**: Maneja la lógica cuando el formulario está vacío.
- **Formulario con datos**: Una vez que los datos están completos, el formulario utiliza EmailJS para enviar un correo electrónico al usuario correspondiente, en este caso, al correo de Luis.


