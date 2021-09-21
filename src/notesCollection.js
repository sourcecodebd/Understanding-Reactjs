const notesCollection = [
    { no: 1, desc: 'NPM = Node Package Manager. npm is the package manager for the Node JavaScript platform. It puts modules in place so that node can find them, and manages dependency conflicts intelligently. It is extremely configurable to support a wide variety of use cases. Most commonly, it is used to publish, discover, install, and develop node programs.' },
    { no: 2, desc: 'CLI = Command Line Interface. A command-line interface (CLI) processes commands to a computer program in the form of lines of text. The program which handles the interface is called a command-line interpreter or command-line processor.' },
    { no: 3, desc: `Webpack, Babel Compiler: Webpack is a static module bundler for JavaScript applications. It takes modules, whether that's a custom file that we created or something that was installed through NPM, and converts these modules to static assets. On the other hand, Babel is a transpiler that is responsible to converting new language features to old. You can write code that would run on many browser by using just the bundler but without using Babel. You code does become more convoluted by transpiling it with Babel, so you should only do this if you need to.` },
    { no: 4, desc: `JSX = JavaScript XML. JSX is an inline markup that looks like HTML and gets transformed to JavaScript. A JSX expression starts with an HTML-like open tag, and ends with the corresponding closing tag. JSX tags support the XML self close syntax so you can optionally leave the closing tag off. React doesn't require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.` },
    {
        no: 5, desc: `React allows us to pass information to a Component using something called props (stands for properties). Props are basically kind of global variable or object. Props are arguments passed into React components. Props are passed to components via HTML attributes. Props are unidirectional. That means we can send data via props from parent to child components. But normally we can't send data from child to parent.`
    },
    { no: 6, desc: `useState: State is immutable. That means state variable won't be changed until calling the variable through state function. useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value. Using the useState hook inside a function component, you can create a piece of state without switching to class components.` },
    {
        no: 7, desc: `useEffect: useEffect means rendering something. In brief it holds a cleanup function '()=>{}' and a dependency injection '[ ]'. if there is no dependency, like this
    useEffect(()=>console.log('Hello')). Then Hello will be declared the same number of time as clicked on button; that means will render everytime.
    But if dependency array is empty, rendering will be only one time since loading of the site, like this
    useEffect(()=>console.log('Hello'),[])
    But if dependency array
    has state varible then then rendering will depend on that variable, like this
    const [steps, setSteps]=useState(0);
    useEffect(()=>console.log('Hello'),[steps]).
    ` },
    { no: 8, desc: `Hook: Hook is a built in function that let us use useState, useEffect in functional component without using class component. It handles local component state` },
    { no: 9, desc: `Stateful and Stateless/Presentational Components: In React, a stateful component is a component that holds some state. Stateless components, by contrast, have no state. Note that both types of components can use props. In the example, there are two React components. The Store component is stateful and the Week component is stateless.` },
    { no: 10, desc: `Props vs States: Props are immutable that means can't be changed. But States are changeable until States turn into props for data passing.` },
    { no: 11, desc: `React is an open-source JavaScript library used for frontend development. It is used for building user interface or UI components. Its component-based and declarative traits let developers create interactive and complex UIs easily. Developers can build fast and scalable apps for all platforms due to its “learn once write anywhere” principle.` },
    { no: 12, desc: `How React works: React uses a declarative example that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.` },
    {
        no: 13, desc: `React-DOM: React-DOM is a complimentary library to React which glues React to the browser DOM. ReactDOM is a package that provides DOM specific methods that can be used at the top level of a web app to enable an efficient way of managing DOM elements of the web page. The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation. React application creates virtual copy of DOM init. If there is any update in DOM then, then React applies Diff Algorithm in specific places where changes were made, selects that portion of element and includes to the main DOM and updates the DOM accordingly.
    ` },
    {
        no: 14, desc: `React Components lifecycle: Every React Component has a lifecycle of its own, lifecycle of a component can be defined as the series of methods that are invoked in different stages of the component's existence. ... A React Component can go through four stages of its life as follows.. 
        Initialization: This is the stage where the component is constructed with the given Props and default state. This is done in the constructor of a Component Class.
        Mounting: Mounting is the stage of rendering the JSX returned by the render method itself.
        Updating: Updating is the stage when the state of a component is updated and the application is repainted.
        Unmounting: As the name suggests Unmounting is the final step of the component lifecycle where the component is removed from the page.
    ` },
];
export default notesCollection;