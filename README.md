# MocapViz

JavaScript library for visualizing motion capture data.

## Getting Started

See [Getting Started](docs/GettingStarted.md) for a quick start guide to using MocapViz.

## Installation

### Option 1 - Recommended

Download the minified module file from [releases](https://github.com/Tygrak/MocapViz/releases/). Copy the module file into your project folder.

### Option 2

Clone the repository, use `npm run build` to create a module file. Copy the module file into your project folder.

### Option 3

Clone the repository, copy the contents of `src` into your project folder.

## Usage Example

```javascript
    import * as Mocap from './mocap.min.js';

    Mocap.loadDataFromFile(dataFile, (sequences) => {
        let factory = new Mocap.VisualizationFactory();
        let visualizationElement = factory.visualizeSequenceDiffs(sequences[0], 850, 250, 250, 250);
        document.body.appendChild(visualizationElement);
    });
```

## Full Scripting Documentation

[Documentation](docs/DOCUMENTATION.md)

## Examples

Some examples using this library are available in the `examples` folder. To start off, see the file `example.html`.

### Live Sites of Examples

[example.html - most basic example, showing loading a data file and creating a visualization](https://tygrak.github.io/MocapViz/examples/example.html)

[multiView.html - shows off most features of mocapViz](https://tygrak.github.io/MocapViz/examples/multiView.html)

[categories.html - loads and visualizes all sequences of a selected category from a data file](https://tygrak.github.io/MocapViz/examples/categories.html)

[tester.html - used for our user testing](https://tygrak.github.io/MocapViz/examples/tester2.html)
