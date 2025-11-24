## DISCLAIMER

This is Axiom Trade clone by Soham Sarkar from IIT Kharagpur for Placement purpose only.

## CONTENTS
1. Screenshots
2. Basic Documentation

# SCREENSHOTS

### 1440px
<img width="1709" height="953" alt="image" src="https://github.com/user-attachments/assets/989fd6a4-cf12-4afa-b5b9-5a53873a8905" />

<img width="1706" height="952" alt="image" src="https://github.com/user-attachments/assets/57220551-8dd4-4cd7-b6ef-627dbacbfe8e" />

### 1024px
<img width="1023" height="866" alt="image" src="https://github.com/user-attachments/assets/7bb9b471-f8bc-43d2-b1ef-4d2cd6219620" />

### 768px
<img width="767" height="864" alt="image" src="https://github.com/user-attachments/assets/9dcd8cf5-38e0-4a40-a95c-1b92bceff870" />

### 425px
<img width="427" height="865" alt="image" src="https://github.com/user-attachments/assets/e78c075e-97f5-4f0a-bb59-66713b4bc87d" />

<img width="427" height="865" alt="image" src="https://github.com/user-attachments/assets/e209f451-9c98-4c58-a643-0235368c09dc" />

### 320px
<img width="320" height="863" alt="image" src="https://github.com/user-attachments/assets/438c486d-cb26-45e0-8c87-22734e59762f" />

<img width="321" height="867" alt="image" src="https://github.com/user-attachments/assets/b9d180da-d442-4fc2-a8ce-9fa35062feb0" />

# BASIC DOCUMENTATION

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (with App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Components**: [ShadCN/UI](https://ui.shadcn.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) & Custom inline SVGs

## Project Structure

The project follows a standard Next.js `src` directory structure:

- **/src/app/**: Contains the core application routes, layouts, and global styles.
  - `layout.tsx`: The root layout, containing the `<html>` and `<body>` tags, global fonts, and metadata.
  - `page.tsx`: The entry point for the main page, which renders the `TokenDashboard`.
  - `globals.css`: Defines the application's theme using CSS variables for colors, spacing, and other design tokens.
- **/src/components/**: Contains all React components.
  - `token-dashboard/`: A feature-sliced directory containing all components related to the main dashboard functionality. This promotes modularity and makes it easy to locate related files.
  - `ui/`: Houses the ShadCN UI components, which are designed to be highly reusable and composable.
  - `icons.tsx`: A central file for custom SVG icons to ensure consistency and reusability.
- **/src/hooks/**: Contains custom React hooks.
  - `use-token-stream.ts`: Simulates a real-time data feed for token prices and stats.
  - `use-breakpoint.ts`: A hook to detect the current viewport size for implementing responsive design.
- **/src/lib/**: Contains utility functions, type definitions, and mock data.
  - `types.ts`: Defines the core data structures for the application, like the `Token` type.
  - `mock-data.ts`: Provides the initial dataset and logic for generating tokens, simulating a backend data source.
  - `utils.ts`: General utility functions, most notably `cn` for merging Tailwind CSS classes.

## Design Decisions & Architecture

### Component-Based Design

The UI is broken down into a hierarchy of React components:

- **`TokenDashboard`**: The main parent component that orchestrates the entire UI. It fetches the token data and handles the responsive layout, switching between a multi-column desktop view and a tabbed mobile view.
- **`TokenColumn`**: Represents a single vertical column on the desktop view (e.g., "New Pairs"). It is responsible for rendering its header and a list of `TokenCard` components.
- **`TokenCard`**: The most granular component, displaying all information for a single token. It is designed to be data-driven and self-contained.
- **`FilterModal`**: A dialog component that houses all filtering options. It is designed to be independent and can be triggered from multiple places in the UI.

This compositional approach makes the codebase easier to manage, test, and scale.

### State Management

State management is handled on the client-side using React hooks:

- **`useTokenStream`**: This custom hook acts as the single source of truth for token data. It initializes the data from a mock source and then uses `setInterval` to periodically update it, simulating a live data stream.
- **`useState` & `useEffect`**: Used for managing local component state, such as the active tab in the mobile view or managing client-side-only rendering to avoid hydration errors.
- **`useMemo`**: Employed within `TokenDashboard` to efficiently filter and sort the main token array into the three categories ("New Pairs," "Final Stretch," "Migrated"). This prevents re-computation on every render, improving performance.

### Responsive Design

Responsiveness is a core design principle:

- **Desktop View**: A three-column layout that displays all token categories simultaneously.
- **Mobile View**: To save space, a tabbed interface is used, allowing the user to switch between token categories. The header is collapsed into an accordion to provide access to filters and settings without cluttering the screen.
- **`useBreakpoint` Hook**: A custom hook determines whether the mobile or desktop layout should be rendered based on the screen width. This allows for clean, conditional rendering of entirely different JSX structures, which is more robust than trying to adjust a single layout with CSS alone.

### Styling

- **Tailwind CSS**: A utility-first approach is used for all styling, allowing for rapid development and co-location of styles with the markup.
- **CSS Variables**: The theme is defined in `src/app/globals.css` using HSL color variables. This makes it easy to implement theming (e.g., light/dark modes) and ensures consistency across the application.
- **ShadCN/UI**: Components are not imported from a library but are owned by the application. This gives full control over their styling and functionality.
