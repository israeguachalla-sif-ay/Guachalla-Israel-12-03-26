# Dashboard Administrativo - Ejercicio 1

Este proyecto implementa un dashboard administrativo completo utilizando Bootstrap 5, con funcionalidades responsive y validación de formularios.

## Características Implementadas

### 1. Sistema de Rejillas (Grid System)
- **Layout principal**: Sidebar lateral y área de contenido principal
- **Clases Bootstrap utilizadas**:
  - `.container-fluid` para el contenedor principal
  - `.row` y `.col-*` para el sistema de rejillas
  - Sidebar: `col-md-3 col-lg-2`
  - Contenido principal: `col-md-9 ms-sm-auto col-lg-10`

### 2. Consultas de Medios y Personalización
- **Archivo CSS personalizado**: `css/style.css`
- **Puntos de ruptura implementados**:
  - **Extra small (<576px)**: Sidebar oculto, fuente 14px, fondo blanco
  - **Small (≥576px y <768px)**: Sidebar 200px, fuente 15px, fondo gris claro
  - **Medium (≥768px y <992px)**: Sidebar 220px, fuente 16px, fondo gris estándar
  - **Large (≥992px)**: Sidebar 250px, fuente 17px
  - **Extra large (≥1200px)**: Sidebar 280px, fuente 18px

### 3. Componentes y Formularios
- **Navbar con menú desplegable**: Incluye navegación principal y menú de usuario
- **Formulario de Registro de Usuarios**:
  - Campos: Nombre, Apellido, Email, Contraseña, Confirmar Contraseña
  - **Validación visual**: Utiliza clases `.is-valid` e `.is-invalid`
  - Validación en tiempo real para cada campo
- **Botones con diferentes estados**:
  - Botones de acción con estados de carga (loading)
  - Estados: normal, loading, disabled
  - Animaciones y efectos hover

## Estructura de Archivos
```
ejercicio1/
├── index1.html          # Archivo principal HTML
├── css/
│   └── style.css        # Estilos personalizados
└── js/
    └── script.js        # JavaScript para validación y interactividad
```

## Tecnologías Utilizadas
- **HTML5**
- **CSS3** con media queries
- **Bootstrap 5.3.0**
- **JavaScript ES6+**
- **Font Awesome 6.4.0** para iconos

## Funcionalidades Interactivas
- Validación de formulario en tiempo real
- Estados de carga para botones
- Alertas de notificación
- Sidebar responsive (se oculta en móviles)
- Efectos hover en tarjetas
- Animaciones CSS

## Cómo Ejecutar
1. Abrir `index1.html` en un navegador web
2. O ejecutar un servidor local: `python3 -m http.server 8000`
3. Acceder a `http://localhost:8000`

## Navegadores Soportados
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Responsive Design
El dashboard se adapta automáticamente a diferentes tamaños de pantalla:
- **Móviles**: Sidebar oculto, navegación colapsable
- **Tablets**: Sidebar reducido, layout adaptado
- **Desktop**: Layout completo con sidebar visible