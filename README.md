# Motivation
 * Background
   * Various [Visual Programming Languages and tools](http://blog.interfacevision.com/design/design-visual-progarmming-languages-snapshots/#blender-sverchok-add-on) invented to help us develop more "easily" since the day we start coding
   * But none of these satisfy me actually
 * Inspiration
   * The speech [Jonas Gebhardt - Evolving the Visual Programming Environment with React at react-europe 2016](https://www.youtube.com/watch?v=WjJdaDXN5Vs), totally blow up mu mind.
   * It's exactly what I want
   * But since we've no source provided, we create ourselves

# Plan
 * ui
   * react-dnd ui to wrap the node component
   * export input and output to connect nodes, draw line when combined
     * check the type when connect
 * node component
   * export spec to declare what the component are 
   * the input and output of node are observable
 * engine
   * combineLatest observable in the global when create new node
   * help node input subscribe when connect in UI 
 * layout
   * grid dnd to generate gridId
   * map generated nodeId to gridId
