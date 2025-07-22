import { CORE_CONCEPTS } from "./data.js";

import Header from "./components/Header/Header.jsx";
import CoreComponents from "./components/CoreComponents.jsx";
import TabButton from "./components/TabButton.jsx";

import { Component } from "react";

function App() {
    function handleSelect() {
        console.log("Hello World");
    }

    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Time to get started!</h2>
                    <ul>
                        <CoreComponents {...CORE_CONCEPTS[0]} />
                        <CoreComponents {...CORE_CONCEPTS[1]} />
                        <CoreComponents {...CORE_CONCEPTS[2]} />
                        <CoreComponents {...CORE_CONCEPTS[3]} />

                        {/*                         <CoreComponents
                            title={CORE_CONCEPTS[3].title}
                            description={CORE_CONCEPTS[3].description}
                            image={CORE_CONCEPTS[3].image}
                        /> */}
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton onSelect={handleSelect}>
                            Components
                        </TabButton>
                        <TabButton onSelect={handleSelect}>JSX</TabButton>
                        <TabButton onSelect={handleSelect}>Props</TabButton>
                        <TabButton onSelect={handleSelect}>State</TabButton>
                    </menu>
                </section>
            </main>
        </div>
    );
}

export default App;
