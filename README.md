A simple menu demo using `react`, `react-spring`, and `lodash`. Buildled and built to use `esbuild`. The build is deployed to netlify at [this link](https://neilyio-lowkey-take-home.netlify.app).

Much can be done with tiny, sharp tools. React, react-spring, and lodash are the only runtime dependencies of this project, and I believe that many projects can grow quite large using only these. Ask me to choose one to make it home from Mars, and I'll choose `lodash`. We can whittle our own DOM manipulation with a good knife.

The high-level components are separated into `App`, `Sidebar`, and `Canvas`. The `App` is the container around the entire screen. The `Sidebar` is the vertical menu that contains clickable buttons. The `Canvas` is the area that reacts to the `Sidebar`, changing its display based on the selection.

Simplicity is the design goal of this project. The components are designed as an exercise in the single-responsibility principle. As much as possible, they do only one thing, even if that leads to more components mounted to the DOM. Components that have styling data don't have any logic, and they don't compose child components. Some components only exist as click handlers, or to act as colored spaces. Components get "smarter" higher-up in the tree, where their job is to hold state or perform logic. Lower in the tree, they're tiny and stateless. They should lend themselves well to visual testing and modularized development environments.

Components are designed to be decoupled in functionality, but they share a common "business language". I've elected to use consistent naming for parameters, and codify them into types that are combined with the `&` operator. This helps keep function signatures clean, and would allow us room to compose more complex types as needed by the application. We work with common parameters like `height`, and define common concepts like `selected`.

There's room to promote optimization and reusability, as well flexibility in the type system. In particular, we could remove the redundant iteration inside of the `App` component, in which the data representing the sidebar buttons is looped multiple times. This would be a crucial optimization should the length of the sidebar grow. A second optimization might be a reduction in number of DOM elements used by combining state, styling, and logic into single components. As the application gets larger, we would trade off simplicity for performance as necessary.

To achieve the "pass-over" effect of the outline/bold sidebar icons, this implementation duplicates all the label and icon elements in the sidebar. My decision here was that it's easier to model the sidebar as two nearly-identical "layers"... one with bolded icons, and one with outlined icons. Both layers are always mounted to the DOM, and the cursor "reveals" the bolded layer as it passes by. This is a accomplished with a trick of `overflow: hidden`, which avoids the deprecated CSS `clip`, the unadopted `clip-path`, and making too many calls to a DOM API like `getBoundingClientRect()`.




