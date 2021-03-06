import { processPagesDir } from '@redwoodjs/core'

export default function(source) {
  // Process the dir to find all Page dependencies.
  const deps = processPagesDir()

  // Inform Webpack that we're pulling external dependencies so it can do the
  // right thing with watched files, etc.
  deps.forEach((entry) => {
    this.addDependency(entry.path)
  })

  // Grab the import strings from the deps and get them ready to be appended
  // onto the Routes file.
  const importString = deps.map((x) => x.importStatement).join('\n')

  // Give 'em what they want!
  return importString + '\n\n' + source
}
