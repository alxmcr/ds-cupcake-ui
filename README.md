# Cupcake UI

A design system for a fintech startup that is changing the world.

![Banner](https://cupcake-ui-front.netlify.app/banners/01-cupcake-ui-banner.png)

## Screenshots

- Storybook home page

![Storybook home page](https://cupcake-ui-front.netlify.app/screenshots-storybook/01-storybook-home-page.png)

- Atomic design: stories

![Atomic design: stories](https://cupcake-ui-front.netlify.app/screenshots-storybook/02-atomic-design-stories.png)

- Combobox storybook: default

![Combobox storybook: default](https://cupcake-ui-front.netlify.app/screenshots-storybook/03-combobox-storybook-default.png)

- Combobox storybook: open

![Combobox storybook: open](https://cupcake-ui-front.netlify.app/screenshots-storybook/04-page-storybook-open.png)

- Combobox storybook: select

![Combobox storybook: select](https://cupcake-ui-front.netlify.app/screenshots-storybook/05-page-storybook-select.png)

- Combobox storybook: search

![Combobox storybook: search](https://cupcake-ui-front.netlify.app/screenshots-storybook/06-page-storybook-search.png)

## Tech Stack

**Client:** Typescript, React, React hooks, React Router, TailwindCSS, Storybook

**Server:** Vite.js

## Storybook

- [Storybook: Github Page](https://alxmcr.github.io/ds-cupcake-ui)
- [Cupcake UI - Storybook at Chromatic\*](https://66b1bf8878373c966dd1bcab-hrhfrvfedy.chromatic.com/)

(\*) Chromatic: you need to create an account at [chromatic.com](https://www.chromatic.com/)

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` or `.env.local` file: `VITE_APP_PORT`

**For example:**

`VITE_APP_PORT=7012`

## Run Locally

Clone the project

```bash
  git clone https://github.com/alxmcr/cupcake-ui
```

Go to the project directory

```bash
  cd cupcake-ui
```

Install dependencies

```bash
  npm install
```

Start the storybook server

```bash
  npm run storybook

  # http://localhost:6006/
```

Start the development server

```bash
  npm run dev

  # http://localhost:<your_port>/
```

`<your_port>`: on enviroment variables (`.env`, `.env.local`).

## Combobox in Action

```tsx
import { ComboBox } from '../../../components/03_organisms/ComboBox';
import mockUsersData from '../../../mocks/data/sample-options-user.json';

type Props = {
  title: string;
};

export default function PageTemplateComboBox({ title = '' }: Props) {
  return (
    <div className="flex h-[500px] flex-col gap-4">
      <h1 className="my-4 text-[20px]">{title}</h1>
      <ComboBox
        captionText="Solo podrás elegir a Victor para continuar."
        id="ControlComboBox-Users"
        labelText="Elige un usuario"
        name="combobox-users"
        options={mockUsersData}
      />
    </div>
  );
}
```

![Combobox in action](https://cupcake-ui-front.netlify.app/screenshots-using/02-combobox-in-action.png)

## Discoveries

(\*) Some comments left on Figma design.

- Multiple color palette - Follow TailwindCSS customization.
- Different spacing: line-height and letter-spacing - Follow TailwindCS custom values.
- Research about more box-shadow best practices with Tailwind - Work together inline CSS classes with default CSS classes on CSS files.
- Reduce scope about scrollbar and styles definition - centralize the global styles to `tailwind.css`.
- Atomic design and naming conventions - Methodology to help mem with a fast development, maintain, and reduce time to development.

## Next steps, next releases

- Add more unit testing with React Testing Library.
- Improve components considering web accessibility (a11y).
- Enable on components with internationalization (i18n).
- Apply more Tailwind.css customization.
- Enable Dark/Light modes.
- Research, implement multibranding for multiple companies and customers.
- Add more use cases about components built.
- After more uses cases, work on integration testing.
- Research about a customization developers documentation (on top Storybook)
- Publish NPM package and GitHub Package.

## Authors

- [Alejandro M. Coca Rojas (@alxmcr)](https://www.github.com/alxmcr)

## Feedback

If you have any feedback, please reach out to us at amcocarojas@gmail.com.
