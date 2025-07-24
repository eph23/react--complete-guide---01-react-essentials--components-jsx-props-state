import { useState } from "react";
import { Component } from "react";

import { CORE_CONCEPTS } from "./data.js";

import Header from "./components/Header/Header.jsx";
import CoreComponents from "./components/CoreComponents.jsx";
import TabButton from "./components/TabButton.jsx";

import { EXAMPLES } from "./data.js";

function App() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
        console.log(selectedTopic);
    }

    let tabContent = <p>Please select a topic!</p>;

    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }
    console.log("APP COMPONENT RENDERING");

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
                        <TabButton onSelect={() => handleSelect("components")}>
                            Components
                        </TabButton>
                        <TabButton onSelect={() => handleSelect("jsx")}>
                            JSX
                        </TabButton>
                        <TabButton onSelect={() => handleSelect("props")}>
                            Props
                        </TabButton>
                        <TabButton onSelect={() => handleSelect("state")}>
                            State
                        </TabButton>
                    </menu>
                    {tabContent}
                </section>
            </main>
        </div>
    );
}

export default App;
