function lookup(object, word){
    return word.split(`.`).reduce((prev,curr)=> prev[curr], object)
}

const object = {a: {b: `dva`, c: `tri`}}
console.log(lookup(object, `a.b`))