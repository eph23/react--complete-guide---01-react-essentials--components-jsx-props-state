import { CORE_CONCEPTS } from "./data.js";

import Header from "./components/Header.jsx";
import CoreComponents from "./components/CoreComponents.jsx";

import { Component } from "react";

function App() {
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
            </main>
        </div>
    );
}

export default App;
