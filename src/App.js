// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { ApolloClient, ApolloProvider, createHttpLink } from "@apollo/client";

const httpLink = createHttpLink({
    // uri: "/graphql",
});

const client = new ApolloClient({
    // link: authLink.concat(httpLink),
    // cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                {/* <Provider store={store}> */}
                {/* <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                            Edit <code>src/App.js</code> and save to reload.
                        </p>
                        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                            Learn React
                        </a>
                    </header>
                </div> */}
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                {/* </Provider> */}
            </Router>
        </ApolloProvider>
    );
}

export default App;
