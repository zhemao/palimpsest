# Palimpsest

Palimpsest is an experimental HTML5 Canvas-based drawing application
meant to be used on touchscreen devices. It is written in Clojurescript.

It is currently rather bare-bones, with support for simple pencil lines
of variable thickness and basic undo/redo functionality.

Palimpsest smoothes strokes made by the user using the bezier curve-fitting
algorithm detailed in "An Algorithm for Automatically Fitting Digitized Curves"
by Phillip Schneider. The paper can be found in the "Graphics Gems" of the
[ACM Transactions on Graphics](http://tog.acm.org/resources/GraphicsGems/category.html).

## Using the application

In the project directory, run `lein cljsbuild once`, then open up the
`dev-resources/public/index.html` file.

## License

Copyright 2014 Howard Zhehao Mao

Distributed under the BSD License
