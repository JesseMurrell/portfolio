# Portfolio Site Walkthrough

I have successfully built your portfolio site using React, Vite, and Tailwind CSS v4.

## Features

- **Responsive Design**: Works on mobile, tablet, and desktop.
- **Dark/Light Mode**: Toggles based on system preference or user choice.
- **Animations**:
    - Split Text animation in the Hero section.
    - Infinite Logo Loop in the "Worked With" section (smooth, continuous).
    - Scroll-triggered animations for project cards (dynamic scale and parallax).
    - Dot Grid Background (interactive, subtle opacity).
    - "Worked With" section integrated into Hero (above the fold).
    - Apple/Notion-inspired typography and spacing (Inter, tight tracking).
- **Navigation**: 
    - Vertical scrolling breakpointed navigation (Left aligned).
    - Sub-items for individual projects.
    - Top scroll progress bar.
    - Active state highlighting for main and sub-items.
- **Content**:
    - **Hero**: "Hello, I'm Jesse" with links to LinkedIn and Resume.
    - **Worked With**: Infinite loop of company logos (SVG).
    - **Projects**: Cards for Mental Mamba, Apple, Australa, DescribeMe & Kulinary.
    - **Contact**: Simple contact form.

## How to Run

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Start Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) in your browser.

3.  **Build for Production**:
    ```bash
    npm run build
    ```
    The output will be in the `dist` directory.

## Deployment to GitHub Pages

To deploy to GitHub Pages, you can use the `gh-pages` package or GitHub Actions.
I have configured `vite.config.ts` (default) but you might need to set the `base` path if it's not at the root of the domain.
If you are deploying to `username.github.io`, the default base `/` is fine.
If you are deploying to `username.github.io/portfolio`, you need to set `base: '/portfolio/'` in `vite.config.ts`.

## Assets
I have moved the assets from `private_assets/resources` to `public/assets`.
- Resume: `public/assets/(12) Jesse Murrell | LinkedIn.pdf`
- Images: `public/assets/home screen example.jpg`, etc.

## Verification
I have verified that the project builds successfully (`npm run build`).
I have fixed lint errors and ensured the code is clean.
