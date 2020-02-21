# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

	React JS is a JavaScript library created by Facebook. It allows us to rerender content quickly and dynamically without page reloads, and hook onto the render effect to create powerful UIs, as well as simplifying the component creation process.

2. What does it mean to think in react?

	I suppose this would be being mindful of the parent-child relationships established in our components, the flow of data that comes with that, and state.
	It would also be thinking about ways to break components down into modular pieces to keep the code looking clean and DRY.

3. Describe state.

	State is the current status of the component. For example, a component could be hidden and toggled on.

4. Describe props.

	Props are data passed from a parent component to a child component. Taking today for example, we've passed an array containing Star Wars characters from a parent component down to the individual card child component.

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

	Side effects are events from the rendering process. We can hook onto these and sync them with useEffect.